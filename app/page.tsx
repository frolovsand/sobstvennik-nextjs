import Hero from '@/components/Hero'
import ObjectsSection from '@/components/ObjectsSection'
import AdvantagesSection from '@/components/AdvantagesSection'
import FeedbackForm from '@/components/FeedbackForm'
import { getProperties } from '@/lib/api'

export default async function HomePage() {
  const objects = await getProperties()

  return (
    <main>
      <Hero />
      <ObjectsSection objects={objects} />
      <AdvantagesSection />

<section className="section" id="contact">
        <div className="container">
          <div className="contact">
            <aside className="contact-side">
              <div className="eyebrow-gold">Свяжитесь со мной</div>
              <h2 className="section-title">
                Найду для вас помещение, которое будет приносить доход
              </h2>
              <ul className="contact-list">
                <li className="contact-item">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <div className="contact-text">
                    <a className="contact-line" href="tel:+74950000000">+7 495 000 00 00</a>
                    <div className="contact-sub">Позвоните мне</div>
                  </div>
                </li>
                <li className="contact-item">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </span>
                  <div className="contact-text">
                    <a className="contact-line" href="https://wa.me/74950000000">+7 495 000 00 00</a>
                    <div className="contact-sub">WhatsApp / Telegram</div>
                  </div>
                </li>
                <li className="contact-item">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22 6 12 13 2 6" />
                    </svg>
                  </span>
                  <div className="contact-text">
                    <a className="contact-line" href="mailto:info@sobstvennik.ru">info@sobstvennik.ru</a>
                    <div className="contact-sub">Email</div>
                  </div>
                </li>
                <li className="contact-item">
                  <span className="contact-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </span>
                  <div className="contact-text">
                    <span className="contact-line">Пн – Пт, 10:00 – 20:00 (МСК)</span>
                    <div className="contact-sub">График работы</div>
                  </div>
                </li>
              </ul>
            </aside>
            <div className="contact-form-wrap">
              <div className="form-head">
                <h3 className="form-title">Получите подбор помещений</h3>
                <p className="form-desc">
                  Отвечу на ваши вопросы и подберу лучшие варианты под ваш бизнес уже сегодня.
                </p>
              </div>
              <FeedbackForm variant="main" />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
