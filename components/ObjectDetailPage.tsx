import Link from 'next/link'
import type { ObjectData, Section } from '@/data/objects'
import ObjectGallery from './ObjectGallery'
import FeedbackForm from './FeedbackForm'

function badgeClass(badge: string) {
  return /Продажа|Аренда \//i.test(badge) ? 'detail-badge gold' : 'detail-badge'
}

const SECTION_LABELS = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ж', 'З', 'И', 'К']

function StrapiSection({ section, index }: { section: Section; index: number }) {
  const letter = SECTION_LABELS[index] ?? String(index + 1)
  const label = section.eyebrow ? `N°${letter} — ${section.eyebrow}` : `N°${letter}`
  return (
    <section className="detail-block">
      <div className="container detail-block-grid">
        <div>
          <div className="detail-block-label">{label}</div>
          {section.title && <h2>{section.title}</h2>}
        </div>
        <div className="body">
          {section.description && <p>{section.description}</p>}
          {section.layout === 'table' && (
            <div className="specs-grid">
              {section.parameters
                .filter((p) => p.label && p.value)
                .map((p, i) => (
                  <div className="spec" key={i}>
                    <span className="k">{p.label}</span>
                    <span className="v">{p.value}</span>
                  </div>
                ))}
            </div>
          )}
          {section.layout === 'list' && (
            <ul className="bullet-list">
              {section.parameters
                .filter((p) => p.text)
                .map((p, i) => (
                  <li key={i}>{p.text}</li>
                ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  )
}

interface Props {
  object: ObjectData
}

export default function ObjectDetailPage({ object: o }: Props) {
  const hasStrapiSections = o.sections && o.sections.length > 0

  return (
    <main>
      <div className="container">
        <Link href="/#objects" className="detail-back">
          ← Все объекты
        </Link>
      </div>

      {/* Hero: gallery + info */}
      <section className="detail-hero">
        <div className="container">
          <div className="detail-hero-grid">
            <ObjectGallery photos={o.photos} name={o.name} />

            <div className="detail-info">
              <span className="obj-id">Объект N°{o.n} / 2026</span>
              <h1>{o.name}</h1>
              <div className="detail-addr">{o.addr}</div>
              <span className={badgeClass(o.badge)}>{o.badge}</span>
              <div className="detail-prices">
                {o.rent && (
                  <div className="detail-price-row">
                    <span className="lbl">Аренда</span>
                    <span className="val">{o.rent}</span>
                  </div>
                )}
                {o.sale && (
                  <div className="detail-price-sale">
                    <div className="detail-price-sale-lbl">Стоимость</div>
                    <div className="detail-price-sale-val">{o.sale}</div>
                  </div>
                )}
              </div>
              <div className="detail-ctas">
                <a href="#detail-form" className="btn btn-primary btn-arrow">
                  Записаться на просмотр
                </a>
                <a href="#detail-form" className="btn btn-ghost">
                  Задать вопрос
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dynamic sections from Strapi */}
      {hasStrapiSections ? (
        o.sections!.map((section, idx) => (
          <StrapiSection key={idx} section={section} index={idx} />
        ))
      ) : (
        <>
          {/* А. Об объекте */}
          <section className="detail-block">
            <div className="container detail-block-grid">
              <div>
                <div className="detail-block-label">N°А — Об объекте</div>
                <h2>{o.about.sectionTitle}</h2>
              </div>
              <div className="body">
                <p>{o.about.description}</p>
                <div className="specs-grid">
                  {o.about.specs.map((spec) => (
                    <div className="spec" key={spec.key}>
                      <span className="k">{spec.key}</span>
                      <span className="v">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Б. Условия сделки */}
          <section className="detail-block">
            <div className="container detail-block-grid">
              <div>
                <div className="detail-block-label">N°Б — Условия сделки</div>
                <h2>{o.conditions.sectionTitle}</h2>
              </div>
              <div className="body">
                <p>{o.conditions.description}</p>
                <div className="specs-grid">
                  {o.conditions.specs.map((spec) => (
                    <div className="spec" key={spec.key}>
                      <span className="k">{spec.key}</span>
                      <span className="v">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* В. Управление помещением */}
          <section className="detail-block">
            <div className="container detail-block-grid">
              <div>
                <div className="detail-block-label">N°В — Управление помещением</div>
                <h2>Эксплуатация</h2>
              </div>
              <div className="body">
                <p>{o.management.description}</p>
                <ul className="bullet-list">
                  {o.management.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Г. Ограничения */}
          <section className="detail-block">
            <div className="container detail-block-grid">
              <div>
                <div className="detail-block-label">N°Г — Условия использования</div>
                <h2>Ограничения и требования</h2>
              </div>
              <div className="body">
                <p>{o.restrictions.description}</p>
                <ul className="bullet-list">
                  {o.restrictions.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Д. Локация */}
          <section className="detail-block">
            <div className="container detail-block-grid">
              <div>
                <div className="detail-block-label">N°Д — Локация</div>
                <h2>Преимущества места</h2>
              </div>
              <div className="body">
                <p>{o.location.description}</p>
                <ul className="bullet-list">
                  {o.location.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Форма */}
      <section className="section" id="detail-form" style={{ borderBottom: 'none' }}>
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Запрос — N°Е</div>
              <h2 className="section-title">
                Интересует <em>этот объект?</em>
              </h2>
            </div>
            <p className="section-sub">
              Оставьте контакты — мы свяжемся в течение рабочего дня, ответим на
              вопросы по объекту и согласуем удобное время для просмотра.
            </p>
          </div>
          <FeedbackForm variant="detail" objectLabel={`${o.n} / 2026 · ${o.addr}`} propertyTitle={o.name} />
        </div>
      </section>
    </main>
  )
}
