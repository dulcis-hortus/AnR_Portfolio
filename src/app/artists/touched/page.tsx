import type { Metadata } from 'next';
import report from '@/data/aggregate_report.json';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: '터치드 — 정규 1집 《역광》 기획',
  description:
    '유튜브 댓글 표본 200건 분석에 근거한 터치드 첫 정규 앨범 기획.',
  openGraph: {
    title: '터치드 — 정규 1집 《역광》 기획',
    description:
      '유튜브 댓글 표본 200건 분석에 근거한 터치드 첫 정규 앨범 기획.',
  },
};

const T = report['팀별']['터치드'];
const R = T.친구형_비율;
const QUOTES = report['대표댓글']['터치드'];

const ACTS = [
  { no: '1막', title: '무대에 오르다', desc: '스포트라이트를 향해 달리던 것. 타이틀 A. Highlight 톤.' },
  { no: '2막', title: '눈부심', desc: '미아→무중력. 밝지만 붕 떠있는 불안.' },
  { no: '3막', title: '블랙아웃', desc: '슬로우 번. 편안하게 시작하나 서서히 불편함이 쌓임. Creep 감각. 앨범의 심장.' },
  { no: '4막', title: '그림자', desc: '영원의 밤→이 별. 이성적 체념→감정적 폭발.' },
  { no: '5막', title: '정면', desc: '잔잔한 희망 신곡→타이틀 B. 다시 빛 속으로, 그러나 다른 이유로.' },
];

function pct(v: number) {
  return Math.round(v * 100);
}

