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
            <div className="eyebrow">Подборка — N°03</div>
            <h2 className="section-title">
              Помещения свободны <em>— заезд возможен сегодня</em>
            </h2>
          </div>
         {/*  <p className="section-sub">
            Несколько коммерческих помещений, которые можно арендовать или купить
            напрямую у собственника. Подборка обновляется по мере появления
            подходящих объектов.
          </p>*/}
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
