import { useState } from 'react';

const DAYS_JP = ['日', '月', '火', '水', '木', '金', '土'];

export default function News({ posts }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState(null);

  // "YYYY-MM-DD" → post[] のマップ
  const postDateMap = {};
  posts.forEach(post => {
    const d = new Date(post.date);
    const key = [
      d.getFullYear(),
      String(d.getMonth() + 1).padStart(2, '0'),
      String(d.getDate()).padStart(2, '0'),
    ].join('-');
    if (!postDateMap[key]) postDateMap[key] = [];
    postDateMap[key].push(post);
  });

  const prevMonth = () => {
    setSelectedDate(null);
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };
  const nextMonth = () => {
    setSelectedDate(null);
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const cells = [];
  for (let i = 0; i < firstDayOfWeek; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const makeDateKey = (d) =>
    `${viewYear}-${String(viewMonth + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

  // カレンダーが表示している月のお知らせだけを月ごとにまとめる
  const monthPosts = posts.filter(post => {
    const d = new Date(post.date);
    return d.getFullYear() === viewYear && d.getMonth() === viewMonth;
  });

  const filteredPosts = selectedDate ? (postDateMap[selectedDate] || []) : monthPosts;

  const btnStyle = {
    background: 'none', border: 'none', cursor: 'pointer',
    fontSize: '16px', color: 'var(--color-text-sub)', padding: '0 6px',
    lineHeight: 1,
  };

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
          <a href="/news" style={{ color: 'var(--color-green)', borderBottom: '0.5px solid var(--color-green)', paddingBottom: '2px' }}>お知らせ</a>
          <a href="/contact">お問い合わせ</a>
        </div>
      </nav>

      {/* ページヘッダー */}
      <div style={{ padding: '3rem 2rem 2rem', borderBottom: '0.5px solid var(--color-border)' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.2em', color: 'var(--color-text-hint)', marginBottom: '1rem' }}>NEWS</div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, letterSpacing: '0.08em' }}>
          お知らせ
        </h1>
      </div>

      {/* メインコンテンツ */}
      <div style={{ display: 'flex', gap: '3rem', padding: '2.5rem 2rem 4rem', alignItems: 'flex-start', flexWrap: 'wrap' }}>

        {/* カレンダー */}
        <div style={{ minWidth: '220px', width: '220px' }}>

          {/* 月ナビ */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <button style={btnStyle} onClick={prevMonth}>‹</button>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '13px', letterSpacing: '0.1em' }}>
              {viewYear}年 {viewMonth + 1}月
            </div>
            <button style={btnStyle} onClick={nextMonth}>›</button>
          </div>

          {/* 曜日ヘッダー */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
            {DAYS_JP.map((d, i) => (
              <div key={d} style={{
                textAlign: 'center', fontSize: '10px', padding: '4px 0',
                color: i === 0 ? '#c0392b' : i === 6 ? '#2980b9' : 'var(--color-text-hint)',
                letterSpacing: '0.05em',
              }}>
                {d}
              </div>
            ))}

            {/* 日付セル */}
            {cells.map((day, i) => {
              if (!day) return <div key={`e${i}`} />;
              const key = makeDateKey(day);
              const hasPost = !!postDateMap[key];
              const isSelected = key === selectedDate;
              const dayOfWeek = (firstDayOfWeek + day - 1) % 7;

              let color = dayOfWeek === 0 ? '#c0392b' : dayOfWeek === 6 ? '#2980b9' : 'var(--color-ink)';
              if (!hasPost) color = dayOfWeek === 0 ? '#e8b4b8' : dayOfWeek === 6 ? '#b4c8e8' : 'var(--color-text-hint)';
              if (isSelected) color = '#fff';

              return (
                <div
                  key={key}
                  onClick={() => hasPost && setSelectedDate(isSelected ? null : key)}
                  style={{
                    textAlign: 'center', fontSize: '12px', padding: '5px 2px',
                    cursor: hasPost ? 'pointer' : 'default',
                    fontWeight: hasPost ? 600 : 300,
                    color,
                    background: isSelected ? 'var(--color-green)' : 'transparent',
                    borderRadius: isSelected ? '2px' : '0',
                    position: 'relative',
                  }}
                >
                  {day}
                  {hasPost && !isSelected && (
                    <span style={{
                      display: 'block', width: '4px', height: '4px',
                      borderRadius: '50%', background: 'var(--color-green)',
                      margin: '1px auto 0',
                    }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* フィルター中の場合クリアボタン */}
          {selectedDate && (
            <button
              onClick={() => setSelectedDate(null)}
              style={{
                marginTop: '1rem', width: '100%', padding: '0.4rem',
                fontSize: '11px', letterSpacing: '0.1em', cursor: 'pointer',
                border: '0.5px solid var(--color-border)', background: 'transparent',
                color: 'var(--color-text-sub)',
              }}
            >
              × 絞り込みを解除
            </button>
          )}
        </div>

        {/* 記事一覧 */}
        <div style={{ flex: 1, minWidth: '280px' }}>

          {/* 月見出し：カレンダーのめくりに連動 */}
          <div style={{
            fontFamily: 'var(--font-serif)', fontSize: '16px', letterSpacing: '0.1em',
            marginBottom: '1.2rem', paddingBottom: '0.8rem',
            borderBottom: '0.5px solid var(--color-border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'baseline',
          }}>
            <span>{viewYear}年{viewMonth + 1}月のお知らせ</span>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--color-text-hint)', letterSpacing: '0.05em' }}>
              全{monthPosts.length}件
            </span>
          </div>

          {selectedDate && (
            <div style={{
              fontSize: '12px', letterSpacing: '0.08em', color: 'var(--color-text-hint)',
              marginBottom: '1.2rem', paddingBottom: '0.8rem',
              borderBottom: '0.5px solid var(--color-border)',
            }}>
              {selectedDate.replace(/-/g, '.')} の記事
              {filteredPosts.length === 0 && <span style={{ marginLeft: '1rem' }}>（記事なし）</span>}
            </div>
          )}

          {filteredPosts.length > 0 ? filteredPosts.map(post => {
            const thumbnail = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
            const dateStr = new Date(post.date)
              .toLocaleDateString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit' })
              .replace(/\//g, '.');
            return (
              <a href={`/posts/${post.slug}`} key={post.id} style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}>
                <div style={{
                  display: 'flex', gap: '1.2rem', alignItems: 'flex-start',
                  padding: '1rem 0', borderBottom: '0.5px solid var(--color-border)',
                }}>
                  {thumbnail && (
                    <img
                      src={thumbnail}
                      alt={post.title.rendered}
                      style={{ width: '72px', height: '54px', objectFit: 'cover', flexShrink: 0 }}
                    />
                  )}
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'baseline', marginBottom: '0.3rem' }}>
                      <span style={{ fontSize: '11px', color: 'var(--color-text-hint)', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                        {dateStr}
                      </span>
                      <span style={{
                        fontSize: '10px', padding: '2px 7px',
                        border: '0.5px solid var(--color-green)', color: 'var(--color-green)',
                        letterSpacing: '0.05em', whiteSpace: 'nowrap',
                      }}>
                        お知らせ
                      </span>
                    </div>
                    <span
                      style={{ fontSize: '13px', color: 'var(--color-text-sub)', letterSpacing: '0.03em', lineHeight: 1.7 }}
                      dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                    />
                  </div>
                </div>
              </a>
            );
          }) : !selectedDate && (
            <div style={{ fontSize: '13px', color: 'var(--color-text-hint)', padding: '2rem 0' }}>
              {viewYear}年{viewMonth + 1}月のお知らせはありません。
            </div>
          )}
        </div>
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
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wp/v2/posts?_embed&per_page=100`
    );
    if (!res.ok) throw new Error(`WP response ${res.status}`);
    const posts = await res.json();
    return { props: { posts }, revalidate: 60 };
  } catch (error) {
    console.error('Failed to fetch WordPress posts for /news', error);
    return { props: { posts: [] }, revalidate: 60 };
  }
}
