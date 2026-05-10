import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="Собственник">
          <span className="logo-mark">
            Собственник<span className="dot" />
          </span>
          <span className="logo-tagline">Сдаю свои помещения напрямую</span>
        </Link>

        <nav className="nav" aria-label="Главная навигация">
          <Link href="/#objects">Объекты</Link>
          <Link href="/#about">О нас</Link>
          <Link href="/#advantages">Преимущества</Link>
          <Link href="/#contact">Контакты</Link>
        </nav>

        <div className="header-actions">
          <Link href="/#contact" className="btn btn-primary header-cta">
            Получить подбор помещений
          </Link>
          <Link href="/#contact" className="btn btn-secondary header-cabinet">
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
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="10" r="3.2" />
              <path d="M5.5 19.2c1.5-2.6 4.1-4 6.5-4s5 1.4 6.5 4" />
            </svg>
            Личный кабинет
          </Link>
          <button
            type="button"
            className="header-burger"
            aria-label="Открыть меню"
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}
