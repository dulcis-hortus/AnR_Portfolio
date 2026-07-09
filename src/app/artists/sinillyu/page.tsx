import type { Metadata } from 'next';
import Link from 'next/link';
import report from '@/data/aggregate_report.json';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: '신인류 — EP 《구름을 빌려줘》 기획',
  description:
    '유튜브 댓글 표본 200건 분석과 공연 현장 관찰에 근거한 신인류 다음 앨범 기획.',
  openGraph: {
    title: '신인류 — EP 《구름을 빌려줘》 기획',
    description:
      '유튜브 댓글 표본 200건 분석과 공연 현장 관찰에 근거한 신인류 다음 앨범 기획.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
};

const T = report['팀별']['신인류'];
const R = T.친구형_비율;
const QUOTES = report['대표댓글']['신인류'];

const TRACKS: {
  no: string;
  title: string;
  desc: string;
  badge?: string;
}[] = [
  { no: '01', title: '늦음', desc: '구름이 필요했던 순간을 너무 늦게 알아차린 것.' },
  { no: '02', title: '변해버림', desc: '내가 가졌던 구름이 달라져 있는 것. 단지 시간이 흘러 자연스럽게 변한 것일 뿐.' },
  { no: '03', title: '전달되지 않음', desc: '다른 이에게 구름을 빌려달라고 했는데 닿지 않은 것.' },
  { no: '04', title: '잊혀짐', desc: '전달되지 않은 것이 흩어지는 것.' },
  { no: '05', title: '반복', badge: '타이틀', desc: '그런데 또 하는 것. 구름을 또 빌려달라고 하는 것.' },
];

// 매진 범례(결정로그 §3): ● 매진 공지 / ○ 정보 없음
const GIGS = [
  { date: '2024.06.30', name: '이상고온', venue: '라이브하우스', size: '미상', sold: '○', note: '현 3인조 체제 첫 단독' },
  { date: '2024.08.24', name: '푸른 열대 (서울)', venue: '예스24 원더로크홀', size: '약 300석', sold: '○', note: '' },
  { date: '2024.08.25', name: '푸른 열대 (부산)', venue: 'KT&G 상상마당 부산', size: '약 300석', sold: '○', note: '스탠딩 100분' },
  { date: '2025.07.19~20', name: '별친구 신인류: 빛의 차고에서 온 편지들', venue: '라이브하우스', size: '약 450석', sold: '●', note: '정규 1집 콘서트' },
];

function pct(v: number) {
  return Math.round(v * 100);
}

