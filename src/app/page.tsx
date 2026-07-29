import type { CSSProperties } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import CIChart from '@/components/CIChart';
import { SITE } from '@/data/site';
import { ALBUM_COLOR as TOUCHED_ACCENT } from '@/app/artists/touched/data';

export const metadata: Metadata = {
  title: { absolute: SITE.title },
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
};

// 가상 앨범 피드 — 아트워크 대신 타이포 커버. 라이트 서피스에 앨범별 액센트를
// 주입하고, 형태 라벨·타이틀·아티스트명·한 줄 컨셉을 조판한다.
// accent는 모두 지면(--bg) 위 대비 AA 이상. 터치드는 앨범 페이지와 단일 출처.
// hook은 각 앨범 페이지의 확정 문안을 그대로 옮긴 것 — 카드용으로 줄이지 않는다.
const ALBUM_FEED = [
  {
    artist: '신인류',
    form: 'EP',
    album: '구름을 빌려줘',
    href: '/artists/sinillyu/',
    accent: '#1f5fa8', // 코발트 (대비 6.07:1, AA+)
    hook: '연대로 닿지 못하고 자신에게 되돌아오는 경험들을, 수치나 부족함이 아니라 원래 잡히지 않는 것들로 바라보는 앨범.',
  },
  {
    artist: '터치드',
    form: '정규 1집',
    album: '역광',
    href: '/artists/touched/',
    accent: TOUCHED_ACCENT, // 화상 엠버 — touched/data.ts
    hook: '빛을 쫓는 동안엔 어둠을 볼 수 없었다',
  },
  {
    artist: '음율',
    form: '정규 3집',
    album: '매순간 그냥 그러고 싶었어',
    href: '/artists/eumyul/',
    accent: '#2f5d4a', // 포레스트 (대비 7.11:1, AAA)
    hook: '나에게 정직해지는 선택을 매순간 내려왔다는 것을, 설명하지 않고 그냥 그러고 싶었다는 말 한마디로 압축하는 앨범.',
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
                <div
                  className="album-art"
                  style={{ '--album': a.accent } as CSSProperties}
                >
                  <span className="rule" />
                  <span className="form">{a.form}</span>
                  {/* 여백을 채우는 재생 기호. */}
                  <svg
                    className="play"
                    viewBox="0 0 44 44"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <circle
                      cx="22"
                      cy="22"
                      r="21"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path d="M17.5 14.5L30 22l-12.5 7.5z" fill="currentColor" />
                  </svg>
                  {/* 아래로 붙는 본문 블록 — 타이틀 줄 수가 달라도 밑변이 맞고
                      위쪽 여백이 차이를 흡수한다. */}
                  <div className="body">
                    {/* 안쪽 span은 모바일 2줄 말줄임(line-clamp)용 —
                        바깥 .title이 flex여도 클램프가 걸리게 한다. */}
                    <span
                      className={
                        a.album.replace(/\s/g, '').length <= 4
                          ? 'title short'
                          : 'title'
                      }
                    >
                      <span>{a.album}</span>
                    </span>
                    <span className="artist">{a.artist}</span>
                    <p className="hook">{a.hook}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
