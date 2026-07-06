import type { Metadata } from 'next';
import Link from 'next/link';
import report from '@/data/aggregate_report.json';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: '음율 — 정규 3집 《매순간 그냥 그러고 싶었어》 기획',
  description:
    '유튜브 댓글 표본 200건 분석에 근거한 음율 다음 정규 앨범 기획.',
  openGraph: {
    title: '음율 — 정규 3집 《매순간 그냥 그러고 싶었어》 기획',
    description:
      '유튜브 댓글 표본 200건 분석에 근거한 음율 다음 정규 앨범 기획.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
};

const T = report['팀별']['음율'];
const QUOTES = report['대표댓글']['음율'];

const TRACKS = [
  { no: '00', title: '인트로', desc: '세계관 진입. 뮤직비디오 서사와 연결되는 짧은 트랙.' },
  { no: '01', title: '—', desc: '이유 없이 튀어나간 것. 묵직하고 긴장된 사운드, 설명 없는 출발. 레퍼런스: 염라(윤하) 사운드 + Far Away 서사.' },
  { no: '02', title: '—', desc: '튀어나간 직후의 감각. 놀라움, 당황. 이해보다 행동이 먼저 나간 것을 처음 인식하는 순간.' },
  { no: '03', title: '—', desc: '후회와 슬픔. 이유를 묻지 않는 슬픔.' },
  { no: '04', title: '내일 만날 약속을 하면서 오늘 이별을 말했다', desc: '미완성 수용. (수록 확정)' },
  { no: '05', title: '바람잡이', desc: '같은 선택을 또 하는 것. 뛰어내리는 것. (수록 확정)' },
  { no: '06', title: '—', desc: '이게 정말 옳은 일이었을까. 처음으로 이유를 따지는 순간.' },
  { no: '07', title: '—', desc: '옳고 그름의 기준 재고. 흔들리는데 멈추지 않는 것.' },
  { no: '08', title: '—', desc: '완전한 수용. 저항이 사라지는 것.' },
  { no: '09', title: '—', desc: '매순간 그냥 그러고 싶었다는 수용이 언어로 나오는 것. 온전한 자기 인정.' },
];

