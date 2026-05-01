const locationItems = [
  { n: '01', label: 'Транспортная доступность' },
  { n: '02', label: 'Развитая инфраструктура' },
  { n: '03', label: 'Понятный клиентский поток' },
  { n: '04', label: 'Гибкость под форматы бизнеса' },
  { n: '05', label: 'Потенциал роста стоимости' },
  { n: '06', label: 'Удобство для сотрудников и клиентов' },
]

export default function LocationAdvantagesSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="loc-grid">
          <div>
            <div className="eyebrow">Локации — N°05</div>
            <h2 className="section-title">
              Мы предлагаем не все подряд —{' '}
              <em>только локации с потенциалом</em>
            </h2>
            <p
              className="section-sub"
              style={{ marginTop: 32, maxWidth: 520 }}
            >
              Мы не стремимся показать как можно больше объектов. В подборку
              попадают только коммерческие помещения, которые имеют понятную
              бизнес-логику: удобную доступность, развитое окружение, клиентский
              трафик и потенциал для устойчивой работы арендатора или
              покупателя.
            </p>
          </div>
          <div className="loc-list">
            {locationItems.map((item) => (
              <div className="loc-item" key={item.n}>
                <span className="num">{item.n}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
