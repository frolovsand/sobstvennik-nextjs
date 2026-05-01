'use client'

import { useState } from 'react'

interface Props {
  variant?: 'main' | 'detail'
  objectLabel?: string
}

const MAIN_OPTIONS = ['Аренда', 'Покупка', 'Аренда и покупка', 'Консультация']
const DETAIL_OPTIONS = ['Аренда', 'Покупка', 'Просмотр']

export default function FeedbackForm({ variant = 'main', objectLabel }: Props) {
  const [interest, setInterest] = useState(variant === 'main' ? 'Аренда' : 'Аренда')
  const [submitted, setSubmitted] = useState(false)

  const options = variant === 'main' ? MAIN_OPTIONS : DETAIL_OPTIONS

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  const contactTitle = variant === 'main' ? 'Прямой контакт' : 'По объекту отвечает'
  const contactItems =
    variant === 'main'
      ? [
          'Работаем напрямую от собственника',
          'Расскажем условия по каждому объекту',
          'Организуем просмотр в удобное время',
        ]
      : [
          'Прямой контакт с собственником',
          'Документы и условия — без посредников',
          'Просмотр в удобное время, включая выходные',
        ]

  const hint = objectLabel ? `Объект N°${objectLabel}` : 'Пн – Пт, 10:00 – 20:00 (МСК)'

  return (
    <div className="contact">
      {submitted ? (
        <div className="form-success">
          <div className="form-success-check">✓</div>
          <h3>Заявка отправлена</h3>
          <p>
            {variant === 'main'
              ? 'Мы свяжемся с вами в течение рабочего дня и расскажем подробнее о доступных объектах.'
              : 'Мы свяжемся с вами по этому объекту в течение рабочего дня и согласуем удобное время.'}
          </p>
        </div>
      ) : (
        <form className="form-card" onSubmit={handleSubmit}>
          <div className="field-row">
            <div className="field">
              <label htmlFor="f-name">Имя</label>
              <input
                id="f-name"
                type="text"
                placeholder="Как к вам обращаться"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="f-phone">Телефон</label>
              <input
                id="f-phone"
                type="tel"
                placeholder="+7 ___ ___ __ __"
                required
              />
            </div>
          </div>
          <div className="field">
            <label>Интересует</label>
            <div className="radio-group">
              {options.map((opt) => (
                <button
                  key={opt}
                  type="button"
                  className={`radio-pill${interest === opt ? ' active' : ''}`}
                  onClick={() => setInterest(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
          <div className="field">
            <label htmlFor="f-msg">Комментарий</label>
            <textarea
              id="f-msg"
              placeholder={
                variant === 'main'
                  ? 'Площадь, бюджет, формат бизнеса, предпочтительная локация'
                  : 'Сроки заезда / сделки, пожелания по просмотру'
              }
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary btn-arrow"
            style={{ marginTop: 8 }}
          >
            Отправить заявку
          </button>
        </form>
      )}

      <aside className="contact-info">
        <h3>{contactTitle}</h3>
        <div className="contact-list">
          {contactItems.map((item, i) => (
            <div className="contact-list-item" key={i}>
              <span className="num">0{i + 1}</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="contact-direct">
          <div className="label">Телефон собственника</div>
          <div className="phone">+7 495 000 00 00</div>
          <div className="hint">{hint}</div>
        </div>
      </aside>
    </div>
  )
}