export default function Touched() {
  const lo = pct(R.CI95[0]);
  const hi = pct(R.CI95[1]);
  const pt = pct(R.점추정);
  const nosignalPct = Math.round((T.분포.무신호 / T.표본) * 100);

  return (
    <>
      {/* ── ① 앨범 기획: 결론 먼저 ─────────────────────────── */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Artist — 터치드</p>
          <h1>정규 1집 《역광 (逆光)》</h1>
          <p className="concept-line">
            성공이라는 스포트라이트를 향해 달리다, 그 빛 안에서 아무것도
            보이지 않게 된 사람들이 빛을 등지고 처음으로 자기 자신을 보게 되는
            이야기.
          </p>
          <p style={{ color: 'var(--ink-soft)' }}>
            터치드는 지금 분기점에 있습니다. 라이브 경쟁력은 확실한데 아직
            정규 앨범이 없습니다. 첫 정규는 한 번밖에 없는 서사적 이벤트 —
            《역광》은 터치드가 스스로에게 처음으로 솔직해지는 앨범이어야
            합니다. 겉은 명품처럼 정돈되어 있고, 안은 지금껏 없던 균열을
            담습니다.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-num">① 앨범 기획</p>
          <h2>5막 서사 구조</h2>
          <ol className="track-list">
            {ACTS.map((a) => (
              <li key={a.no}>
                <span className="no">{a.no}</span>
                <span className="track-title">{a.title}</span>
                <span className="track-desc">{a.desc}</span>
              </li>
            ))}
          </ol>
          <h3>더블 타이틀, 원형 구조</h3>
          <p>
            1막 타이틀은 스트리밍 진입문, 5막 타이틀은 앨범을 통과한 청자에게
            다른 무게로 들리는 곡입니다. 5막 타이틀을 듣고 다시 1막으로
            돌아오면 같은 곡이 다르게 들립니다.
          </p>
          <p>
            3막의 형식 근거: 보컬 윤민이 음악을 시작할 때 라디오헤드 같은
            음악을 하고 싶다고 밝혔고 Creep을 특별한 의미가 있는 곡으로
            언급했습니다. 외부에서 부여한 실험이 아니라 멤버들이 가진 원점에서
            출발하는 구간입니다.
          </p>
        </div>
      </section>

      {/* ── ② 데이터 근거 + 해석 ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-num">② 데이터 근거</p>
          <h2>팬은 터치드를 어떻게 부르는가</h2>
          <p className="footnote">
            공식 유튜브 채널 톱레벨 댓글에서 층화 무작위로 추출한 표본
            200건(시드 고정)을 전건 수기 라벨링한 결과입니다. 댓글 작성자는
            능동적 팬 집단으로, 전체 팬층을 대표하지 않습니다. 절차 상세는{' '}
            <a href="/method/">분석 방법</a>에 공개되어 있습니다.
          </p>

          <div className="stat-grid">
            <div className="stat-box">
              <div className="k">분류 댓글 200건 중 관계 신호</div>
              <div className="v">{T.관계신호_수}건</div>
              <div className="s">
                친구형 {T.분포.친구형} · 우상형 {T.분포.우상형} · 혼합{' '}
                {T.분포.혼합}
              </div>
            </div>
            <div className="stat-box">
              <div className="k">관계 신호 중 친구형 비중</div>
              <div className="v">
                {pt}% <span style={{ fontSize: 15 }}>[{lo}–{hi}%]</span>
              </div>
              <div className="s">
                95% CI · 분모 {R.분모}건(친구형+우상형)
              </div>
            </div>
            <div className="stat-box">
              <div className="k">무신호</div>
              <div className="v">{T.분포.무신호}건</div>
              <div className="s">표본 200건 중 약 {nosignalPct}%</div>
            </div>
          </div>

          <p>
            <span className="tag-obs">관찰</span>
            친구형 17건 대 우상형 14건. 95% 신뢰구간([{lo}–{hi}%])이 50%를
            걸쳐, 어느 쪽이 우세하다고 단정할 수 없습니다. 터치드는 균형
            팀입니다.
          </p>
          <p>
            <span className="tag-interp">해석</span>
            균형이라는 사실 자체가 기획의 입력값입니다. &lsquo;같은 시간을
            산다&rsquo;는 동행의 언어(친구형)와 사람을 향한 압도·헌신의
            언어(우상형)가 한 팬덤 안에 공존합니다. 《역광》의 더블 타이틀
            구조 — 진입문이 되는 곡과 앨범을 통과한 청자를 위한 곡 — 는 이 두
            팬층 모두에 응답하려는 설계입니다.
          </p>
          <p>
            <span className="tag-obs">관찰</span>
            유입 경로를 자발적으로 언급한 댓글 13건의 내역: 기타 5 ·
            공연/페스티벌 3 · OST/미디어 2 · 알고리즘 2 · 지인 추천 1. 언급
            수가 적어 분포가 아닌 개수로만 표기합니다.
          </p>
          <p>
            <span className="tag-interp">해석</span>
            적은 언급 수에서도 공연·페스티벌이 나타나는 점은, &lsquo;무대를
            먼저 보고 팬이 되는&rsquo; 유입 경로와 부합합니다. 라이브가 이
            팀의 가장 강력한 자산이라는 판단과 연결됩니다.
          </p>

          <h3>대표 댓글</h3>
          <p className="footnote">
            관계유형별 좋아요 상위 댓글입니다. 위 분포 추정과는 별도 표본으로,
            정성 참고용입니다.
          </p>
          <div className="quote-grid">
            <div className="quote-card">
              {QUOTES.친구형[0].text}
              <div className="quote-meta">
                친구형 · 좋아요 {QUOTES.친구형[0].like}
              </div>
            </div>
            <div className="quote-card">
              {QUOTES.친구형[1].text}
              <div className="quote-meta">
                친구형 · 좋아요 {QUOTES.친구형[1].like}
              </div>
            </div>
            <div className="quote-card">
              {QUOTES.우상형[0].text}
              <div className="quote-meta">
                우상형 · 좋아요 {QUOTES.우상형[0].like}
              </div>
            </div>
            <div className="quote-card">
              {QUOTES.우상형[1].text}
              <div className="quote-meta">
                우상형 · 좋아요 {QUOTES.우상형[1].like}
              </div>
            </div>
          </div>
          <p>
            <span className="tag-interp">해석</span>
            우상형 상위 댓글이 보컬 개인(조윤민)을 향해 있습니다. 곡 안에서
            보컬이 어필할 수 있는 구조적 공간을 설계하는 것이 이 팬층에
            응답하는 방법입니다.
          </p>
        </div>
      </section>

      {/* ── ③ 현장 검증 ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-num">③ 현장 검증</p>
          <h2>데이터가 닿지 못하는 것</h2>
          <p style={{ color: 'var(--ink-soft)' }}>
            공연 현장 관찰 기록을 정리 중입니다.
          </p>
        </div>
      </section>

      {/* ── ④ CTA ──────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-num">④ 더 보기</p>
          <h2>이 분석은 어떻게 만들어졌나</h2>
          <p style={{ color: 'var(--ink-soft)' }}>
            수집·표본 설계·라벨링 기준·검증 절차와 한계를 전부 공개합니다.
          </p>
          <p style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-accent" href="/method/">
              분석 방법 보기
            </a>
            <a className="btn" href={`mailto:${SITE.email}`}>
              이메일 보내기
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
