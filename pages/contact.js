export default function Contact() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>

      {/* ナビゲーション */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 2rem', borderBottom: '0.5px solid var(--color-border)'
      }}>
        <a href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', letterSpacing: '0.15em' }}>
          御社名 <span style={{ fontSize: '13px', fontWeight: 300, color: 'var(--color-text-sub)' }}>Company Name</span>
        </a>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '13px', color: 'var(--color-text-sub)', letterSpacing: '0.1em' }}>
          <a href="#">事業内容</a>
          <a href="#">会社概要</a>
          <a href="#">お知らせ</a>
          <a href="/contact">お問い合わせ</a>
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
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', letterSpacing: '0.15em' }}>御社名</div>
        <div style={{ fontSize: '11px', color: 'var(--color-text-hint)', letterSpacing: '0.05em' }}>
          © 2026 Company Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
}