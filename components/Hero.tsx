export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow">N°01 — Прямой контакт</div>
          <h1>
            Аренда и покупка коммерческих помещений{' '}
            <em>напрямую от собственника</em>
          </h1>
          <p className="lead">
            Предлагаем ограниченный пул коммерческих помещений для аренды и
            покупки — только объекты с понятной локацией, инфраструктурой и
            потенциалом для бизнеса.
          </p>
          <div className="hero-ctas">
            <a href="#objects" className="btn btn-primary btn-arrow">
              Смотреть объекты
            </a>
            <a href="#contact" className="btn btn-ghost">
              Получить консультацию
            </a>
          </div>
        </div>

        <aside className="hero-side">
          <div className="hero-visual" style={{ overflow: 'hidden', padding: 0 }}>
            <img
              src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1000&q=80&fit=crop"
              alt="Коммерческая недвижимость"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.7 }}
            />
            <span className="stamp">Москва · СПб</span>
            <span className="stamp-r">Отбор N°2026</span>
          </div>
          <div className="adv-card">
            <div className="adv-card-title">Что вы получаете</div>
            <div className="adv-list">
              <div className="adv-item">
                <span className="num">01</span>
                <span>Без посредников</span>
              </div>
              <div className="adv-item">
                <span className="num">02</span>
                <span>Прямой договор</span>
              </div>
              <div className="adv-item">
                <span className="num">03</span>
                <span>Объекты с отбором по локации</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
