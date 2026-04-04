import { useInstagramFeed } from '../hooks/useInstagramFeed'
import './Initiatives.css'

const INSTAGRAM_URL = 'https://www.instagram.com/pages_of_possibility.hn/'

// Fallback posts shown when no API token is configured
const FALLBACK_POSTS = [
  {
    id: 'fb1',
    grad: 'linear-gradient(160deg, #2d1c00 0%, #1B3070 100%)',
    accent: '#F5A820',
    timestamp: '2024-12-08T00:00:00',
    caption: 'Donated 400 books to the children at Na Phac Church in Bắc Kạn 📚 We decorated the library together, read stories aloud, and played music — literature coming alive.',
    permalink: INSTAGRAM_URL,
    tag: 'Na Phac Church · Bắc Kạn',
    watermark: '400',
  },
  {
    id: 'fb2',
    grad: 'linear-gradient(160deg, #082d3d 0%, #0D1E4E 100%)',
    accent: '#2FB5D4',
    timestamp: '2025-02-23T00:00:00',
    caption: "First visit to the National Children's Hospital 🏥 250 books now live in the Endocrinology Department — giving young patients a world to escape into while they heal.",
    permalink: INSTAGRAM_URL,
    tag: "NCH · Endocrinology",
    watermark: '250',
  },
  {
    id: 'fb3',
    grad: 'linear-gradient(160deg, #0D2A1A 0%, #1B3070 100%)',
    accent: '#5DC068',
    timestamp: '2025-03-15T00:00:00',
    caption: 'We crossed 1,500 books donated 🎉 Cardiology, Emergency Medicine, and the MRI Centre at NCH now have reading corners. Every child deserves a story.',
    permalink: INSTAGRAM_URL,
    tag: 'NCH · 1,500 books milestone',
    watermark: '1.5K',
  },
  {
    id: 'fb4',
    grad: 'linear-gradient(160deg, #1B3070 0%, #0D1E4E 100%)',
    accent: '#2FB5D4',
    timestamp: null,
    caption: 'Launching "Moments of Tết" ✍️ — a writing competition at Na Phac Church and NCH giving every child a platform to share their story. Their voices deserve to be heard.',
    permalink: INSTAGRAM_URL,
    tag: 'Writing Competition · In Progress',
    watermark: '✍',
  },
  {
    id: 'fb5',
    grad: 'linear-gradient(160deg, #3d1818 0%, #1B3070 100%)',
    accent: '#E85A50',
    timestamp: null,
    caption: 'Coming soon: school libraries in Việt Trì County 📖 2–3 elementary schools will each receive 600+ books — extending Pages of Possibility beyond hospitals to classrooms.',
    permalink: INSTAGRAM_URL,
    tag: 'Việt Trì Schools · Aug/Sep 2025',
    watermark: '600+',
  },
  {
    id: 'fb6',
    grad: 'linear-gradient(160deg, #0a1a40 0%, #0D2A1A 100%)',
    accent: '#5DC068',
    timestamp: null,
    caption: 'Our biggest dream: an orphanage library network across northern Vietnam 🌏 Books, computers, and digital learning for children without families — every child is a page of possibility.',
    permalink: INSTAGRAM_URL,
    tag: 'Orphanage Network · 2026',
    watermark: '∞',
  },
]

function formatDate(iso) {
  if (!iso) return 'Coming soon'
  return new Date(iso).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  })
}

function InstagramIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="white"
      stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  )
}

function CarouselIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="15" height="15" rx="2"/>
      <polyline points="17 8 22 8 22 21 9 21 9 17"/>
    </svg>
  )
}

