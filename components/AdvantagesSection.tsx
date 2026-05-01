const advantages = [
  {
    n: '01',
    title: 'Напрямую от собственника',
    text: 'Все договоры подписываем без посреднической цепочки и скрытых процентов.',
  },
  {
    n: '02',
    title: 'Без лишних посредников',
    text: 'Связь с лицом, принимающим решения, без агентских фильтров и затягиваний.',
  },
  {
    n: '03',
    title: 'Прозрачные условия сделки',
    text: 'Цена, сроки, индексация и обязательства фиксируются в письменной форме.',
  },
  {
    n: '04',
    title: 'Понятные эксплуатационные расходы',
    text: 'Заранее показываем структуру коммунальных платежей, ТБО и обслуживания.',
  },
  {
    n: '05',
    title: 'Быстрая организация просмотра',
    text: 'Согласуем визит в течение одного-двух дней, в удобное для вас время.',
  },
  {
    n: '06',
    title: 'Открыто об ограничениях',
    text: 'Рассказываем о технических, санитарных и режимных требованиях честно.',
  },
]

export default function AdvantagesSection() {
  return (
    <section className="section" id="advantages">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Преимущества — N°04</div>
            <h2 className="section-title">
              Почему <em>работают с нами</em>
            </h2>
          </div>
          <p className="section-sub">
            Мы не агентство и не маркетплейс. Мы — собственник, который выбирает
            арендатора и покупателя так же тщательно, как сами объекты.
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
