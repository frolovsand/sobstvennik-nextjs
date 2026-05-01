import Hero from '@/components/Hero'
import AboutSection from '@/components/AboutSection'
import ObjectsSection from '@/components/ObjectsSection'
import AdvantagesSection from '@/components/AdvantagesSection'
import LocationAdvantagesSection from '@/components/LocationAdvantagesSection'
import FeedbackForm from '@/components/FeedbackForm'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <ObjectsSection />
      <AdvantagesSection />
      <LocationAdvantagesSection />

      <section className="section" id="contact">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="eyebrow">Контакт — N°06</div>
              <h2 className="section-title">
                Готовы ответить <em>на ваши вопросы</em>
              </h2>
            </div>
            <p className="section-sub">
              Оставьте заявку — мы свяжемся с вами, уточним задачу и расскажем
              подробнее о доступных помещениях.
            </p>
          </div>
          <FeedbackForm variant="main" />
        </div>
      </section>
    </main>
  )
}
