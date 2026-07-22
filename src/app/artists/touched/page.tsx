import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import AlbumHeader from '@/components/album/AlbumHeader';
import AlbumSection from '@/components/album/AlbumSection';
import Chip from '@/components/album/Chip';
import SpecMatrix from '@/components/album/SpecMatrix';
import '@/styles/album-system.css';
import {
  ALBUM_COLOR,
  DEEP_LINKS,
  LEDGER,
  LIGHT_COLUMNS,
  LIGHT_ROWS,
  SECTIONS,
  SPEC_COLUMNS,
  SPEC_ROWS,
  STRIP_FULL,
  STRIP_SHORT,
  TRACKS,
} from './data';

export const metadata: Metadata = {
  title: '터치드 — 정규 1집 《역광》',
  description:
    '터치드 정규 1집 가상 기획 《역광》(Contre-jour). 유튜브 톱레벨 댓글 9,763건 전수 유입 분석에 근거한 앨범 설계. 비공식 가상 프로젝트로, 아티스트·소속사와 무관합니다.',
  openGraph: {
    title: '터치드 — 정규 1집 《역광》',
    description:
      '터치드 정규 1집 가상 기획 《역광》(Contre-jour). 유입 전수 분석에 근거한 앨범 설계 — 비공식 가상 프로젝트.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
};

// 앨범 인스턴스 값 주입 — 시스템 CSS는 --album 하나만 받는다.
const ALBUM_VARS = { '--album': ALBUM_COLOR } as CSSProperties;

export default function Touched() {
  return (
    <div className="album-scope" style={ALBUM_VARS}>
      {/* 웹폰트: 이 페이지 전용 추가분 (Noto Serif KR 900 · IBM Plex Mono).
          layout.tsx를 건드리지 않기 위해 페이지에서 로드 (React가 head로 호이스팅) */}
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Serif+KR:wght@600;900&display=swap"
      />

      <AlbumHeader
        sections={SECTIONS}
        deepLinks={DEEP_LINKS}
        stripFull={STRIP_FULL}
        stripShort={STRIP_SHORT}
      />

      {/* ═══ 층1 — 랜딩 (순서 고정) ═══════════════════════════ */}
      <section className="alb-hero">
        <p className="alb-eyebrow">터치드 정규 1집 기획</p>
        <h1 className="alb-title">역광</h1>
        <p className="alb-subtitle">Contre-jour</p>
        <p className="alb-concept">빛을 쫓는 동안엔 어둠을 볼 수 없었다</p>
      </section>

      <div className="alb-l1">
        <div className="alb-verdict">
          <div className="alb-verdict-row">
            <span className="alb-vk">현재 단계</span>
            <span>
              라이브 경쟁력은 확증되었으나(유입 분석) 팬덤 확장이 정체된
              분기점. 첫 정규 앨범은 한 번뿐인 서사적 이벤트.
            </span>
          </div>
          <div className="alb-verdict-row">
            <span className="alb-vk">핵심 리스크</span>
            <span>
              방향성 혼란이 명확한 의도 없이 첫 정규에 담기면, 팀의 한계가
              공식화됨.
            </span>
          </div>
          <div className="alb-verdict-row">
            <span className="alb-vk">제안</span>
            <span>
              팀이 실제로 소유한 어둠을 하나의 선명한 서사로 세운 정규 1집
              설계(《역광》). 이를 통해 음원 유입을 늘리고, 그 유입을 최대
              자산인 라이브로 되돌린다.
            </span>
          </div>
        </div>

        <div className="alb-nums">
          <div className="alb-num">
            <span className="v">9,763건</span>
            <span className="k">공식 채널 톱레벨 댓글 전수 분석</span>
          </div>
          <div className="alb-num">
            <span className="v">14.8% vs 1.3%</span>
            <span className="k">
              공연 유입 언급 — 비교군 대비, 95% CI 비겹침
            </span>
          </div>
          <div className="alb-num">
            <span className="v">12트랙</span>
            <span className="k">선공개 8곡 + 신곡 4곡(가제)</span>
          </div>
        </div>

        <ol className="alb-tracks">
          {TRACKS.map((t) => (
            <li key={t.no}>
              <span className="no">{String(t.no).padStart(2, '0')}</span>
              <span>
                {t.title}
                {t.wip && <span className="alb-wip">가제</span>}
              </span>
            </li>
          ))}
        </ol>

        <p className="alb-update">
          데이터: 2026-06-12 수집 · 유입 판정: 2026-07 · 신곡·공연 발표에
          따라 개정 예정
        </p>
        <a className="alb-diff" href="#order">
          곡별 배치 근거 보기 — ④ 러닝오더와 아크 ↓
        </a>
      </div>

      {/* ═══ 층2 — 8섹션 (순서 고정) ═══════════════════════════ */}

      {/* ① 진단 */}
      <AlbumSection id="diagnosis" no="①" title="진단">
        <ul className="alb-items">
          <li>
            <b>가장 강력한 자산은 라이브.</b>
            <p>
              <Chip kind="obs" />
              공식 유튜브 채널 톱레벨 댓글 9,763건 전수 분석에서, 유입 경로를
              자발적으로 언급한 257건 중 1위 기타(경로 미상) 106건(41.2%) ·
              2위 OST/미디어 46건(17.9%) · 3위 공연/페스티벌 38건(14.8%).
              단, OST/미디어의 대다수가 실제로는 공연 영상(복면가왕 24건,
              GSI 16건, 불후의 명곡 3건).
            </p>
            <p>
              <Chip kind="int" />
              유입 경로를 자발적으로 언급한 팬들 사이에서 퍼포먼스 목격
              계기가 두드러진다. 단독 콘서트 &lsquo;촬영 금지&rsquo; 방침에
              대한 팬덤의 반응이 타 아티스트 대비 두드러진다는 점도 라이브
              경험 중심 가치와 연결됨.
            </p>
          </li>
          <li>
            <b>가장 큰 약점은 스트리밍 지표.</b>
            <p>
              <Chip kind="obs" />
              스포티파이 월간 청취자 87,676명(2026.05 기준)으로 라이브 팬덤
              규모 대비 현저히 낮음.
            </p>
            <p>
              <Chip kind="int" />
              따라서 이번 정규 앨범 음원 유입이 즉각적 성장으로 이어질 수
              있음.
            </p>
          </li>
          <li>
            <b>가사 세계관.</b>
            <p>
              감정을 사물로 치환하되 그 치환을 문장 안에서 해설함. 표현은
              평이·직관적. (증폭되는 갈등 → 눈덩이, 눈물 → 파란 물감) 타인을
              대하는 시선이 자신을 중심으로 이뤄짐.
            </p>
          </li>
          <li>
            <b>정체성 미해결.</b>
            <p>
              &ldquo;터치드의 음악이 무엇인가&rdquo;에 아직 답하지 못함.
              하드록 팬도 팝 팬도 완전히 설득하지 못하는 중간 지점.
              하드록에서 팝적 감수성으로 이동 중이나 지향점이 불분명한 인상.
            </p>
          </li>
          <li>
            <b>성장 모멘텀에 혼조 신호.</b>
            <p>
              <Chip kind="obs" />
              HIGHLIGHT Ⅲ는 올림픽홀을 시야제한석까지 완전 매진, HIGHLIGHT
              Ⅳ는 공연장 규모 확대에도 실관객 감소. 최근 단독 공연(2026.07)은
              매진 미달이나 기존 팬덤 결집은 견조(현장 관찰 — 정량 검증
              아님). 즉, 코어 팬덤 충성도는 유지되나 확장이 정체된 상태.
            </p>
          </li>
          <li>
            <b>발매 준비 중인 앨범은 첫 정규 앨범.</b>
            <p>
              한 번밖에 없는 서사적 이벤트. 지금의 혼란을 명확한 의도 없이
              담으면 팀의 한계를 공식화할 위험.
            </p>
          </li>
        </ul>
      </AlbumSection>

      {/* ② 질문 */}
      <AlbumSection id="question" no="②" title="질문">
        <p className="alb-q">
          정규 1집이 답해야 하는 질문 — &lsquo;무대를 한 번도 본 적 없는
          사람이, 이 앨범만 듣고 터치드의 다음 공연 티켓을 사는가?&rsquo;
        </p>
        <p>
          스트리밍 지표를 개선하고 음원 유입을 늘려 가장 큰 자산인 라이브로
          연결한다.
        </p>
        <p>
          <Chip kind="obs" />
          유튜브 댓글 분석상 터치드의 알고리즘 유입 언급은 27건(10.5%)에
          그침. 동일 방법론으로 전수 분석한 비교군 음율에서는 67건(45%)이
          해당되던 항목.
        </p>
        <p>
          <Chip kind="int" />두 팀의 유입 창이 다르다 — 음율은
          알고리즘(45%), 터치드는 퍼포먼스 목격. 퍼포먼스 유입이 유일한 현
          시점에서, 이 앨범은 새로운 유입 창이 되어야 한다.
        </p>
        <p className="alb-fn">
          비교군은 동일 파이프라인으로 전수 분석이 완료된 유일한 팀(음율)
          1팀이다. 본 비교는 두 팀 간 차이의 확인이며, 씬 일반 대비 주장이
          아니다. 유입 비율은 유입 경로를 자발적으로 언급한 댓글 내
          비중으로, 전체 팬 모집단의 유입 분포에 대한 주장이 아니다.
          판정·감사 절차는 <Link href="/method#inflow">분석 방법</Link>에
          공개되어 있다.
        </p>
      </AlbumSection>

      {/* ③ 컨셉과 근거 */}
      <AlbumSection id="concept" no="③" title="컨셉과 근거">
        <p>
          올해 공연 선공개곡·멘트 기준, 정규 1집이 바라는 주제는{' '}
          <strong>&lsquo;개인의 어둠을 통한 위로&rsquo;</strong>.
        </p>
        <p>
          그러나 터치드가 먼저 해결해야 할 과제: 이 팀은 결핍보다 성취에
          가까운 서사(뚜렷한 개성, 강렬한 퍼포먼스, 짧은 기간의 급격한
          성장)를 걸어온 팀이다. 따라서 좌절·절망 같은 &lsquo;결핍의
          언어&rsquo;를 시도할 때 그 어둠은 소유하지 않은 것을 빌려온 인상을
          준다. 어둠을 노래하려는 팀에게 그 언어가 익숙하지 않다는 것 —
          이것이 첫 번째 문제.
        </p>
        <p>
          <strong>그 답으로 제목 《역광》을 제시한다.</strong> 이중 독해를
          설계에 포함한다:
        </p>
        <ul>
          <li>
            발매 시점 리스너는 사진 용어로서의 역광(실루엣의 미학)을 연상.
          </li>
          <li>
            전 트랙 청취 후에는 다른 의미에 도달 — 눈부신 빛을 쫓던 화자가
            빛을 등지고 나서야 타버린 자신을 발견. 까맣게 보이던
            &lsquo;실루엣&rsquo;은 화자의 화상 자국. 그 어둠에 눈이 적응하며
            타인의 온기를 제대로 바라보게 됨.
          </li>
          <li>
            제목이 단순한 서정성에서 함축적 의미로 바뀌는 재독해의 순간이
            앨범의 마지막 메시지.
          </li>
        </ul>
        <p>
          역광의 어둠은 눈부신 빛에 둘러싸인 사람만이 가질 수 있는 어둠 —
          터치드가 실제로 소유한 어둠이므로 컨셉과 밴드의 실제가 충돌하지
          않는다. 밴드의 지향(더 밝은 곳, 더 큰 무대)을 교정하지 않고
          정렬했다는 점에서 <strong>진정성을 확보</strong>하며 이것이 가장 큰
          이점.
        </p>
        <p>
          다만 이 앨범이 말하려는 것은 &lsquo;눈부신 사람에게도 어두운 면이
          있다&rsquo;가 아니라{' '}
          <strong>&lsquo;빛을 쫓는 동안엔 어둠을 볼 수 없었다&rsquo;</strong>.
          전자는 이미 빛 안에 있는 사람의 이야기, 후자는 빛을 추구하는 모든
          사람의 이야기 — 터치드와 청자 사이의 거리를 좁힌다.
        </p>
        <h3>카탈로그의 오래된 공백을 겨냥</h3>
        <p>
          기존 곡들에서 &lsquo;너&rsquo;는 &lsquo;나&rsquo;가 도움을 건네는
          대상이었던 적이 없다. &lsquo;너&rsquo;는 나를 빛내주는 존재이거나
          나를 구해줄 존재. 시선은 언제나 한 방향.
        </p>
        <div className="alb-quote">
          &ldquo;내게 와서 날 빛내줘&rdquo; — 새벽별 (반딧불이 동계열) ·
          &ldquo;나를 꺼내줘&rdquo; — Save Me · &ldquo;나를 기억해줘&rdquo; —
          Stay by my Side
          <span className="src">카탈로그 시선 방향 분석 — 가사 인용</span>
        </div>
        <p>
          《역광》은 이 공백을 억지 이타주의로 채우지 않는다 — 스포트라이트
          안에 있는 사람은 객석이 보이지 않고, 빛을 등지고 서야 어둠 속
          상대가 보인다. 앨범의 종착은 &ldquo;내가 너를 구하겠다&rdquo;가
          아니라 <strong>&ldquo;이제야 네가 보인다&rdquo;</strong>이며,
          위로는 화자가 주는 것이 아니라 목격당한 상대의 내면에서 발생한다.
        </p>
        <p>
          마지막으로, 이 컨셉은 &lsquo;정체성 미해결&rsquo; 과제(
          <a href="#diagnosis">① 진단</a>)에 대한 답변 방식이기도 하다.
          《역광》은 선언으로 답하지 않는다. 정체성은 앨범이 답할 질문이
          아니라 날카로운 선택을 하고 나면 결과로 남는 것. 명확한 컨셉 아래
          사운드와 발화 선택을 일관되게 좁히면 그 총합이 정체성으로 남는다.
          팬이 시각적 목격으로 태어난다는 유입 분석 결과(
          <a href="#diagnosis">① 진단</a>)와도 정합 — 앨범 자체가 시각적
          사건이어야 하며, 역광은 조명 연출·앨범아트로 직역 가능한 드문
          컨셉이다.
        </p>
      </AlbumSection>

      {/* ④ 러닝오더와 아크 */}
      <AlbumSection id="order" no="④" title="러닝오더와 아크">
        <p>
          《역광》의 러닝오더는 선공개된 기존 8곡 + 새로 제안하는 4곡(타이틀
          2곡 포함), 총 12곡.
        </p>
        <table className="alb-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">트랙</th>
              <th scope="col">기존곡 여부</th>
              <th scope="col">아크</th>
            </tr>
          </thead>
          <tbody>
            {TRACKS.map((t) => (
              <tr key={t.no}>
                <td>{t.no}</td>
                <td>
                  {t.title}
                  {t.wip && <span className="alb-wip">가제</span>}
                </td>
                <td className="alb-td-center">{t.wip ? 'X' : 'O'}</td>
                <td>{t.arc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="alb-fn">
          가제 및 아크 위치는 본 기획의 제안이며, 공개 여부는 2026년 7월
          공연 기준.
        </p>
        <h3>아크 흐름</h3>
        <p>
          화자의 자각 없는 상승(Sunburst)이 어느 순간 하강으로 바뀐다(무중력
          - 미아 - Hide). 무중력은 몽환적·평온, 미아는 가사는 길을 잃은
          심정이지만 경쾌한 멜로디의 모순적 곡 — 하강을 완전히 자각하진
          못하나 암시한다. Sunburst와 낮고 불길한 Hide를 잇는 자연스러운
          전환점.
        </p>
        <p>
          이후 화자는 깊고 어두운 밤을 헤매며(영혼의 밤) 빛을 갈망하다
          시야를 잃는다(Whiteout). 구원을 위해 타자에게 매달리지만 세 번의
          시도(Save Me - Stay by my Side - Alone)는 모두 실패 — 격렬한
          절규가 애원으로 잦아들지만 응답은 없다. 밖에서 구원을 찾던 시선이
          처음으로 자기 자신에게 꺾인다. 화자는 빛을 갈망하다 타버린 자신을
          발견(일광화상)하고 담담한 자백을 털어놓는다. 이후 안전한 곳에서
          안정을 되찾으려 한다(At Home). 앞에서 감정의 조도를 낮춰뒀기에
          일광화상은 담담하지만 잔인한 어조로 풀리고 At Home과의 흐름도
          자연스러워진다. At Home은 외부에만 집중하느라 정작 자신을 돌아보지
          못했던 화자의 첫 자기돌봄 시점.
        </p>
        <p>
          그 방은 아무것도 보이지 않는 어둠. 그러나 화자는 차츰 곁의 타인의
          온기를 느끼고, 어둠 속에서 상대를 왜곡 없이 바라볼 수 있게
          된다(Touched).
        </p>
      </AlbumSection>

      {/* ⑤ 신곡 사양서 — 유일하게 폭 960 허용 */}
      <AlbumSection id="spec" no="⑤" title="신곡 사양서" wide>
        <p>
          신곡 4곡의 사양. 무엇을 만들라는 주문이 아니라{' '}
          <strong>무엇이 오면 반려하는지</strong>까지 명시한 것이 이 기획의
          차별점이다 — 포트폴리오 문서에 기술했다(
          <a href="#not-here">이 사이트에 없는 것</a>).
        </p>
        <SpecMatrix
          columns={SPEC_COLUMNS}
          rows={SPEC_ROWS}
          defaultOpenKey="whiteout"
        />
      </AlbumSection>

      {/* ⑥ 타이틀 전략과 퍼널 */}
      <AlbumSection id="title" no="⑥" title="타이틀 전략과 퍼널">
        <p>
          《역광》은 <strong>더블 타이틀 체제</strong>(Sunburst, Whiteout).
          두 타이틀은 서로 다른 취향을 겨냥한 상품 두 개가 아니라, 하나의
          갈망이 앨범 안에서 겪는 변화의 양 끝점 — 동일 갈망의 무자각/자각
          버전이다. Sunburst에서 암시된 결핍이 Whiteout에서 자각적 폭발로
          터지는 구조. 따라서 헤지가 아니라 서사에 의한 설계다.
        </p>
        <p>
          <strong>타이틀 두 곡에 무게를 싣는 근거는 유입 데이터.</strong>{' '}
          터치드의 알고리즘 유입 언급은 10.5%로 동일 방법론 비교군(음율,
          45%)과 뚜렷이 대조된다. 음원 단독 유입 창구가 적은 팀. 타이틀 두
          곡은 이 닫힌 창을 여는 최전선이며 핵심 사건을 압축 전달해 전체
          아크에 대한 호기심을 만들어야 한다.
        </p>
        <p>
          <Chip kind="obs" />
          <strong>현재 유입 출처 (사전 등록 검증 통과 확증):</strong>{' '}
          터치드는 공연/페스티벌을 유입 계기로 언급하는 비중이 비교군 대비
          뚜렷이 높다 — 14.8% [10.97, 19.64] vs 1.3%(2/149), 95% CI 비겹침,
          놓침 최악 가정에도 강건(<a href="#diagnosis">① 진단</a>). 탐색
          관찰을 더하면 세 개의 유입 창이 존재한다:
        </p>
        <ul>
          <li>현장 공연/페스티벌 (38건)</li>
          <li>
            방송 라이브 (43건 — 복면가왕·GSI·불후, 모두 라이브 퍼포먼스를
            방송으로 내보내는 포맷)
          </li>
          <li>
            콜라보 클립 (아이브 &lsquo;REBEL HEART&rsquo; 단일 영상 10건
            집중 — 영상 하나가 창 하나 몫)
          </li>
        </ul>
        <p>
          <Chip kind="ph" />
          현장 공연 38 + 방송 라이브 43 + 콜라보 클립 10 = 91건 — 유입 언급
          257건의 35.4%(약 3분의 1)가 퍼포먼스 목격 계기(post-hoc 재그룹,
          경로 특정분 중 최대 계기군). 단, 방송 창은 과거 출연의 잔광으로
          신규 출연 없이는 감쇠 예상.
        </p>
        <h3>
          팬은 퍼포먼스를 목격하는 순간에 태어난다 — 선공개 전략 (
          <a href="#not-here">이 사이트에 없는 것</a>)
        </h3>
      </AlbumSection>

      {/* ⑦ 실현 가능성 — 공개판 축약 */}
      <AlbumSection id="feasibility" no="⑦" title="실현 가능성">
        <p>
          가상 앨범 기획의 본질적 한계 — 이 컨셉은 실제로 밴드가 수행할 수
          있는 방향인가. 이를 보완하기 위해 본 분석에서는 공개 인터뷰·기록을
          인용해 실현 가능성을 검증했다.
        </p>
        <table className="alb-table">
          <thead>
            <tr>
              <th scope="col">공개 발언/기록 (출처)</th>
              <th scope="col">대응하는 앨범 사양</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                터치드가 음악을 통해 전하고 싶은 것은 승빈 &ldquo;우울과
                불안일지라도 진심이 전해지면 도움이 된다&rdquo; / 존비킴
                &ldquo;작은 위로나 격려&rdquo; (시어터플러스, 2025. 1. 17)
              </td>
              <td>
                앨범 주제인 &lsquo;개인적 어둠을 진정성 있게 꺼낸 시도를
                통한 위로&rsquo;와 연결
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          이 외에도 멤버들의 공개 발언·기록과 신곡 사양(Sunburst, Whiteout,
          일광화상)의 대응 분석 3건을 추가로 진행했으며,{' '}
          <a href="#not-here">상세 내용은 면접 시 제공한다</a>.
        </p>
        <p>
          이처럼 《역광》의 컨셉은 외부에서 이식된 것이 아니라, 내부에서
          새어나온 단서들을 조합하여 나온 결론이다. 이 앨범의 주제는
          멤버들의 발언과 같은 방향을 가리키고 있다. 《역광》은 단지 그
          의지에 맞는 언어가 설계된 결과물이다.
        </p>
      </AlbumSection>

      {/* ⑧ 무대·비주얼 번역 */}
      <AlbumSection id="stage" no="⑧" title="무대·비주얼 번역">
        <p>
          <Chip kind="ph" />
          터치드는 유입 언급의 약 3분의 1(91건/257건)이 라이브 퍼포먼스 목격
          유입이다(post-hoc 재그룹).
        </p>
        <p>
          <Chip kind="int" />
          《역광》은 무대 조명으로 시각적 직역이 가능한 앨범이라는 독보적
          이점을 가진다 — 스포트라이트 연출이 앨범 아크의 흐름을 그대로
          표현한다.
        </p>
        <SpecMatrix
          columns={LIGHT_COLUMNS}
          rows={LIGHT_ROWS}
          defaultOpenKey="sunburst"
        />
        <div className="alb-arcstrip">
          <div className="cell">
            <span className="lg">순광</span>
            <span className="nm">Sunburst</span>
          </div>
          <div className="cell">
            <span className="lg">과광</span>
            <span className="nm">Whiteout</span>
          </div>
          <div className="cell">
            <span className="lg">역광</span>
            <span className="nm">일광화상 · Touched</span>
          </div>
        </div>
        <p>
          실루엣 미학에서 역광은 럭셔리 사진의 문법이기도 하므로 팬덤이
          선망하는 세련된 이미지 자산과 충돌하지 않는다. 다만 모든 곡에서
          역광을 고집하면 멤버 비주얼이 전혀 보이지 않을 수 있고, 이는 신규
          유입 저하·기존 팬 충성도 하락으로 손실이 더 클 수 있는 전략 —
          따라서 서사적으로 반드시 필요한 곡에서만 역광을
          채택한다(일광화상, Touched).
        </p>
        <p>
          앨범 제목 표기는 &lsquo;역광&rsquo;을 의미하는 사진 기법 용어{' '}
          <strong>&lsquo;Contre-jour&rsquo;</strong> 채택. 불어 표기는
          영문·한자 표기로 발매된 다른 앨범과의 차별점을 주며 터치드의
          명품과도 같은 고급스러운 이미지를 반영한다.
        </p>
      </AlbumSection>

      {/* ═══ 층3 — 판단의 기록 + 이 사이트에 없는 것 ═══════════ */}
      <section className="alb-l3" id="ledger">
        <div className="alb-l3-inner">
          <p className="lbl">판단의 기록</p>
          <h2>검토 후 기각한 방향들</h2>
          <ul className="alb-ledger">
            {LEDGER.map((item) => (
              <li key={item.name}>
                <s>{item.name}</s>
                {item.badge && (
                  <span className="alb-rebadge">{item.badge}</span>
                )}
                {item.link && (
                  <Link href={item.link.href}>{item.link.label} →</Link>
                )}
                <span className="why" />
              </li>
            ))}
          </ul>

          <div className="alb-none" id="not-here">
            <p className="lbl">공개 범위</p>
            <h2>이 사이트에 없는 것</h2>
            <ul>
              <li>
                <b>실행 설계 문서</b>
                <span>
                  타이틀 공개 일정(주차 단위), 세션 영상 제작 사양, 프로모션
                  시각 연출안
                </span>
              </li>
              <li>
                <b>실현 가능성 분석 전체본</b>
                <span>
                  멤버 공개 발언·기록과 앨범 사양의 대응 분석 (사이트
                  공개분은 축약판)
                </span>
              </li>
              <li>
                <b>유입 분석 원자료</b>
                <span>
                  판정 로그, 감사 데이터, 재현성 묶음 (
                  <Link href="/method#inflow">방법론 페이지</Link>에 절차는
                  공개됨)
                </span>
              </li>
              <li>
                <b>신곡 데모 평가 기준의 적용 사례</b>
                <span>반려 기준을 실제 판정에 쓰는 프로세스</span>
              </li>
            </ul>
            <p className="closing">위 자료는 채용 협의 단계에서 공유합니다.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
