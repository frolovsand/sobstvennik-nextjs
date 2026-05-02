export default function AboutSection() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head">
          <div>
            <div className="eyebrow">Кто я и чем могу помочь</div>
            <h2 className="section-title">
              Коммерческая недвижимость{' '}
              <em>без лишних посредников</em>
            </h2>
          </div>
         
        </div>
        <div className="about">
          <div className="about-text">
            <p>
              Я владею коммерческой недвижимостью и предлагаю помещения, которые соответствуют требованиям современного бизнеса — по локации, окружению и потенциалу развития. Работа напрямую с собственником обеспечивает не только прозрачность условий, но и уровень управляемости, недоступный при работе через посредников.
            </p>
            <p>
             Каждый объект рассматривается как часть бизнес-инфраструктуры арендатора: с учётом его позиционирования, клиентского потока и долгосрочной стратегии. Это позволяет создавать не просто пространство, а среду, которая усиливает бизнес и поддерживает его рост.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat-row">
              <span className="stat-num">01</span>
              <span className="stat-label">Собственные объекты в продуманных локациях</span>
              <span className="stat-arrow">—</span>
            </div>
            <div className="stat-row">
              <span className="stat-num">02</span>
              <span className="stat-label">Прямое взаимодействие без посредников</span>
              <span className="stat-arrow">—</span>
            </div>
            <div className="stat-row">
              <span className="stat-num">03</span>
              <span className="stat-label">Индивидуальные условия под формат бизнеса</span>
              <span className="stat-arrow">—</span>
            </div>
                <div className="stat-row">
              <span className="stat-num">04</span>
              <span className="stat-label">Возможность адаптации пространства под задачи арендатора</span>
              <span className="stat-arrow">—</span>
            </div>
             
          </div>
        </div>
      </div>
    </section>
  )
}