/* ── Live post card (Behold.so field names) ── */
function LivePost({ post, index }) {
  const isVideo    = post.mediaType === 'VIDEO'
  const isCarousel = post.mediaType === 'CAROUSEL_ALBUM'
  const imgSrc     = isVideo ? post.thumbnailUrl : post.mediaUrl
  const caption    = post.caption ?? ''

  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="ig-post ig-post--live"
      data-aos="fade-up"
      data-aos-delay={index * 55}
    >
      <div className="ig-post-photo">
        <img
          src={imgSrc}
          alt={caption.slice(0, 80)}
          className="ig-post-img"
          loading="lazy"
        />
        {isVideo    && <div className="ig-post-type-badge ig-post-type-badge--video"><PlayIcon /></div>}
        {isCarousel && <div className="ig-post-type-badge ig-post-type-badge--carousel"><CarouselIcon /></div>}
        <div className="ig-post-overlay">
          <div className="ig-post-overlay-inner">
            <p className="ig-post-caption-preview">{caption}</p>
          </div>
        </div>
      </div>
      <div className="ig-post-foot">
        <div className="ig-post-actions">
          <span className="ig-post-action"><HeartIcon /> Like</span>
          <span className="ig-post-action ig-post-action--view">View on Instagram →</span>
        </div>
        <span className="ig-post-date">{formatDate(post.timestamp)}</span>
      </div>
    </a>
  )
}

/* ── Fallback post card (no API token) ── */
function FallbackPost({ post, index }) {
  return (
    <a
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      className="ig-post"
      style={{ '--pg': post.grad, '--accent': post.accent }}
      data-aos="fade-up"
      data-aos-delay={index * 55}
    >
      <div className="ig-post-photo">
        <div className="ig-post-bg" />
        <div className="ig-post-watermark">{post.watermark}</div>
        <div className="ig-post-overlay">
          <div className="ig-post-overlay-inner">
            <p className="ig-post-caption-preview">{post.caption}</p>
            <span className="ig-post-tag">{post.tag}</span>
          </div>
        </div>
      </div>
      <div className="ig-post-foot">
        <div className="ig-post-actions">
          <span className="ig-post-action"><HeartIcon /> Like</span>
          <span className="ig-post-action ig-post-action--view">View on Instagram →</span>
        </div>
        <span className="ig-post-date">{formatDate(post.timestamp)}</span>
      </div>
    </a>
  )
}

export default function Impact() {
  const { posts, loading, error } = useInstagramFeed()

  const isLive       = !error && !loading && posts.length > 0
  const showFallback = error || (!loading && posts.length === 0)
  const displayPosts = isLive ? posts : FALLBACK_POSTS

  return (
    <section className="impact white-bg" id="impact">

      {/* Wave bottom — draws sky into white for seamless Budget transition */}
      <div className="wave-bottom ig-wave-bottom">
        <svg viewBox="0 0 1440 130" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,55 C240,110 480,10 720,60 C960,110 1200,20 1440,65 L1440,130 L0,130 Z" fill="#c5eafc" />
        </svg>
      </div>

      <div className="container ig-wrap">

        {/* ── Header ── */}
        <div className="ig-header" data-aos="fade-up">
          <span className="section-label">Our Story</span>
          <h2 className="ig-title">Follow Our <em>Journey</em></h2>
          <p className="ig-subtitle">
            Every visit, every book, every child — captured on our Instagram.
            Here's a glimpse of the moments that make Pages of Possibility real.
          </p>
        </div>


        {/* ── Loading skeleton ── */}
        {loading && (
          <div className="ig-grid">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="ig-skeleton" />
            ))}
          </div>
        )}

        {/* ── Live or fallback posts ── */}
        {!loading && (
          <>
            {showFallback && error === 'no_token' && (
              <div className="ig-notice">
                Connect Instagram to show live posts — see setup instructions in <code>.env</code>
              </div>
            )}
            <div className="ig-grid">
              {isLive
                ? displayPosts.map((p, i) => <LivePost key={p.id} post={p} index={i} />)
                : displayPosts.map((p, i) => <FallbackPost key={p.id} post={p} index={i} />)
              }
            </div>
          </>
        )}

        {/* ── CTA ── */}
        <div className="ig-cta" data-aos="fade-up">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ig-cta-btn"
          >
            <InstagramIcon size={20} />
            <span>See all posts on Instagram</span>
          </a>
        </div>

      </div>
    </section>
  )
}
