import type { Metadata } from 'next';
import Link from 'next/link';
import CIChart from '@/components/CIChart';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: { absolute: SITE.title },
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
};

// 가상 앨범 피드 — 아트·타이틀은 시안(미결). 기획안 공개 전 placeholder.
const ALBUM_FEED = [
  {
    artist: '신인류',
    title: 'EP 《구름을 빌려줘》',
    href: '/artists/sinillyu/',
    gradient: 'linear-gradient(135deg, #2b3a67 0%, #b3591f 100%)',
    status: '기획안 공개',
  },
  {
    artist: '터치드',
    title: '정규 1집 《역광》',
    href: '/artists/touched/',
    gradient: 'linear-gradient(135deg, #4a2b3a 0%, #c9903a 100%)',
    status: '기획안 공개',
  },
  {
    artist: '음율',
    title: '정규 3집 《매순간 그냥 그러고 싶었어》',
    href: '/artists/eumyul/',
    gradient: 'linear-gradient(135deg, #1f3d33 0%, #7a9e7e 100%)',
    status: '기획안 공개',
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container-wide">
          <p className="eyebrow">A&amp;R Portfolio</p>
          <h1>
            데이터로 가설을 세우고,
            <br />
            현장에서 검증합니다
          </h1>
          <p className="hero-sub">
            유튜브 댓글 4만여 건에서 팬덤의 언어를 읽고, 공연장에서 그 가설을
            직접 확인합니다. 관찰과 해석을 구분하고, 표본의 한계를 함께
            공개합니다.
          </p>
          <p className="hero-story">
            요구사항을 코드로 구현하던 프론트엔드 개발자 5년 — 이제 같은
            정확함으로 아티스트와 팬 사이의 신호를 읽습니다.
          </p>
          <div className="numflow">
            <span>
              <strong>40,856</strong>건 수집
            </span>
            <span className="sep">→</span>
            <span>
              <strong>1,000</strong>건 직접 분류
            </span>
            <span className="sep">·</span>
            <span>팀당 표본 200건</span>
          </div>
          <p className="footnote" style={{ marginTop: 12 }}>
            AI 분류는 사전 등록한 기준으로 검증한 뒤, 미달로 탈락시켰습니다.{' '}
            <Link href="/method/#ai-validation">검증 과정 보기</Link>
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <p className="eyebrow">Signature Chart</p>
          <CIChart />
        </div>
      </section>

      <section className="section">
        <div className="container-wide">
          <p className="eyebrow">Album Concepts</p>
          <h2 style={{ marginTop: 0 }}>가상 앨범 기획</h2>
          <p style={{ color: 'var(--ink-soft)', maxWidth: 560 }}>
            데이터 분석과 현장 관찰을 근거로, 각 팀의 다음 앨범을
            기획했습니다. 결론을 먼저 제시하고 근거를 뒤에 폅니다.
          </p>
          <div className="album-feed">
            {ALBUM_FEED.map((a) => (
              <Link className="album-card" href={a.href} key={a.artist}>
                <div className="album-art" style={{ background: a.gradient }}>
                  {a.artist}
                </div>
                <div className="album-meta">
                  <div className="artist">
                    {a.artist} — {a.title}
                  </div>
                  <div className="status">{a.status}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
