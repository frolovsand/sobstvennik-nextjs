export default function Hero() {
  return (
    <section className="hero">
      <img
        src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80&fit=crop"
        alt=""
        aria-hidden="true"
        className="hero-bg"
      />

      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">Даю бизнесу место, которое зарабатывает деньги</div>
          <h1>
            Помещения под бизнес в Москве и МО без комиссии{' '}
            <em>— от собственника</em>
          </h1>
          <p className="lead">
            Магазины и офисы с хорошей локацией и трафиком. Помогаю быстро запустить бизнес без лишних затрат
          </p>
          <div className="hero-ctas">
            <a href="#objects" className="btn btn-primary btn-arrow">
              Смотреть помещения
            </a>
            <a href="#contact" className="btn btn-ghost">
              Связаться
            </a>
          </div>
        </div>

        <div className="hero-strip">
          <div className="hero-strip-item">
            <span className="hero-strip-num">01</span>
            <span>Реальные объекты от собственника</span>
          </div>
          <div className="hero-strip-item">
            <span className="hero-strip-num">02</span>
            <span>Объекты без скрытой комиссии</span>
          </div>
          <div className="hero-strip-item">
            <span className="hero-strip-num">03</span>
            <span>Помощь подбора объекта под формат бизнеса</span>
          </div>
        </div>
      </div>
    </section>
  )
}
