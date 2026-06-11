export default function Post({ post }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <a href="/">← 一覧に戻る</a>
      <h1
        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
      />
      <div
        dangerouslySetInnerHTML={{ __html: post.content.rendered }}
      />
    </div>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?per_page=100`
  );
  const posts = await res.json();

  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?slug=${params.slug}&_embed`
  );
  const posts = await res.json();

  return {
    props: { post: posts[0] },
  };
}