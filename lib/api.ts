import { ObjectData, Section, Spec, objects as fallbackObjects } from '@/data/objects'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

// populate=* достаточно для списка (mainImage + gallery без вложенных компонентов)
const POPULATE_LIST = 'populate=*'

// Для детальной страницы нужны parameters внутри sections
const POPULATE_DETAIL =
  'populate[mainImage]=true&populate[gallery]=true&populate[sections][populate]=parameters'

function strapiImageUrl(url: string): string {
  if (!url) return ''
  if (url.startsWith('http')) return url
  return `${STRAPI_URL}${url}`
}

// ── Strapi v5 types (flat, без обёртки attributes) ────────────────────────

interface StrapiV5Image {
  id: number
  url: string
}

interface StrapiV5Parameter {
  id: number
  label?: string | null
  value?: string | null
  text?: string | null
}

interface StrapiV5Section {
  id: number
  eyebrow?: string | null
  title?: string | null
  description?: string | null
  layout: 'table' | 'list'
  parameters?: StrapiV5Parameter[]
}

interface StrapiV5Property {
  id: number
  documentId: string
  title: string
  slug: string
  address?: string | null
  dealType?: string | null
  rentPrice?: string | null
  salePrice?: string | null
  area?: string | null
  mainImage?: StrapiV5Image | null
  gallery?: StrapiV5Image[]
  sections?: StrapiV5Section[]
}

interface StrapiV5Response {
  data: StrapiV5Property[]
}

// ── Mapping helpers ────────────────────────────────────────────────────────

function dealTypeToBadge(
  dealType: string | null | undefined,
  rent: string | null | undefined,
  sale: string | null | undefined
): string {
  if (dealType === 'both' || (rent && sale)) return 'Аренда / Продажа'
  if (dealType === 'sale' || sale) return 'Продажа'
  if (dealType === 'rent' || rent) return 'Аренда'
  return dealType ?? ''
}

function normalizeSections(raw: StrapiV5Section[] | undefined): Section[] {
  if (!raw) return []
  return raw.map((s) => ({
    layout: s.layout,
    eyebrow: s.eyebrow ?? undefined,
    title: s.title ?? undefined,
    description: s.description ?? undefined,
    parameters: (s.parameters ?? []).map((p) => ({
      label: p.label ?? undefined,
      value: p.value ?? undefined,
      text: p.text ?? undefined,
    })),
  }))
}

function sectionToSpecs(section: Section | undefined): Spec[] {
  if (!section || section.layout !== 'table') return []
  return (section.parameters ?? [])
    .filter((p) => p.label && p.value)
    .map((p) => ({ key: p.label!, value: p.value! }))
}

function sectionToItems(section: Section | undefined): string[] {
  if (!section || section.layout !== 'list') return []
  return (section.parameters ?? [])
    .map((p) => p.text ?? '')
    .filter(Boolean)
}

function mapStrapiV5Property(item: StrapiV5Property, idx: number): ObjectData {
  const photos: string[] = []
  if (item.mainImage?.url) photos.push(strapiImageUrl(item.mainImage.url))
  for (const img of item.gallery ?? []) {
    if (img.url) photos.push(strapiImageUrl(img.url))
  }

  const sections = normalizeSections(item.sections)
  const [s0, s1, s2, s3, s4] = sections

  return {
    id: String(item.id),
    slug: item.slug,
    n: String(idx + 1).padStart(2, '0'),
    name: item.title ?? '',
    addr: item.address ?? '',
    badge: dealTypeToBadge(item.dealType, item.rentPrice, item.salePrice),
    rent: item.rentPrice ?? null,
    sale: item.salePrice ?? null,
    photos,
    about: {
      sectionTitle: s0?.title ?? item.title ?? '',
      description: s0?.description ?? '',
      specs: sectionToSpecs(s0),
    },
    conditions: {
      sectionTitle: s1?.title ?? '',
      description: s1?.description ?? '',
      specs: sectionToSpecs(s1),
    },
    management: {
      description: s2?.description ?? '',
      items: sectionToItems(s2),
    },
    restrictions: {
      description: s3?.description ?? '',
      items: sectionToItems(s3),
    },
    location: {
      description: s4?.description ?? '',
      items: sectionToItems(s4),
    },
    sections,
  }
}

// ── Public API ─────────────────────────────────────────────────────────────

export async function getProperties(): Promise<ObjectData[]> {
  try {
    const res = await fetch(`${STRAPI_URL}/api/properties?${POPULATE_LIST}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) throw new Error(`Strapi ${res.status}`)
    const json: StrapiV5Response = await res.json()
    if (!Array.isArray(json.data)) throw new Error('Unexpected Strapi response shape')
    return json.data.map(mapStrapiV5Property)
  } catch (err) {
    console.warn('[api] Strapi unavailable, using fallback data:', err)
    return fallbackObjects
  }
}

export async function getPropertyBySlug(slug: string): Promise<ObjectData | null> {
  try {
    const url = `${STRAPI_URL}/api/properties?filters[slug][$eq]=${encodeURIComponent(slug)}&${POPULATE_DETAIL}`
    const res = await fetch(url, { next: { revalidate: 60 } })
    if (!res.ok) throw new Error(`Strapi ${res.status}`)
    const json: StrapiV5Response = await res.json()
    if (!Array.isArray(json.data) || json.data.length === 0) return null
    return mapStrapiV5Property(json.data[0], 0)
  } catch (err) {
    console.warn('[api] Strapi unavailable, using fallback data:', err)
    return fallbackObjects.find((o) => o.slug === slug) ?? null
  }
}
