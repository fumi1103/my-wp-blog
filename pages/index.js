export default function Home({ posts }) {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', minHeight: '100vh' }}>

      {/* ナビゲーション */}
      <nav style={{
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        padding: '1.2rem 2rem', borderBottom: '0.5px solid var(--color-border)'
      }}>
        <div style={{ fontFamily: 'var(--font-serif)', fontSize: '18px', letterSpacing: '0.15em' }}>
          匠テックラボ <span style={{ fontSize: '13px', fontWeight: 300, color: 'var(--color-text-sub)' }}>Takumi Tech Lab</span>
        </div>
        <div style={{ display: 'flex', gap: '2rem', fontSize: '13px', color: 'var(--color-text-sub)', letterSpacing: '0.1em' }}>
          <a href="/services">事業内容</a>
          <a href="/about">会社概要</a>
          <a href="/news">お知らせ</a>
          <a href="/contact">お問い合わせ</a>
        </div>
      </nav>

      {/* ヒーロー */}
      <div style={{
        padding: '4rem 2rem 3rem', borderBottom: '0.5px solid var(--color-border)',
        display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end'
      }}>
        <div>
          <h1 style={{
            fontFamily: 'var(--font-serif)', fontSize: '32px', fontWeight: 300,
            lineHeight: 1.6, letterSpacing: '0.08em', marginBottom: '1rem'
          }}>
            テクノロジーで、<br />ビジネスを<br />前へ進める。
          </h1>
          <p style={{ fontSize: '13px', color: 'var(--color-text-sub)', lineHeight: 2, letterSpacing: '0.05em' }}>
            Web・アプリ・生成AI・IoT——<br />最新技術を組み合わせ、貴社の課題を解決します。
          </p>
        </div>
        <svg width="80" height="80" viewBox="0 0 100 100" fill="none" style={{ opacity: 0.15 }}>
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1"/>
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeWidth="0.5"/>
          <path d="M50 15 L57 35 L50 30 L43 35 Z" fill="currentColor" opacity="0.6"/>
          <path d="M50 85 L57 65 L50 70 L43 65 Z" fill="currentColor" opacity="0.6"/>
          <path d="M15 50 L35 43 L30 50 L35 57 Z" fill="currentColor" opacity="0.6"/>
          <path d="M85 50 L65 43 L70 50 L65 57 Z" fill="currentColor" opacity="0.6"/>
          <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="0.5" fill="none"/>
        </svg>
      </div>

      {/* サービス区切り */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 2rem', margin: '2rem 0' }}>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--color-border)' }}></div>
        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-text-hint)' }}>SERVICE</div>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--color-border)' }}></div>
      </div>

      {/* サービス一覧 */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--color-border)', margin: '0 2rem' }}>
        {[
          { num: '〇一', title: 'コンサルティング', desc: '豊富な経験と専門知識で、貴社の課題解決をご支援いたします。' },
          { num: '〇二', title: 'Web制作・開発', desc: '使いやすさと美しさを両立した、高品質なWebサイトを制作します。' },
          { num: '〇三', title: 'デザイン制作', desc: 'ブランドの価値を高める、印象的なビジュアルをデザインします。' },
        ].map((service) => (
          <div key={service.num} style={{ background: '#FAFAF8', padding: '1.5rem' }}>
            <div style={{ fontSize: '11px', color: 'var(--color-green)', letterSpacing: '0.15em', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)' }}>
              {service.num}
            </div>
            <div style={{ fontSize: '15px', fontWeight: 500, marginBottom: '0.6rem', letterSpacing: '0.05em' }}>
              {service.title}
            </div>
            <div style={{ fontSize: '12px', color: 'var(--color-text-sub)', lineHeight: 1.9, letterSpacing: '0.03em' }}>
              {service.desc}
            </div>
          </div>
        ))}
      </div>

      {/* NEWS区切り */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 2rem', margin: '2rem 0' }}>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--color-border)' }}></div>
        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-text-hint)' }}>NEWS</div>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--color-border)' }}></div>
      </div>

      {/* 記事一覧 */}
      <div style={{ padding: '0 2rem 3rem' }}>
        {posts.map((post) => {
          const thumbnail = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
          return (
            <a href={`/posts/${post.slug}`} key={post.id}>
              <div style={{
                display: 'flex', gap: '1.5rem', alignItems: 'center',
                padding: '1rem 0', borderBottom: '0.5px solid var(--color-border)'
              }}>
                {thumbnail && (
                  <img
                    src={thumbnail}
                    alt={post.title.rendered}
                    style={{ width: '80px', height: '60px', objectFit: 'cover', flexShrink: 0 }}
                  />
                )}
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'baseline', marginBottom: '0.3rem' }}>
                    <span style={{ fontSize: '12px', color: 'var(--color-text-hint)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                      {new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
                    </span>
                    <span style={{
                      fontSize: '11px', padding: '2px 8px',
                      border: '0.5px solid var(--color-green)', color: 'var(--color-green)',
                      letterSpacing: '0.05em', whiteSpace: 'nowrap'
                    }}>
                      お知らせ
                    </span>
                  </div>
                  <span
                    style={{ fontSize: '13px', color: 'var(--color-text-sub)', letterSpacing: '0.03em' }}
                    dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                  />
                </div>
              </div>
            </a>
          );
        })}
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

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?_embed&per_page=3`
  );
  const posts = await res.json();
  return { props: { posts } };
}