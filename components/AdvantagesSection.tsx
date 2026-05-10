import type { ReactNode } from 'react'

interface Advantage {
  title: string
  text: string
  icon: ReactNode
}

const SVG_PROPS = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

const advantages: Advantage[] = [
  {
    title: 'Без комиссий',
    text: 'Платите только за аренду — никаких посредников и скрытых процентов.',
    icon: (
      <svg {...SVG_PROPS}>
        <line x1="19" y1="5" x2="5" y2="19" />
        <circle cx="6.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="17.5" r="2.5" />
      </svg>
    ),
  },
  {
    title: 'Лучшие локации',
    text: 'Помещения в местах с высоким трафиком и покупательской активностью.',
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Прямой договор',
    text: 'Работаю напрямую от собственника — прозрачно, быстро и без посредников.',
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7" />
        <polyline points="14 3 14 8 19 8" />
        <path d="M19 8V5l-5-2" />
        <path d="M9 14c1-1 3-1 4 0s3 1 4 0" />
        <path d="M16 19l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Экономия времени',
    text: 'Беру на себя поиск и проверку объектов, чтобы вы запустились быстрее.',
    icon: (
      <svg {...SVG_PROPS}>
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15.5 14" />
      </svg>
    ),
  },
  {
    title: 'Готовые помещения',
    text: 'Объекты с отделкой и подведёнными коммуникациями — заезд без простоя.',
    icon: (
      <svg {...SVG_PROPS}>
        <rect x="4" y="3" width="16" height="18" rx="1" />
        <line x1="9" y1="21" x2="9" y2="17" />
        <line x1="15" y1="21" x2="15" y2="17" />
        <line x1="8" y1="7" x2="10" y2="7" />
        <line x1="14" y1="7" x2="16" y2="7" />
        <line x1="8" y1="11" x2="10" y2="11" />
        <line x1="14" y1="11" x2="16" y2="11" />
        <line x1="8" y1="14" x2="10" y2="14" />
        <line x1="14" y1="14" x2="16" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Поддержка на всех этапах',
    text: 'Сопровождаю от подбора и просмотра до подписания договора и передачи ключей.',
    icon: (
      <svg {...SVG_PROPS}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

export default function AdvantagesSection() {
  return (
    <section className="section" id="advantages">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow-gold">Почему выгодно работать со мной</div>
            <h2 className="section-title">Преимущества прямой работы</h2>
          </div>
        </div>
        <div className="adv-grid">
          {advantages.map((adv) => (
            <div className="adv-cell" key={adv.title}>
              <div className="adv-icon" aria-hidden="true">{adv.icon}</div>
              <h3>{adv.title}</h3>
              <p>{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
