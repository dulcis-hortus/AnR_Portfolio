import type { Metadata } from 'next';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: '분석 방법',
  description:
    '수집·표본 설계·라벨링 기준·AI 검증 결과까지 — 팬 댓글 분석의 절차와 한계 전면 공개.',
  openGraph: {
    title: '분석 방법 — 정지영',
    description:
      '수집·표본 설계·라벨링 기준·AI 검증 결과까지 — 팬 댓글 분석의 절차와 한계 전면 공개.',
  },
};

const FLOW = [
  { no: '①', name: '수집', desc: '공식 유튜브 채널의 최상위 댓글을 시간순으로 빠짐없이 수집 (영상 623개)', out: '40,856건', pivot: false },
  { no: '②', name: '제외', desc: '타인 퍼포머 영상·텍스트 결측·타임스탬프 댓글을 걸러 분석 모집단 확정 (제외 건수 기록)', out: '38,956건', pivot: false },
  { no: '③', name: '표본 추출', desc: '팀당 200건씩 영상별 비례 무작위 추출, 난수 시드 고정으로 재현 가능', out: '1,000건', pivot: false },
  { no: '④', name: '라벨링 (사람)', desc: '관계유형·유입경로를 전량 직접 분류 — 원래 AI의 자리였으나 검증 미달로 전환', out: '1,000건 전건', pivot: true },
  { no: '⑤', name: '집계 (Python)', desc: '같은 입력이면 항상 같은 출력이 나오는 결정적 계산. 95% 신뢰구간 산출', out: '사이트용 수치', pivot: false },
  { no: '⑥', name: '문서화', desc: '전 과정을 재현 가능하게 기록 — 이 페이지', out: '/method', pivot: false },
];

const RESULTS = [
  { team: '신인류', n: 200, f: 24, w: 9, ratio: '73% (56–85%)', verdict: '친구형 우세 (통계적으로 확인)' },
  { team: '데이먼스이어', n: 200, f: 21, w: 9, ratio: '70% (52–83%)', verdict: '친구형 우세 (통계적으로 확인)' },
  { team: '터치드', n: 200, f: 17, w: 14, ratio: '55% (38–71%)', verdict: '균형 — 방향 단정 불가' },
  { team: '최유리', n: 200, f: 17, w: 18, ratio: '49% (33–64%)', verdict: '균형 — 방향 단정 불가' },
  { team: '음율', n: 200, f: 7, w: 9, ratio: '해석 생략', verdict: '신호 18건, 개수·인용만' },
];

