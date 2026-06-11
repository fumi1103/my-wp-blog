export default function Home({ posts }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>My Blog</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: '1px solid #eee', marginBottom: '2rem', paddingBottom: '1rem' }}>
          <h2
            dangerouslySetInnerHTML={{ __html: post.title.rendered }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
          />
          <a href={`/posts/${post.slug}`}>続きを読む →</a>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?_embed&per_page=10`
  );
  const posts = await res.json();

  return {
    props: { posts },
  };
}