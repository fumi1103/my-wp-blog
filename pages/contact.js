import { useState } from 'react';

const ESTIMATE_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1kaca4zHwZIeJnib-4Mlx2jYCkPJZ1Tejxte8flqhMb0/edit?usp=drive_link';

export default function Contact() {
  const [contactType, setContactType] = useState('サービスについて');

  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>

      {/* ナビゲーション */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 2rem', borderBottom: '0.5px solid var(--color-border)'
      }}>
        <a href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', letterSpacing: '0.15em' }}>
          匠テックラボ <span style={{ fontSize: '13px', fontWeight: 300, color: 'var(--color-text-sub)' }}>Takumi Tech Lab</span>
        </a>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '13px', color: 'var(--color-text-sub)', letterSpacing: '0.1em' }}>
          <a href="/services">事業内容</a>
          <a href="/about">会社概要</a>
          <a href="/#news">お知らせ</a>
          <a href="/contact" style={{ color: 'var(--color-green)', borderBottom: '0.5px solid var(--color-green)', paddingBottom: '2px' }}>お問い合わせ</a>
        </div>
      </nav>

      {/* ヘッダー */}
      <div style={{ padding: '3rem 2rem 2rem', borderBottom: '0.5px solid var(--color-border)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-text-hint)', marginBottom: '1rem' }}>CONTACT</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, letterSpacing: '0.08em' }}>
          お問い合わせ
        </h1>
      </div>

      {/* フォーム */}
      <div style={{ padding: '3rem 2rem 4rem', maxWidth: '600px' }}>
        <form name="contact" method="POST" action="/thanks" netlify>
          <input type="hidden" name="form-name" value="contact" />

          {/* お名前 */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--color-text-sub)', marginBottom: '0.5rem' }}>
              お名前 <span style={{ color: 'var(--color-green)' }}>*</span>
            </label>
            <input
              type="text"
              name="name"
              required
              style={{
                width: '100%', padding: '0.8rem 1rem', fontSize: '14px',
                border: '0.5px solid var(--color-border)', background: 'transparent',
                fontFamily: 'var(--font-sans)', letterSpacing: '0.05em', outline: 'none'
              }}
            />
          </div>

          {/* メールアドレス */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--color-text-sub)', marginBottom: '0.5rem' }}>
              メールアドレス <span style={{ color: 'var(--color-green)' }}>*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              style={{
                width: '100%', padding: '0.8rem 1rem', fontSize: '14px',
                border: '0.5px solid var(--color-border)', background: 'transparent',
                fontFamily: 'var(--font-sans)', letterSpacing: '0.05em', outline: 'none'
              }}
            />
          </div>

          {/* お問い合わせ種別 */}
          <div style={{ marginBottom: '2rem' }}>
            <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--color-text-sub)', marginBottom: '0.5rem' }}>
              お問い合わせ種別
            </label>
            <select
              name="type"
              value={contactType}
              onChange={(e) => setContactType(e.target.value)}
              style={{
                width: '100%', padding: '0.8rem 1rem', fontSize: '14px',
                border: '0.5px solid var(--color-border)', background: 'transparent',
                fontFamily: 'var(--font-sans)', letterSpacing: '0.05em', outline: 'none'
              }}
            >
              <option value="サービスについて">サービスについて</option>
              <option value="お見積もり">お見積もり</option>
              <option value="その他">その他</option>
            </select>
            {contactType === 'お見積もり' && (
              <div style={{
                marginTop: '0.8rem', padding: '0.8rem 1rem',
                border: '0.5px solid var(--color-green)',
                fontSize: '12px', letterSpacing: '0.05em', lineHeight: 1.8,
              }}>
                お見積もりのご依頼は、下記シートにご記入いただくとスムーズです。
                <br />
                <a
                  href={ESTIMATE_SHEET_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-green)', letterSpacing: '0.05em' }}
                >
                  → お見積もり依頼シートを開く
                </a>
              </div>
            )}
          </div>

          {/* お問い合わせ内容 */}
          <div style={{ marginBottom: '2.5rem' }}>
            <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.1em', color: 'var(--color-text-sub)', marginBottom: '0.5rem' }}>
              お問い合わせ内容 <span style={{ color: 'var(--color-green)' }}>*</span>
            </label>
            <textarea
              name="message"
              required
              rows={6}
              style={{
                width: '100%', padding: '0.8rem 1rem', fontSize: '14px',
                border: '0.5px solid var(--color-border)', background: 'transparent',
                fontFamily: 'var(--font-sans)', letterSpacing: '0.05em', outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          {/* 送信ボタン */}
          <button
            type="submit"
            style={{
              padding: '0.9rem 3rem', fontSize: '13px', letterSpacing: '0.15em',
              border: '0.5px solid var(--color-ink)', background: 'transparent',
              fontFamily: 'var(--font-sans)', cursor: 'pointer', color: 'var(--color-ink)'
            }}
          >
            送信する
          </button>
        </form>
      </div>

      {/* フッター */}
      <footer style={{
        padding: '1.5rem 2rem', borderTop: '0.5px solid var(--color-border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', letterSpacing: '0.15em' }}>匠テックラボ</div>
        <div style={{ fontSize: '11px', color: 'var(--color-text-hint)', letterSpacing: '0.05em' }}>
          © 2026 匠テックラボ. All rights reserved.
        </div>
      </footer>
    </div>
  );
}