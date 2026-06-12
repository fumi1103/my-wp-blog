export default function About() {
  const profile = [
    { label: '社名', value: '匠テックラボ' },
    { label: '英文社名', value: 'Takumi Tech Lab' },
    { label: '設立', value: '2020年4月' },
    { label: '代表者', value: '代表　山田 太郎' },
    { label: '所在地', value: '〒000-0000　東京都○○区○○ 0-0-0' },
    { label: '電話', value: '00-0000-0000' },
    { label: 'メール', value: 'info@takumi-tech-lab.jp' },
    { label: '事業内容', value: 'ホームページ制作・運用支援 / スマートフォンアプリ開発 / 業務効率化・DX支援 / デザイン制作 / IoT機器導入・試作支援 / 電気設備・設備保全に関する技術支援' },
  ];

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
          <a href="/about" style={{ color: 'var(--color-green)', borderBottom: '0.5px solid var(--color-green)', paddingBottom: '2px' }}>会社概要</a>
          <a href="/#news">お知らせ</a>
          <a href="/contact">お問い合わせ</a>
        </div>
      </nav>

      {/* ページヘッダー */}
      <div style={{ padding: '3rem 2rem 2rem', borderBottom: '0.5px solid var(--color-border)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-text-hint)', marginBottom: '1rem' }}>ABOUT</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, letterSpacing: '0.08em' }}>
          会社概要
        </h1>
      </div>

      {/* 会社概要テーブル */}
      <div style={{ padding: '2.5rem 2rem 4rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', maxWidth: '680px' }}>
          <tbody>
            {profile.map((row) => (
              <tr key={row.label} style={{ borderBottom: '0.5px solid var(--color-border)' }}>
                <th style={{
                  width: '130px', padding: '1.2rem 1rem 1.2rem 0',
                  textAlign: 'left', fontWeight: 400, fontSize: '12px',
                  letterSpacing: '0.1em', color: 'var(--color-text-hint)',
                  verticalAlign: 'top', whiteSpace: 'nowrap',
                }}>
                  {row.label}
                </th>
                <td style={{
                  padding: '1.2rem 0',
                  fontSize: '14px', letterSpacing: '0.05em',
                  lineHeight: 1.8, color: 'var(--color-ink)',
                }}>
                  {row.value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 理念セクション */}
      <div style={{
        margin: '0 2rem 4rem', padding: '2.5rem 2rem',
        borderTop: '0.5px solid var(--color-border)',
        borderBottom: '0.5px solid var(--color-border)',
      }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-text-hint)', marginBottom: '1.5rem' }}>PHILOSOPHY</div>
        <h2 style={{
          fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400,
          letterSpacing: '0.1em', lineHeight: 1.8, marginBottom: '1.2rem'
        }}>
          技術の匠として、誠実に。
        </h2>
        <p style={{ fontSize: '13px', color: 'var(--color-text-sub)', lineHeight: 2.2, letterSpacing: '0.05em' }}>
          私たちは、最新のITから電気設備・IoTまで、幅広い専門技術を持つプロフェッショナル集団です。<br />
          お客様一人ひとりの課題に向き合い、誠実かつ丁寧な仕事を通じて、<br />
          長きにわたってご信頼いただけるパートナーであり続けることを目指しています。
        </p>
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
