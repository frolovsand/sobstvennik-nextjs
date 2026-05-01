export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">О нас — N°02</div>
            <h2 className="section-title">
              Коммерческая недвижимость{' '}
              <em>без лишних посредников</em>
            </h2>
          </div>
          <p className="section-sub">
            Мы предлагаем коммерческие помещения напрямую от собственника — для
            аренды, покупки и развития бизнеса. Мы не размещаем все подряд: в
            подборку попадают только объекты с понятной инфраструктурой, удобной
            доступностью и реальным потенциалом для бизнеса.
          </p>
        </div>
        <div className="about">
          <div className="about-text">
            <p>
              Каждое помещение мы знаем лично: историю объекта, инженерные
              параметры, условия эксплуатации, потенциальные ограничения и
              возможности. Мы открыто рассказываем как о преимуществах, так и об
              особенностях — потому что работаем на долгие отношения, а не на
              разовую сделку.
            </p>
            <p>
              Если объект не подходит вашей задаче — мы скажем об этом сразу.
              Если подходит — оформим прямой договор и поможем с организацией
              просмотра в удобное время.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-row">
              <span className="stat-num">01</span>
              <span className="stat-label">Работа напрямую с собственником</span>
              <span className="stat-arrow">—</span>
            </div>
            <div className="stat-row">
              <span className="stat-num">02</span>
              <span className="stat-label">Ограниченный пул качественных объектов</span>
              <span className="stat-arrow">—</span>
            </div>
            <div className="stat-row">
              <span className="stat-num">03</span>
              <span className="stat-label">Прозрачные условия аренды и покупки</span>
              <span className="stat-arrow">—</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
