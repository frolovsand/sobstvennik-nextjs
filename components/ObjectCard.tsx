import Link from 'next/link'
import type { ObjectData } from '@/data/objects'

function badgeClass(badge: string) {
  return /Продажа|Аренда \//i.test(badge) ? 'badge gold' : 'badge'
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
        <div className="object-addr">
          <svg
            className="object-pin"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>{object.addr}</span>
        </div>
        <div className="object-foot">
          <div className="object-prices">
            {object.rent && (
              <div className="price-block">
                <div className="price-label">Аренда</div>
                <div className="price-val">{object.rent}</div>
              </div>
            )}
            {object.sale && (
              <div className="price-block">
                <div className="price-label">Стоимость</div>
                <div className="price-val">{object.sale}</div>
              </div>
            )}
          </div>
          <span className="object-arrow" aria-hidden="true">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  )
}
