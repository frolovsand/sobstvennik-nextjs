export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="eyebrow-gold">
              Даю бизнесу место,<br />
              которое зарабатывает деньги
            </div>

            <h1>Помещения для&nbsp;бизнеса в&nbsp;Москве и&nbsp;МО</h1>

            <div className="hero-subtitle">
              выгодно для&nbsp;вас и&nbsp;ваших клиентов
            </div>

            <p className="lead">
              Помещения в&nbsp;лучших локациях с&nbsp;высоким трафиком
              и&nbsp;покупательской активностью. Вы&nbsp;платите только
              за&nbsp;аренду, никаких переплат. Запускайтесь быстрее
              и&nbsp;зарабатывайте больше.
            </p>

            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary btn-arrow">
                Получить подбор помещений
              </a>
              <a href="#contact" className="btn btn-secondary btn-with-icon">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Обсудить условия
              </a>
            </div>
          </div>

          <div className="hero-cards">
            <div className="hero-card">
              <div className="hero-card-icon" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div className="hero-card-value">100%</div>
              <div className="hero-card-label">
                помещений<br />в&nbsp;собственности
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <div className="hero-card-value">0 ₽</div>
              <div className="hero-card-label">
                комиссий<br />и&nbsp;переплат
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-icon" aria-hidden="true">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="8" cy="15" r="4" />
                  <path d="M10.85 12.15 21 2" />
                  <path d="m18 5 3 3" />
                  <path d="m15 8 3 3" />
                </svg>
              </div>
              <div className="hero-card-value hero-card-value-text">
                Прямой<br />договор
              </div>
              <div className="hero-card-label">
                только со&nbsp;мной&nbsp;—<br />собственником
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-divider" aria-hidden="true" />
    </section>
  )
}
