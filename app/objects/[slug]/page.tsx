import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getProperties, getPropertyBySlug } from '@/lib/api'
import ObjectDetailPage from '@/components/ObjectDetailPage'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const objects = await getProperties()
  return objects.map((obj) => ({ slug: obj.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const obj = await getPropertyBySlug(params.slug)
  if (!obj) return { title: 'Объект не найден — Собственник' }
  return {
    title: `${obj.name} — Собственник`,
    description: obj.about.description,
  }
}

export default async function ObjectPage({ params }: Props) {
  const obj = await getPropertyBySlug(params.slug)
  if (!obj) notFound()
  return <ObjectDetailPage object={obj} />
}
