import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="logo">
              Собственник<span className="dot" />
            </Link>
            <p>
              Коммерческие помещения для аренды и покупки напрямую от собственника.
              Ограниченный пул отобранных объектов.
            </p>
          </div>
          <div className="footer-col">
            <h4>Навигация</h4>
            <ul>
              <li><Link href="/#objects">Объекты</Link></li>
              <li><Link href="/#about">О нас</Link></li>
              <li><Link href="/#advantages">Преимущества</Link></li>
              <li><Link href="/#contact">Контакты</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Форматы</h4>
            <ul>
              <li><Link href="/#objects">Аренда помещений</Link></li>
              <li><Link href="/#objects">Покупка помещений</Link></li>
              <li><Link href="/#contact">Подбор под задачу</Link></li>
              <li><Link href="/#contact">Консультация</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Связь</h4>
            <ul>
              <li><a href="tel:+74950000000">+7 495 000 00 00</a></li>
              <li><a href="mailto:hello@sobstvennik.ru">hello@sobstvennik.ru</a></li>
              <li><span>Москва, Санкт-Петербург</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Собственник. Коммерческая недвижимость напрямую от собственника.</span>
          <span>Made with care · N°2026</span>
        </div>
      </div>
    </footer>
  )
}