export default function Eumyul() {
  const nosignalPct = Math.round((T.분포.무신호 / T.표본) * 100);

  return (
    <>
      {/* ── ① 앨범 기획: 결론 먼저 ─────────────────────────── */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Artist</p>
          <h1>음율</h1>
          <div className="verdict" style={{ margin: '24px 0 28px' }}>
            <div className="verdict-row">
              <span className="vk">현재 단계</span>
              <span>
                세계관 IP 구축력은 뚜렷하나 포지셔닝 미안착. 서브컬처·J팝·한국
                인디에 동시에 걸친 상태.
              </span>
            </div>
            <div className="verdict-row">
              <span className="vk">핵심 리스크</span>
              <span>
                가사 밀도 후퇴 징후. 알고리즘 유입이 팬으로 전환되는 비율이
                낮으면 정체 지속.
              </span>
            </div>
            <div className="verdict-row">
              <span className="vk">다음 수</span>
              <span>
                설명을 걷어내고 선택을 통과하는 정규 3집으로 가사 밀도 회복.
              </span>
            </div>
          </div>
          <p className="dateline">
            데이터: 2026-06 수집·집계 · 기획안 작성: 2026-06
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="section-num">① 앨범 기획</p>
          <h2>정규 3집 《매순간 그냥 그러고 싶었어》</h2>
          <p className="concept-line">
            나에게 정직해지는 선택을 매순간 내려왔다는 것을, 설명하지 않고
            그냥 그러고 싶었다는 말 한마디로 압축하는 앨범.
          </p>
          <p style={{ color: 'var(--ink-soft)' }}>
            음율의 분기점은 가사 밀도입니다. 초기작이 좌절과 지속 사이의
            긴장을 언어로 통과했다면, 최근작에서는 긴장에 대한 관념을 말하는
            징후가 나타났습니다. 이 앨범은 설명을 걷어내고 선택 자체를
            통과하는 구성 — 전작이 질문이었다면, 이번은 답이 아니라
            태도입니다.
          </p>
          <h3>트랙 구성</h3>
          <ol className="track-list">
            {TRACKS.map((t) => (
              <li key={t.no}>
                <span className="no">{t.no}</span>
                <span className="track-title">{t.title}</span>
                <span className="track-desc">{t.desc}</span>
              </li>
            ))}
          </ol>
          <p className="footnote">
            제목이 표기되지 않은 트랙은 서사 단계만 설계된 상태입니다. 수록
            확정 2곡을 축으로, 튀어나감 → 인식 → 후회 → 수용의 흐름을
            따릅니다.
          </p>
        </div>
      </section>

      {/* ── ② 데이터 근거 + 해석 ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-num">② 데이터 근거</p>
          <h2>팬은 음율을 어떻게 부르는가</h2>
          <p className="footnote">
            공식 유튜브 채널 톱레벨 댓글에서 층화 무작위로 추출한 표본
            200건(시드 고정)을 전건 수기 라벨링한 결과입니다. 댓글 작성자는
            능동적 팬 집단으로, 전체 팬층을 대표하지 않습니다. 절차 상세는{' '}
            <Link href="/method/">분석 방법</Link>에 공개되어 있습니다.
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
              <div className="k">무신호</div>
              <div className="v">{T.분포.무신호}건</div>
              <div className="s">표본 200건 중 약 {nosignalPct}%</div>
            </div>
            <div className="stat-box">
              <div className="k">친구형 비중</div>
              <div className="v">생략</div>
              <div className="s">신호 18건 — 비율 해석 없이 개수·인용만</div>
            </div>
          </div>

          <p>
            <span className="tag-obs">관찰</span>
            관계 신호가 18건으로, 다른 네 팀(34~38건) 대비 뚜렷이 적습니다.
            이 간극에 근거해 음율은 비율 해석을 생략하고 개수와 인용만
            제시합니다(<Link href="/method/">분석 방법</Link> 5절).
          </p>
          <p>
            <span className="tag-interp">해석</span>
            관계 발화가 적다는 것 자체가 이 팬덤의 성격입니다. 음율의 팬
            발화는 사람보다 작품과 세계관을 향합니다. 뮤직비디오가
            애니메이션이라 &lsquo;본다&rsquo;의 대상이 사람이 아닌 콘텐츠라는
            매체 특성도 여기에 반영됩니다. 세계관 몰입형 코어 팬이라는 기존
            관찰과 부합하는 신호입니다.
          </p>
          <p>
            <span className="tag-obs">관찰</span>
            유입 경로를 자발적으로 언급한 댓글 8건의 내역: 기타 5 · 콘텐츠
            매개 유입 2 · 알고리즘 1. 언급 수가 매우 적어 개수로만 표기합니다.
          </p>

          <h3>대표 댓글</h3>
          <p className="footnote">
            관계유형별 좋아요 상위 댓글입니다. 음율은 비율 대신 이 인용이 관계
            신호의 실체입니다.
          </p>
          <div className="quote-grid">
            {QUOTES.친구형.map((q) => (
              <div className="quote-card" key={q.text.slice(0, 20)}>
                {q.text}
                <div className="quote-meta">친구형 · 좋아요 {q.like}</div>
              </div>
            ))}
            <div className="quote-card">
              {QUOTES.우상형[0].text}
              <div className="quote-meta">
                우상형 · 좋아요 {QUOTES.우상형[0].like}
              </div>
            </div>
            <div className="quote-card">
              {QUOTES.혼합[0].text}
              <div className="quote-meta">
                혼합 · 좋아요 {QUOTES.혼합[0].like}
              </div>
            </div>
          </div>
          <p>
            <span className="tag-interp">해석</span>
            좋아요 상위 친구형 댓글의 축은 &lsquo;같은 시대를 산다&rsquo;는
            동행의 시간 감각입니다. &lsquo;나만 알고 싶은데 유명해져 줘&rsquo;
            류의 발화는 소유와 응원 사이의 긴장 — 가사 공감형 팬덤이 아티스트의
            성장을 자기 서사로 겹쳐 읽는 방식입니다. 이 팬덤에는 세계관
            콘텐츠보다 가사의 밀도가 먼저입니다. 껍데기가 내용물을 앞서면
            세계관이 빈 무대가 됩니다.
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
            <Link className="btn btn-accent" href="/method/">
              분석 방법 보기
            </Link>
            <a className="btn" href={`mailto:${SITE.email}`}>
              이메일 보내기
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
