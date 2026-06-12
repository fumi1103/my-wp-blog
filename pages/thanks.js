export default function Thanks() {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>
      <nav style={{
        display: 'flex', padding: '1.2rem 2rem', borderBottom: '0.5px solid var(--color-border)'
      }}>
        <a href="/" style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', letterSpacing: '0.15em' }}>
          匠テックラボ
        </a>
      </nav>
      <div style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-text-hint)', marginBottom: '1.5rem' }}>THANK YOU</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, letterSpacing: '0.08em', marginBottom: '1.5rem' }}>
          お問い合わせありがとうございます
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--color-text-sub)', lineHeight: 2, marginBottom: '3rem' }}>
          内容を確認の上、担当者よりご連絡いたします。<br />
          しばらくお待ちください。
        </p>
        <a href="/" style={{ fontSize: '13px', color: 'var(--color-green)', letterSpacing: '0.1em' }}>
          ← トップページに戻る
        </a>
      </div>
    </div>
  );
}