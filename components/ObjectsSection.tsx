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
          <Link
            href="/#objects"
            className="section-cta btn btn-secondary btn-md btn-arrow"
          >
            Показать все помещения
          </Link>
        </div>
        <div className="objects-grid">
          {objects.map((obj) => (
            <ObjectCard key={obj.id} object={obj} />
          ))}
        </div>
      </div>
    </section>
  )
}
