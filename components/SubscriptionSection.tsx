'use client'

import { useState } from 'react'

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'
const FORMAT_OPTIONS = ['Аренда', 'Продажа', 'Аренда и продажа']

function formatPhone(raw: string): string {
  if (!raw.startsWith('+7')) return '+7 '
  const digits = raw.slice(2).replace(/\D/g, '').slice(0, 10)
  let result = '+7'
  if (digits.length > 0) result += ' ' + digits.slice(0, 3)
  if (digits.length > 3) result += ' ' + digits.slice(3, 6)
  if (digits.length > 6) result += ' ' + digits.slice(6, 8)
  if (digits.length > 8) result += ' ' + digits.slice(8, 10)
  return result
}

export default function SubscriptionSection() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+7 ')
  const [email, setEmail] = useState('')
  const [format, setFormat] = useState('Аренда')
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const hasPhone = phone.replace(/\D/g, '').length > 1
    const hasEmail = email.trim().length > 0

    if (!hasPhone && !hasEmail) {
      setError('Укажите телефон или email — хотя бы одно поле обязательно.')
      return
    }

    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${STRAPI_URL}/api/subscribers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            name,
            phone: hasPhone ? phone : '',
            email: hasEmail ? email : '',
            interestFormat: format,
            comment,
            sourcePage: window.location.pathname,
          },
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        console.error('[SubscriptionSection] Strapi error', res.status, JSON.stringify(body, null, 2))
        throw new Error(`HTTP ${res.status}`)
      }

      setName('')
      setPhone('+7 ')
      setEmail('')
      setFormat('Аренда')
      setComment('')
      setSubmitted(true)
    } catch (err) {
      console.error('[SubscriptionSection] submit failed:', err)
      setError('Не удалось сохранить контакты. Попробуйте ещё раз.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section" id="subscribe">
      <div className="container">
        <div className="sub-layout">

          <div className="sub-info">
            <div className="eyebrow">Подписка — N°04</div>
            <h2 className="section-title">
              Получайте новые<br />помещения <em>первыми</em>
            </h2>
            <p className="sub-desc">
              Оставьте контакты — сообщим, когда появятся подходящие объекты для аренды или продажи.
            </p>
            <ul className="sub-benefits">
              <li>
                <span className="sub-benefit-num">01</span>
                <span>Уведомление до публикации на сайте</span>
              </li>
              <li>
                <span className="sub-benefit-num">02</span>
                <span>Только объекты под ваш формат и бюджет</span>
              </li>
              <li>
                <span className="sub-benefit-num">03</span>
                <span>Без спама — только новые помещения</span>
              </li>
            </ul>
          </div>

          <div>
            {submitted ? (
              <div className="form-success">
                <div className="form-success-check">✓</div>
                <h3>Готово</h3>
                <p>Сообщим, когда появятся подходящие помещения.</p>
              </div>
            ) : (
              <form className="form-card" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="sub-name">Имя</label>
                  <input
                    id="sub-name"
                    type="text"
                    placeholder="Как к вам обращаться"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="field-row">
                  <div className="field">
                    <label htmlFor="sub-phone">Телефон</label>
                    <input
                      id="sub-phone"
                      type="tel"
                      placeholder="+7 ___ ___ __ __"
                      value={phone}
                      onChange={(e) => setPhone(formatPhone(e.target.value))}
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="sub-email">Email</label>
                    <input
                      id="sub-email"
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="field">
                  <label>Интересует</label>
                  <div className="radio-group">
                    {FORMAT_OPTIONS.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        className={`radio-pill${format === opt ? ' active' : ''}`}
                        onClick={() => setFormat(opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="sub-comment">Что ищете</label>
                  <textarea
                    id="sub-comment"
                    placeholder="Площадь, бюджет, район, формат бизнеса"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                </div>
                {error && (
                  <p style={{ fontSize: 13, color: '#e07070', marginBottom: 8 }}>{error}</p>
                )}
                <button
                  type="submit"
                  className="btn btn-primary btn-arrow"
                  style={{ marginTop: 8 }}
                  disabled={loading}
                >
                  {loading ? 'Сохраняем...' : 'Подписаться на новые объекты'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
