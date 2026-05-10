'use client'

import { useState } from 'react'

interface Props {
  variant?: 'main' | 'detail'
  objectLabel?: string
  propertyTitle?: string
}

const MAIN_OPTIONS = ['Аренда', 'Продажа', 'Консультация']
const DETAIL_OPTIONS = ['Аренда', 'Продажа', 'Консультация']

const INTEREST_FORMAT_MAP: Record<string, string> = {
  'Аренда': 'rent',
  'Продажа': 'sale',
  'Просмотр': 'viewing',
  'Консультация': '',
}

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

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

export default function FeedbackForm({ variant = 'main', objectLabel, propertyTitle }: Props) {
  const [interest, setInterest] = useState('Аренда')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+7 ')
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const options = variant === 'main' ? MAIN_OPTIONS : DETAIL_OPTIONS

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await fetch(`${STRAPI_URL}/api/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          data: {
            name,
            phone,
            interestFormat: INTEREST_FORMAT_MAP[interest] ?? '',
            comment,
            propertyTitle: propertyTitle || 'Общая заявка',
            sourcePage: window.location.pathname,
            statusord: 'new',
          },
        }),
      })

      if (!res.ok) {
        const body = await res.json().catch(() => null)
        console.error('[FeedbackForm] Strapi error', res.status, JSON.stringify(body, null, 2))
        throw new Error(`HTTP ${res.status}`)
      }

      setName('')
      setPhone('+7 ')
      setComment('')
      setInterest('Аренда')
      setSubmitted(true)
    } catch (err) {
      console.error('[FeedbackForm] submit failed:', err)
      setError('Не удалось отправить заявку. Попробуйте ещё раз.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="form-success">
        <div className="form-success-check" aria-hidden="true">✓</div>
        <h3>Заявка отправлена</h3>
        <p>
          {variant === 'main'
            ? 'Свяжемся с вами в течение рабочего дня и подберём подходящие варианты под ваш бизнес.'
            : 'Свяжемся с вами по этому объекту в течение рабочего дня и согласуем удобное время для просмотра.'}
        </p>
        {objectLabel && <p className="form-success-meta">{objectLabel}</p>}
      </div>
    )
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-name">Имя</label>
          <input
            id="f-name"
            type="text"
            placeholder="Как к вам обращаться"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="field">
          <label htmlFor="f-phone">Телефон</label>
          <input
            id="f-phone"
            type="tel"
            placeholder="+7 ___ ___ __ __"
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
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
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
      </div>
      {error && <p className="form-error">{error}</p>}
      <button
        type="submit"
        className="btn btn-primary form-submit"
        disabled={loading}
      >
        {loading ? 'Отправляем...' : 'Получить подбор помещений'}
      </button>
      <p className="form-hint">Ваши данные не передаются третьим лицам</p>
    </form>
  )
}
