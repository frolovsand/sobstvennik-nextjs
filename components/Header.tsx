import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label="Собственник">
          Собственник<span className="dot" />
        </Link>
        <nav className="nav">
          <Link href="/#objects">Объекты</Link>
          <Link href="/#about">О нас</Link>
          <Link href="/#advantages">Преимущества</Link>
          <Link href="/#contact">Контакты</Link>
        </nav>
        <Link href="/#contact" className="btn btn-primary btn-sm">
          Оставить заявку
        </Link>
      </div>
    </header>
  )
}
