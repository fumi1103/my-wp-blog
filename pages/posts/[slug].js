export default function Post({ post }) {
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
          <a href="#">お問い合わせ</a>
        </div>
      </nav>

      {/* 記事ヘッダー */}
      <div style={{ padding: '3rem 2rem 2rem', borderBottom: '0.5px solid var(--color-border)' }}>
        <div style={{ fontSize: '12px', color: 'var(--color-text-hint)', letterSpacing: '0.05em', marginBottom: '1rem' }}>
          {new Date(post.date).toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\//g, '.')}
        </div>
        <h1
          style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, lineHeight: 1.7, letterSpacing: '0.08em' }}
          dangerouslySetInnerHTML={{ __html: post.title.rendered }}
        />
      </div>

      {/* 記事本文 */}
      <div style={{ padding: '2.5rem 2rem 4rem', fontSize: '15px', lineHeight: 2, letterSpacing: '0.05em', color: 'var(--color-ink)' }}
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />

      {/* 区切り */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0 2rem', margin: '0 0 2rem' }}>
        <div style={{ flex: 1, height: '0.5px', background: 'var(--color-border)' }}></div>
      </div>

      {/* 戻るリンク */}
      <div style={{ padding: '0 2rem 3rem' }}>
        <a href="/" style={{ fontSize: '13px', color: 'var(--color-green)', letterSpacing: '0.1em' }}>
          ← お知らせ一覧に戻る
        </a>
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

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=100`
  );
  const posts = await res.json();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  );
  const posts = await res.json();
  return { props: { post: posts[0] } };
}