export default function Method() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">Method</p>
          <h1>분석 방법</h1>
          <p style={{ color: 'var(--ink-soft)' }}>
            한국 인디 5팀(터치드·음율·신인류·데이먼스이어·최유리)의 유튜브
            공식 채널 댓글을 수집·분석한 방법입니다. 각 절은 요약을 먼저 두고,
            방법과 근거를 &lsquo;더보기&rsquo;에 담았습니다.
          </p>
          <p className="hero-story">
            원칙 세 가지 — 추측 없이 실제 데이터만. 관찰과 해석의 구분. 표본
            한계의 공개.
          </p>
        </div>
      </section>

      {/* 무엇을 분석했나 */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2>무엇을 분석했나</h2>
          <p>
            팬이 아티스트에게 남긴 댓글이 <strong>어떤 관계의 언어</strong>인지를
            봤습니다. 크게 두 가지입니다. 아티스트를 친구처럼 같은 눈높이로
            대하는 <strong>친구형</strong>(&ldquo;밥은 먹고 다니지&rdquo;,
            &ldquo;같이 오래 가자&rdquo;), 그리고 동경·숭배의 거리를 두는{' '}
            <strong>우상형</strong>(&ldquo;범접할 수 없다&rdquo;, &ldquo;평생
            따라갈게&rdquo;). 이 비율이 팀마다 다르며, 그 차이는 공연·굿즈·음악
            방향을 정하는 근거가 됩니다.
          </p>
          <p>
            중요한 전제: 대부분의 댓글은 작품 자체에 대한
            반응(&ldquo;노래 좋다&rdquo;, &ldquo;소름&rdquo;)이거나 감상이라,
            관계의 성격을 담지 않습니다. 이런 댓글은 &lsquo;무신호&rsquo;로
            따로 셉니다. 무신호가 많다는 것은 실패가 아니라, &lsquo;이 팬덤은
            사람보다 음악으로 묶여 있다&rsquo;는 하나의 발견입니다.
          </p>
        </div>
      </section>

      {/* 파이프라인 도식 */}
      <section className="section">
        <div className="container">
          <h2>파이프라인 한눈에 보기</h2>
          <p style={{ color: 'var(--ink-soft)' }}>
            <strong>수집은 전부, 분석은 표본.</strong> 5팀 40,856건을 모두
            모으되, 그중 무작위 1,000건만 사람이 분류하고, 그 비율로 팀 전체
            경향을 추정합니다.
          </p>
          <div className="flow">
            {FLOW.map((s) => (
              <div
                className={s.pivot ? 'flow-step fs-pivot' : 'flow-step'}
                key={s.no}
              >
                <span className="fs-no">{s.no}</span>
                <span className="fs-name">{s.name}</span>
                <span className="fs-desc">{s.desc}</span>
                <span className="fs-out">{s.out}</span>
              </div>
            ))}
          </div>
          <p className="footnote">
            도구: Python (YouTube API 수집 → SQLite 저장 → 층화 표본 추출 →
            집계·신뢰구간 산출) + 사람 분류 1,000건 + AI 검증(3개 모델, 사전
            등록 기준).
          </p>
        </div>
      </section>

      {/* 1. 수집 */}
      <section className="section">
        <div className="container">
          <h2>1. 데이터를 어떻게 모았나</h2>
          <p>
            5팀의 공식 유튜브 채널에 달린 <strong>최상위 댓글 전체</strong>를
            빠짐없이 수집했습니다. 총 623개 영상에서 40,856개 댓글을
            모았습니다(2026년 6월 수집).
          </p>
          <details className="more">
            <summary>더보기 — 수집 범위와 한계</summary>
            <div className="more-body">
              <p>
                <strong>전수 수집:</strong> 영상당 댓글을 일부만 뽑지 않고
                페이지 끝까지 모두 수집. 좋아요순 같은 편향된 정렬이 아니라
                시간순 단일 패스로, 절단 없이 확보(모든 영상이 &lsquo;완전
                수집&rsquo; 상태로 검증됨).
              </p>
              <p>
                <strong>답글 제외:</strong> 영상에 직접 단 댓글만 대상. 답글은
                다른 팬을 향하는 경우가 많아 &lsquo;팬→아티스트&rsquo; 분석에서
                제외(모집단 정의).
              </p>
              <p>
                <strong>공식 채널 한정:</strong> 모집단은 &lsquo;공식 채널 내
                담론&rsquo;. 외부 채널(라이브 클립·커버 등)의 팬 담론은
                포함되지 않음. 특히 데이먼스이어는 공식 채널 영상이 11개로
                적어, 이 한계가 크게 작용함.
              </p>
              <p>
                <strong>타인 퍼포머 영상 제외:</strong> 최유리 채널의 &lsquo;타
                가수 커버&rsquo; 시리즈 13개(댓글 392개)는 댓글이 최유리가 아닌
                커버 가수를 향하므로 분석에서 제외(건수 기록).
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* 2. 표본 */}
      <section className="section">
        <div className="container">
          <h2>2. 왜 전부가 아니라 표본을 분류했나</h2>
          <p>
            4만여 개 전부를 사람이 읽고 분류할 수는 없어, 팀마다{' '}
            <strong>200개씩 무작위로 뽑아 총 1,000개</strong>를 분석 표본으로
            삼았습니다. 무작위이므로 팀 전체의 경향을 대표합니다.
          </p>
          <details className="more">
            <summary>더보기 — 표본 설계와 크기 근거</summary>
            <div className="more-body">
              <p>
                <strong>층화 무작위 추출:</strong> 영상별로 비례 배분해 특정
                영상에 쏠리지 않게 뽑음. 난수 시드를 고정해 누구나 같은 표본을
                재현할 수 있음.
              </p>
              <p>
                <strong>200이라는 크기:</strong> &lsquo;분류 댓글 N건 중 친구형
                n건&rsquo;이라는 개수·방향 수준의 주장에 맞춘 크기. 300으로
                늘려도 균형에 가까운 팀은 균형으로 남으므로(신뢰구간 개선 폭이
                작음), 노동량 대비 200이 적정선.
              </p>
              <p>
                <strong>분석 단위 = 댓글 1건:</strong> 작성자별로 묶지 않음.
                어떤 개인도 한 팀 댓글의 2%를 넘지 않고, 다작 작성자도 여러
                영상에 분산돼 있어 분포를 왜곡하지 않음을 사전 확인.
              </p>
              <p>
                <strong>분모 관리:</strong> 수집 40,856건에서 타인
                퍼포머·수집 결측·타임스탬프 댓글을 제외한 38,956건이 분석 대상
                모집단이며, 표본은 여기서 추출. 제외 건수는 모두 기록.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* 3. 분류 기준 */}
      <section className="section">
        <div className="container">
          <h2>3. 분류 기준을 어떻게 세웠나</h2>
          <p>
            친구형·우상형·혼합(둘 다 뚜렷)·무신호의 네 가지로 분류했습니다.
            판단이 사람마다 흔들리지 않도록, 각 유형의{' '}
            <strong>구체적 신호와 반례</strong>를 문서로 확정했습니다.
          </p>
          <details className="more">
            <summary>더보기 — 기준의 진화: 검증으로 다듬은 과정</summary>
            <div className="more-body">
              <p>
                초기 기준(v1.1)은 &lsquo;분위기&rsquo;에 가까워 적용이
                흔들렸습니다. AI 검증(4절)에서 오류를 역추적해, 기준을 명시적
                신호로 다시 썼습니다(v1.2). 핵심 규칙:
              </p>
              <p>
                <strong>작품 호평 단독은 무신호:</strong> &ldquo;노래
                잘한다&rdquo;, &ldquo;소름&rdquo;처럼 대상이 사람이 아니라
                결과물이면, 아무리 열렬해도 관계 신호가 아님.
              </p>
              <p>
                <strong>음악이 준 효과는 무신호:</strong>{' '}
                &ldquo;위로받았다&rdquo;, &ldquo;그 시절로 돌아간다&rdquo;는
                음악 경험이지 관계 신호가 아님.
              </p>
              <p>
                <strong>팬덤 관습 표현 단독은 무신호:</strong> 이름
                호명·반말·하트·애칭만으로는 친구형이 아님(입문자도 쓰는 관습).
              </p>
              <p>
                이 과정에서 사람이 만든 정답 데이터(골드셋 150건)도{' '}
                <strong>78건을 재검토·수정</strong>하고, 그 내역과 사유를
                공개했습니다. 정답 데이터조차 무오류가 아니라 검교정 대상으로
                다뤘습니다.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* 4. AI 검증 */}
      <section className="section">
        <div className="container">
          <h2>4. AI에게 맡기려다, 검증에서 탈락시킨 이유</h2>
          <p>
            처음에는 1,000건을 AI로 분류하려 했습니다. 그러나{' '}
            <strong>
              먼저 기준을 정하고(사전 등록) AI가 그 기준을 충분히 지키는지 검증
            </strong>
            한 뒤, 미달이면 쓰지 않기로 정했습니다. 결과는 미달이었고, 예정대로{' '}
            <strong>전량 직접 분류</strong>로 전환했습니다.
          </p>
          <details className="more">
            <summary>
              더보기 — 검증 절차와 결과 (사전 등록 → 3개 모델 → 불채택)
            </summary>
            <div className="more-body">
              <p>
                <strong>사전 등록 기준:</strong> 사람이 만든 정답 150건과
                대조해, 전체 일치율 85% 그리고 친구형·우상형 각 80% 이상일 때만
                채택 — 이 수치를 결과 보기 전에 고정.
              </p>
              <p>
                <strong>3개 모델 검증:</strong> 서로 다른 3개 AI 모델로 측정.
                기준 명시화 후 전체 일치율은 87~92%까지 올랐으나, 정작 표기할
                친구형/우상형 항목이 60~80%로 게이트를 넘지 못함(한 모델은
                친구형 73.3%로 1건 차이 미달).
              </p>
              <p>
                <strong>불채택 집행:</strong> 결과가 아깝다는 이유로 기준을
                낮추지 않음. &lsquo;92%면 채택&rsquo;의 대칭인 &lsquo;미달이면
                탈락&rsquo;을 그대로 적용. 전체 일치율이 높아 보이는 것은
                무신호(다수)가 만든 착시이며, 핵심 항목의 신뢰도가 기준
                미달이면 게시할 수 없다고 판단.
              </p>
            </div>
          </details>
          <p className="concept-line" style={{ fontSize: 16 }}>
            이 절차 자체가 결과물입니다 — &lsquo;AI를 썼다&rsquo;가 아니라
            &lsquo;AI를 검증 가능한 기준으로 시험해, 미달이라 쓰지 않기로
            판단했다&rsquo;는 것.
          </p>
        </div>
      </section>

      {/* 5. 결과 */}
      <section className="section">
        <div className="container">
          <h2>5. 결과</h2>
          <p>
            표본 1,000건을 직접 분류한 결과입니다. 비율에는 95% 신뢰구간을 함께
            표기해, &lsquo;말할 수 있는 것&rsquo;과 &lsquo;없는 것&rsquo;을
            구분했습니다.
          </p>
          <div className="table-scroll">
          <table className="method-table">
            <thead>
              <tr>
                <th>아티스트</th>
                <th>표본</th>
                <th>친구형</th>
                <th>우상형</th>
                <th>친구형 비율</th>
                <th>해석</th>
              </tr>
            </thead>
            <tbody>
              {RESULTS.map((r) => (
                <tr key={r.team}>
                  <td>{r.team}</td>
                  <td>{r.n}</td>
                  <td>{r.f}</td>
                  <td>{r.w}</td>
                  <td>{r.ratio}</td>
                  <td>{r.verdict}</td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>
          <p className="footnote">
            ※ 비율은 관계 신호를 드러낸 댓글 안에서 친구형이 차지하는
            비중(친구형÷[친구형+우상형])이며, 팀 전체 팬의 비율이 아닙니다.
            신뢰구간이 50%를 걸치는 팀은 방향을 단정하지 않습니다. 댓글
            작성자는 능동적 팬 집단으로, 전체 팬층을 대표하지 않습니다.
          </p>
          <details className="more">
            <summary>더보기 — 결과 해석과 통계적 절제</summary>
            <div className="more-body">
              <p>
                <strong>확인된 차이:</strong> 신인류(73%)·데이먼스이어(70%)는
                신뢰구간 하한이 50%를 넘어, 친구형 우세를 통계적으로 주장할 수
                있음. 두 팀은 팬이 아티스트를 친구처럼 대하는 관계가 뚜렷함.
              </p>
              <p>
                <strong>단정하지 않은 것:</strong> 터치드·최유리는 신뢰구간이
                50%를 걸쳐 방향을 단정하지 않음(균형). 표본을 &lsquo;원하는
                결과가 나올 때까지&rsquo; 늘리는 방식(optional stopping)은
                통계적으로 부당하므로 취하지 않음.
              </p>
              <p>
                <strong>음율:</strong> 관계 신호가 18건으로 다른
                팀(34~38건)의 절반 수준이라, 비율 해석을 생략하고 개수와 대표
                댓글만 제시(데이터 간극에 근거한 판단).
              </p>
              <p>
                <strong>무신호의 의미:</strong> 신인류는 친구형이 뚜렷하면서
                동시에 무신호(작품·감상)도 많음 — &lsquo;노래로 들어와 밴드를
                친구처럼 대하는&rsquo; 팬덤. 무신호 구성 자체가 팬덤 성격의
                단서.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* 6. 재현성 */}
      <section className="section">
        <div className="container">
          <h2>6. 재현성과 정직성</h2>
          <p>
            <strong>고정 시드</strong> — 표본 추출 난수를 고정해, 동일 조건에서
            같은 표본이 재현됩니다(체크섬으로 검증).{' '}
            <strong>전 과정 기록</strong> — 수집·제외·분류 기준(버전
            관리)·정정 내역을 모두 문서화하고, 분모 추적을 위해 제외 건수를
            단계별로 남겼습니다. <strong>한계의 명시</strong> — 공식 채널 한정,
            표본 기반 개수·방향 수준의 주장, 균형 팀의 방향 미확정을 숨기지
            않고 표기합니다.
          </p>
          <details className="more">
            <summary>더보기 — 이전 분석(2,463건)과의 관계</summary>
            <div className="more-body">
              <p>
                2026년 초의 이전 분석은 3개 팀, 댓글 2,463건 기준이었습니다.
                이후 수집 방식(표적 영상 일부 수집 → 공식 채널 전수)과 분류
                기준(버전 관리로 개정)을 재설계해, 지금의 5팀 · 수집 40,856건 ·
                모집단 38,956건 · 표본 1,000건 체계로 재분석했습니다. 두 분석은
                수집 범위와 기준 버전이 달라{' '}
                <strong>수치를 직접 비교할 수 없습니다.</strong> 이 사이트의
                모든 수치는 신규 분석 기준입니다.
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <p style={{ color: 'var(--ink-soft)' }}>
            이 방법으로 만든 분석이 실제 기획으로 어떻게 이어지는지는 아티스트
            페이지에서 볼 수 있습니다.
          </p>
          <p style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a className="btn btn-accent" href="/artists/sinillyu/">
              신인류 — EP 기획 보기
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
