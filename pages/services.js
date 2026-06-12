export default function Services() {
  const services = [
    {
      num: '〇一',
      en: 'WEB',
      title: 'ホームページ制作・運用支援',
      desc: 'お客様のビジネスに合わせた、使いやすく美しいWebサイトを制作します。公開後の運用・更新サポートも継続的にご提供いたします。',
      tags: ['企業サイト', 'LP制作', 'CMS導入', '保守・運用'],
    },
    {
      num: '〇二',
      en: 'APP',
      title: 'スマートフォンアプリ開発',
      desc: 'iOS・Android双方に対応したモバイルアプリを開発します。企画・設計から開発・リリースまで一貫してサポートいたします。',
      tags: ['iOS', 'Android', 'UI/UX設計', 'リリース支援'],
    },
    {
      num: '〇三',
      en: 'DX',
      title: '業務効率化・DX支援',
      desc: '業務フローの見直しから、クラウドツールの導入・生成AI活用まで、貴社のデジタルトランスフォーメーションを総合的に支援します。',
      tags: ['業務フロー改善', 'クラウド導入', '生成AI活用', 'RPA'],
    },
    {
      num: '〇四',
      en: 'DESIGN',
      title: 'デザイン制作',
      desc: '名刺・チラシ・パンフレット・バナーなど、各種印刷物やデジタル媒体のデザインを制作します。ブランドの価値を高める表現をご提案します。',
      tags: ['名刺', 'チラシ', 'パンフレット', 'バナー'],
    },
    {
      num: '〇五',
      en: 'IoT',
      title: 'IoT機器導入・試作支援',
      desc: 'センサー・マイコンを用いたIoTデバイスの試作から量産支援まで対応します。工場・農業・インフラなど幅広い分野での実績があります。',
      tags: ['試作開発', 'センサー活用', '遠隔監視', 'システム連携'],
    },
    {
      num: '〇六',
      en: 'ELECTRICAL',
      title: '電気設備・設備保全に関する技術支援',
      desc: '電気設備の設計・施工監理から、設備保全計画の策定・トラブル対応まで、豊富な現場経験をもとに技術的なサポートをいたします。',
      tags: ['設備設計', '施工監理', '保全計画', 'トラブル対応'],
    },
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
          <a href="/services" style={{ color: 'var(--color-green)', borderBottom: '0.5px solid var(--color-green)', paddingBottom: '2px' }}>事業内容</a>
          <a href="/about">会社概要</a>
          <a href="/news">お知らせ</a>
          <a href="/contact">お問い合わせ</a>
        </div>
      </nav>

      {/* ページヘッダー */}
      <div style={{ padding: '3rem 2rem 2rem', borderBottom: '0.5px solid var(--color-border)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-text-hint)', marginBottom: '1rem' }}>SERVICE</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, letterSpacing: '0.08em' }}>
          事業内容
        </h1>
        <p style={{ fontSize: '13px', color: 'var(--color-text-sub)', lineHeight: 2, letterSpacing: '0.05em', marginTop: '1rem' }}>
          ITから電気設備まで、幅広い専門技術でお客様の課題を解決いたします。
        </p>
      </div>

      {/* サービス一覧 */}
      <div style={{ padding: '2rem 2rem 4rem' }}>
        {services.map((s, i) => (
          <div
            key={s.num}
            style={{
              display: 'flex', gap: '2rem', padding: '2rem 0',
              borderBottom: '0.5px solid var(--color-border)',
              flexWrap: 'wrap',
            }}
          >
            {/* 番号 */}
            <div style={{ minWidth: '60px' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', color: 'var(--color-green)', letterSpacing: '0.15em' }}>
                {s.num}
              </div>
              <div style={{ fontSize: '10px', color: 'var(--color-text-hint)', letterSpacing: '0.15em', marginTop: '4px' }}>
                {s.en}
              </div>
            </div>

            {/* 内容 */}
            <div style={{ flex: 1, minWidth: '200px' }}>
              <h2 style={{
                fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 400,
                letterSpacing: '0.06em', marginBottom: '0.8rem'
              }}>
                {s.title}
              </h2>
              <p style={{ fontSize: '13px', color: 'var(--color-text-sub)', lineHeight: 2, letterSpacing: '0.03em', marginBottom: '1rem' }}>
                {s.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {s.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '11px', padding: '3px 10px',
                    border: '0.5px solid var(--color-border)',
                    color: 'var(--color-text-hint)', letterSpacing: '0.05em'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* お問い合わせCTA */}
      <div style={{
        margin: '0 2rem 4rem', padding: '2.5rem 2rem',
        border: '0.5px solid var(--color-border)', textAlign: 'center'
      }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-text-hint)', marginBottom: '1rem' }}>CONTACT</div>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '16px', fontWeight: 400, letterSpacing: '0.06em', marginBottom: '1.5rem' }}>
          ご相談・お見積もりはお気軽にどうぞ
        </p>
        <a href="/contact" style={{
          display: 'inline-block', padding: '0.8rem 2.5rem', fontSize: '13px',
          letterSpacing: '0.15em', border: '0.5px solid var(--color-ink)',
          color: 'var(--color-ink)', textDecoration: 'none'
        }}>
          お問い合わせ
        </a>
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