export default function Sinillyu() {
  const lo = pct(R.CI95[0]);
  const hi = pct(R.CI95[1]);
  const pt = pct(R.점추정);
  const nosignalPct = Math.round((T.분포.무신호 / T.표본) * 100);

  return (
    <>
      {/* ── ① 앨범 기획: 결론 먼저 ─────────────────────────── */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Artist</p>
          <h1>신인류</h1>
          <div className="verdict" style={{ margin: '24px 0 28px' }}>
            <div className="verdict-row">
              <span className="vk">현재 단계</span>
              <span>
                세 팀 중 가장 단단한 정체성. 정규 1집 콘서트 전석 매진,
                한국대중음악상 최우수 얼터너티브 록 음반 수상(2026) — 확장
                국면 진입.
              </span>
            </div>
            <div className="verdict-row">
              <span className="vk">핵심 리스크</span>
              <span>
                음원과 라이브의 괴리, OST 이후 새 유입 채널 부재.
              </span>
            </div>
            <div className="verdict-row">
              <span className="vk">다음 수</span>
              <span>
                라이브를 음원의 재현이 아닌 독립 버전으로 재설계하는 EP.
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
          <h2>EP 《구름을 빌려줘》</h2>
          <p className="concept-line">
            연대로 닿지 못하고 자신에게 되돌아오는 경험들을, 수치나 부족함이
            아니라 원래 잡히지 않는 것들로 바라보는 앨범.
          </p>
          <p style={{ color: 'var(--ink-soft)' }}>
            여기서 &lsquo;구름&rsquo;은 개인의 심리적 자원을 뜻합니다. 정규
            1집에서 도움 요청은 연대로 채워졌지만, 이 EP는 그 요청이 실패한
            상황에서 출발합니다. &lsquo;상처는 너의 매력&rsquo;이라고 전환해온
            신인류의 프레임을 거쳐, 실패는 자연스러운 수용으로 이어집니다.
          </p>
          <h3>트랙 구성</h3>
          <ol className="track-list">
            {TRACKS.map((t) => (
              <li key={t.no}>
                <span className="no">{t.no}</span>
                <span className="track-title">
                  {t.title}
                  {t.badge && <span className="track-badge">{t.badge}</span>}
                </span>
                <span className="track-desc">{t.desc}</span>
              </li>
            ))}
          </ol>
          <p>
            타이틀은 5번 &lsquo;반복&rsquo;입니다. 이 앨범은 도움 요청의
            실패를 수치가 아닌 자연스러운 수용으로 잇는 이야기인데, 그 수용을
            증명하는 행위가 &lsquo;그럼에도 또 빌려달라고 하는 것&rsquo;입니다.
            앨범의 결론이 담긴 곡이 앨범의 얼굴이 되는 구조로, 곡 제목을 앨범
            제목과 겹쳐 읽어도 무방합니다.
          </p>
          <h3>왜 정규 2집이 아니라 EP인가</h3>
          <p>
            신인류의 실질적 과제는 스튜디오에서 정교하게 설계된 사운드를
            라이브에서 어떻게 전달하느냐입니다. EP 형식으로 라이브 재설계를
            먼저 실험하고, 그 결과를 바탕으로 정규 2집을 설계하는 순서가
            리스크가 낮습니다. 이 판단의 근거는 아래 ②데이터와 ③현장 관찰에
            있습니다.
          </p>
        </div>
      </section>

      {/* ── ② 데이터 근거 + 해석 ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-num">② 데이터 근거</p>
          <h2>팬은 신인류를 어떻게 부르는가</h2>
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
            친구형 24건 대 우상형 9건. 95% 신뢰구간 하한({lo}%)이 50%를 넘어,
            관계 신호를 드러낸 댓글 안에서는 친구형이 우세하다는 방향이
            통계적으로 확인됩니다.
          </p>
          <p>
            <span className="tag-interp">해석</span>
            신인류의 팬은 밴드를 동경의 대상이 아니라 같은 평면의 존재 —
            함께 시간을 보내는 친구처럼 대합니다. 동시에 표본의 약{' '}
            {nosignalPct}%가 관계 신호 없이 음악 자체에 반응합니다. 이는
            실패가 아니라, 팬덤이 사람보다 음악으로 묶여 있다는 지표로
            읽힙니다. &ldquo;노래로 들어와, 밴드를 친구처럼 대하는&rdquo;
            팬덤입니다.
          </p>
          <p>
            <span className="tag-obs">관찰</span>
            유입 경로를 자발적으로 언급한 댓글 18건의 내역: 기타 7 · 알고리즘
            4 · OST/미디어 3 · 콘텐츠 매개 2 · 공연/페스티벌 1 · 지인 추천 1.
            언급 수가 적어 분포가 아닌 개수로만 표기합니다.
          </p>

          <h3>대표 댓글</h3>
          <p className="footnote">
            관계유형별 좋아요 상위 댓글입니다. 위 분포 추정과는 별도 표본으로,
            정성 참고용입니다.
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
          </div>
          <p>
            <span className="tag-interp">해석</span>
            좋아요 상위 친구형 댓글의 공통 축은 &lsquo;위로&rsquo;와
            &lsquo;동행&rsquo;입니다. 감탄보다 감사가 많고, 삶의 순간들에
            신인류를 겹쳐 말합니다. 팬과 밴드 사이가 감정적 의탁으로 연결된
            구조 — 이것이 EP가 &lsquo;심리적 자원&rsquo;을 소재로 삼는
            이유입니다.
          </p>
        </div>
      </section>

      {/* ── ③ 현장 검증 ────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-num">③ 현장 검증</p>
          <h2>데이터가 닿지 못하는 것</h2>
          <p>
            신인류의 알려진 리스크는 음원과 라이브의 괴리였습니다. 스튜디오
            사운드가 라이브에서 재현되지 못한다면 확장 국면의 천장이 됩니다.
            이 가설을 공연장에서 직접 확인했습니다.
          </p>
          <p>
            <span className="tag-obs">관찰</span>
            첫 등장부터 호응이 터지지는 않았지만, 곡이 진행될수록 관객이
            음악에 설득되는 흐름이 뚜렷했습니다. 보컬과 무대 장악력은
            라이브에서도 탄탄했습니다.
          </p>
          <p>
            <span className="tag-interp">해석</span>
            음원 사운드 재현 문제는 라이브 역량 부족이 아니라 스튜디오 믹싱의
            높은 완성도에서 비롯된 것입니다. 따라서 처방은 &lsquo;라이브
            연습&rsquo;이 아니라 &lsquo;라이브를 음원의 재현이 아닌 독립된
            버전으로 재설계&rsquo;하는 것 — 데이터만으로는 닿을 수 없는
            결론이었습니다. EP 형식 제안은 이 관찰에서 출발합니다.
          </p>

          <h3>공연 이력 (현 3인조 체제)</h3>
          <div className="table-scroll">
          <table className="gig-table">
            <thead>
              <tr>
                <th>날짜</th>
                <th>공연명</th>
                <th>장소</th>
                <th>규모(추정)</th>
                <th>매진</th>
              </tr>
            </thead>
            <tbody>
              {GIGS.map((g) => (
                <tr key={g.date}>
                  <td>{g.date}</td>
                  <td>
                    {g.name}
                    {g.note ? (
                      <span className="footnote"> — {g.note}</span>
                    ) : null}
                  </td>
                  <td>{g.venue}</td>
                  <td>{g.size}</td>
                  <td>{g.sold}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <p className="footnote">
            ● 매진 공지 확인 / ○ 정보 없음. 규모는 공개 정보 기반 추정치.
          </p>
          <p>
            <span className="tag-obs">관찰</span>
            현 체제 기준 공연 규모가 300석에서 450석으로 커졌고, 정규 1집
            콘서트는 전석 매진이 공지되었습니다.
          </p>
          <p>
            2026년 한국대중음악상 최우수 얼터너티브 록 음반을 수상하며 평단의
            언어도 확보했습니다. 팬덤 밀도(전석 매진)와 비평적 인정이 같은
            시기에 겹친 상태 — 확장 국면에 진입할 조건은 갖춰졌습니다.
          </p>
          <p>
            <span className="tag-obs">관찰</span>
            Spotify 월간 청취자는 156,196명입니다(2026-06 기준). 450석 매진과
            견주면, 스트리밍에서 도달한 리스너의 극히 일부만이 공연장에
            도착해 있습니다.
          </p>
          <p>
            <span className="tag-interp">해석</span>
            이 간극은 약점이 아니라 여백입니다. 아직 라이브로 전환되지 않은
            잠재 관객이 그만큼 크다는 뜻이고, 전환을 가로막는 병목이 위에서
            확인한 음원–라이브 괴리입니다. 라이브를 독립 버전으로 재설계하는
            EP가 이 병목을 여는 열쇠라는 것이 본 기획의 핵심 가설입니다.
          </p>
          <p>
            신인류는 갈 곳이 명확한 팀입니다. 다만 그 길을 걸어갈 몸이 아직
            다 따라오지 못했습니다. A&amp;R로서의 첫 개입은 거창한 것이
            아니라 라이브 공연 모니터링 — 무대 위 퍼포먼스와 관객 반응을
            회차별로 관찰해, 라이브 재설계의 근거를 데이터로 쌓는 일입니다.
            항목 ③은 그 첫 번째 기록입니다.
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
