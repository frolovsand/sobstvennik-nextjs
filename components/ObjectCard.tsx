import Link from 'next/link'
import type { ObjectData } from '@/data/objects'

function badgeClass(badge: string) {
  return /Покупка|Аренда \//i.test(badge) ? 'badge gold' : 'badge'
}

interface Props {
  object: ObjectData
}

export default function ObjectCard({ object }: Props) {
  return (
    <Link className="object-card" href={`/objects/${object.slug}`}>
      <div className="object-photo">
        <img src={object.photos[0]} alt={object.name} loading="lazy" />
        <span className={badgeClass(object.badge)}>{object.badge}</span>
      </div>
      <div className="object-body">
        <div className="object-name">{object.name}</div>
        <div className="object-addr">{object.addr}</div>
        <div className="object-prices">
          {object.rent && (
            <div className="price-block">
              <div className="price-label">Аренда</div>
              <div className="price-val">{object.rent}</div>
            </div>
          )}
          {object.sale && (
            <div className="price-block">
              <div className="price-label">Покупка</div>
              <div className="price-val">{object.sale}</div>
            </div>
          )}
        </div>
      </div>
      <div className="object-cta">
        <span>Подробнее об объекте</span>
        <span className="arr">→</span>
      </div>
    </Link>
  )
}
