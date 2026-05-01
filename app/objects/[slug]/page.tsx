import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { objects } from '@/data/objects'
import ObjectDetailPage from '@/components/ObjectDetailPage'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return objects.map((obj) => ({ slug: obj.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const obj = objects.find((o) => o.slug === params.slug)
  if (!obj) return { title: 'Объект не найден — Собственник' }
  return {
    title: `${obj.name} — Собственник`,
    description: obj.about.description,
  }
}

export default function ObjectPage({ params }: Props) {
  const obj = objects.find((o) => o.slug === params.slug)
  if (!obj) notFound()
  return <ObjectDetailPage object={obj} />
}
