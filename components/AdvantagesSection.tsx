const advantages = [
  {
    n: '01',
    title: 'Поток людей рядом с объектом',
    text: 'Больше заходов в точку и выше вероятность первых продаж уже в первые дни.',
  },
  {
    n: '02',
    title: 'Видимые фасады и проходные локации',
    text: 'Бизнес замечают без дополнительных затрат на рекламу.',
  },
  {
    n: '03',
    title: 'Быстрый старт без долгого простоя',
    text: 'Раньше начинаете работать - раньше начинаете зарабатывать.',
  },
  {
    n: '04',
    title: 'Минимальные потери на старте',
    text: 'Не сливаете бюджет на «пустой» период аренды.',
  },
  {
    n: '05',
    title: 'Готовые помещения к запуску',
    text: 'Не замораживаете деньги в ремонте и долгой подготовке.',
  },
  {
    n: '06',
    title: 'Быстрое принятие решения и заезд',
    text: 'Меньше времени до первых клиентов и первой выручки.',
  },
]

export default function AdvantagesSection() {
  return (
    <section className="section" id="advantages">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Преимущества</div>
            <h2 className="section-title">
              Почему эти помещения помогают <em>бизнесу зарабатывать быстрее</em>
            </h2>
          </div>
          <p className="section-sub">
            Эти помещения сокращают путь от идеи до первых денег — за счёт локации, скорости запуска и готовности к работе
          </p>
        </div>
        <div className="adv-grid">
          {advantages.map((adv) => (
            <div className="adv-cell" key={adv.n}>
              <span className="num-l">{adv.n}</span>
              <h3>{adv.title}</h3>
              <p>{adv.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
