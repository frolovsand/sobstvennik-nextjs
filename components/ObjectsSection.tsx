import Link from 'next/link'
import type { ObjectData } from '@/data/objects'
import ObjectCard from './ObjectCard'

interface Props {
  objects: ObjectData[]
}

export default function ObjectsSection({ objects }: Props) {
  return (
    <section className="section" id="objects">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow-gold">Каталог помещений</div>
            <h2 className="section-title">
              Актуальные помещения для вашего бизнеса
            </h2>
          </div>
          {objects.length > 0 && (
            <Link
              href="/#objects"
              className="section-cta btn btn-secondary btn-md btn-arrow"
            >
              Показать все помещения
            </Link>
          )}
        </div>
        {objects.length > 0 ? (
          <div className="objects-grid">
            {objects.map((obj) => (
              <ObjectCard key={obj.id} object={obj} />
            ))}
          </div>
        ) : (
          <div className="objects-empty">
            <div className="objects-empty-icon" aria-hidden="true">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
            <p className="objects-empty-text">
              На текущий момент помещений нет — оставьте заявку,
              и&nbsp;мы свяжемся с&nbsp;вами, как только появятся подходящие варианты.
            </p>
            <Link href="/#contact" className="btn btn-secondary btn-md">
              Оставить заявку
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
