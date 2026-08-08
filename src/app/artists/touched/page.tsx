import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import AlbumHeader from '@/components/album/AlbumHeader';
import AlbumSection from '@/components/album/AlbumSection';
import Chip from '@/components/album/Chip';
import SpecMatrix from '@/components/album/SpecMatrix';
import '@/styles/album-system.css';
import { NOINDEX, OG_IMAGE } from '@/data/site';
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
    images: OG_IMAGE,
  },
  robots: NOINDEX,
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
        <p className="alb-eyebrow">터치드 정규 1집 가상 기획</p>
        <h1 className="alb-title">역광</h1>
        <p className="alb-subtitle">Contre-jour</p>
      </section>

      <div className="alb-l1">
        <div className="alb-verdict">
          <div className="alb-verdict-row">
            <span className="alb-vk">현재 단계</span>
            <span>
              라이브에서 팬이 시작되는 팀 — 유입 분석으로 확인된 가장 확실한
              자산.
            </span>
          </div>
          <div className="alb-verdict-row">
            <span className="alb-vk">핵심 질문</span>
            <span>
              무대를 한 번도 본 적 없는 사람이, 이 앨범만 듣고 다음 공연의
              티켓을 사게 할 수 있는가.
            </span>
          </div>
          <div className="alb-verdict-row">
            <span className="alb-vk">제안</span>
            <span>
              밴드의 지향을 교정하지 않고 그대로 정렬한 정규 1집
              설계(《역광》). 음원을 통해 새 유입을 만들고, 그 유입을 최대
              자산인 라이브로 되돌린다.
            </span>
          </div>
        </div>

        <div className="alb-nums">
          <div className="alb-num">
            <span className="v">9,763건</span>
            <span className="k">공식 유튜브 채널 톱레벨 댓글 전수 분석</span>
          </div>
          <div className="alb-num">
            <span className="v">31.5%</span>
            <span className="k">
              공연 목격 유입 — 경로가 식별된 유입 중 최대 (재분류 후)
            </span>
          </div>
          <div className="alb-num">
            <span className="v">신곡 4곡</span>
            <span className="k">사양서까지 설계 · 미발매 8곡 포함 12트랙</span>
          </div>
        </div>

        <h3
          style={{
            fontFamily: 'var(--display)',
            fontWeight: 600,
            fontSize: 16.5,
            letterSpacing: '-0.01em',
            margin: '44px 0 0',
          }}
        >
          트랙 리스트
        </h3>
        <ol className="alb-tracks" style={{ marginTop: 12 }}>
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
          데이터: 2026-06-12 수집 · 유입 판정: 2026-07 · 미발매곡: 2026-07
          공개분까지
        </p>
        <a className="alb-diff" href="#order">
          ④ 트랙과 서사 구성 ↓
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
              공식 유튜브 채널 톱레벨 댓글 9,763건{' '}
              <Link href="/method/#inflow">전수 분석</Link>에서, 신규 유입을
              언급한 257건 중 기타(경로 미상) 106건(41.2%) · OST/미디어
              46건(17.9%) · 공연/페스티벌 38건(14.8%). 단, OST/미디어 46건 중
              43건이 실제로는 공연 영상(복면가왕 24건, GSI 16건, 불후의 명곡
              3건)으로, 재분류(post-hoc) 시 공연 목격 계기는 81건(31.5%) —
              경로가 식별된 유입 중 최대 단일 경로.
            </p>
            <p>
              <Chip kind="int" />
              유입 경로를 자발적으로 언급한 팬들 사이에서, 식별 가능한
              경로로는 퍼포먼스 목격이 가장 크다. 단독 콘서트
              &lsquo;촬영 금지&rsquo; 방침에 대한 팬덤의 반응이 두드러진다는
              점도 라이브 경험 중심 가치와 연결됨.
            </p>
          </li>
          <li>
            <b>라이브와 스트리밍의 역전.</b>
            <p>
              <Chip kind="obs" />
              동일 씬 안에서 라이브 동원 규모가 더 작은 밴드들이 같은 시점 더
              높은 월간 청취자를 기록하는 사례가 관찰됨(스포티파이, 2026.07
              기준). 라이브 동원력과 스트리밍 지표의 순위가 역전되는 구간이
              존재한다.
            </p>
            <p>
              <Chip kind="int" />
              격차의 일부는 장르 특성(라이브 중심 사운드의 낮은 스트리밍
              전환)으로 설명되나, 라이브 동원력 대비 청취자 규모의
              역전은 전환되지 않은 수요가 존재함을 시사. 첫 정규 음원이 이
              미전환 구간을 여는 계기가 될 수 있음.
            </p>
          </li>
          <li>
            <b>가사 세계관.</b>
            <p>
              감정을 사물로 치환하고, 그 치환의 의미를 같은 문장 안에서 풀어
              설명하는 방식이 자주 사용됨. 구원 서사에서 일방향 관계 구도가
              관찰됨(
              <a href="#catalog-gap">③ 컨셉과 근거</a>).
            </p>
          </li>
          <li>
            <b>장르적 스펙트럼이 넓은 카탈로그.</b>
            <p>
              하드록과 팝을 오가며 여러 결을 동시에 시도해 옴 — 선공개곡
              안에서도 가벼운 팝 감각과 하드록 발라드가 공존. 정규 1집은 이 시도
              중 어떤 결을 대표 이미지로 세울지 처음 답하는 자리가 됨.
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
          <Chip kind="int" />음율은 알고리즘 비중이 뚜렷하게 높고, 터치드는
          퍼포먼스 목격에 사실상 의존한다. 이 앨범은 두 번째 유입 창이
          되어야 한다.
        </p>
        <p className="alb-fn">
          비교군은 동일 파이프라인으로 전수 분석이 완료된 유일한 팀(음율)
          1팀이다. 본 비교는 두 팀 간 차이의 확인이며, 씬 일반 대비 주장이
          아니다. 유입 비율은 유입 경로를 자발적으로 언급한 댓글 내
          비중으로(터치드 257건, 음율 149건), 전체 팬 모집단의 유입 분포에
          대한 주장이 아니다.
          판정·감사 절차는 <Link href="/method#inflow">분석 방법</Link>에
          공개되어 있다.
        </p>
      </AlbumSection>

      {/* ③ 컨셉과 근거 */}
      <AlbumSection id="concept" no="③" title="컨셉과 근거">
        <p>
          올해 선공개된 곡들을 이어서 바라본 정규 1집의 주제는{' '}
          <strong>&lsquo;내면의 어둠을 직면할 때 찾아오는 위로&rsquo;</strong>
          이다. 다만 이 주제에서 &lsquo;어둠&rsquo;은 너무 넓어서 어떤 팀이
          부르느냐에 따라 전혀 다른 것이 된다. 그렇다면 늘 더 밝은 곳을 향해온
          터치드에게 유독 선명한 어둠은 무엇인가.
        </p>
        <p>
          그 답이 가상 기획 제목인 《역광》이다. 역광의 어둠은{' '}
          <strong>
            눈부신 빛에 둘러싸인 사람만이 가질 수 있는 어둠
          </strong>
          이다. 경연 우승, 페스티벌 헤드라이너, 올림픽홀 전석 매진. 터치드는 그
          빛의 한가운데를 실제로 통과해 온 팀이고, 이 컨셉은 그 궤적을 부정하지
          않는 어둠을 제안한다.
        </p>
        <p>
          밴드의 지향점(더 밝은 곳, 더 큰 무대)을 교정하지 않고 그대로
          정렬했다는 점에서 《역광》은 진정성을 확보하며, 이는 이 컨셉의 가장 큰
          이점이다. 이 앨범이 말하려는 것은 &lsquo;눈부신 사람에게도 어두운 면이
          있다&rsquo;가 아니라{' '}
          <strong>&lsquo;빛을 쫓는 동안엔 어둠을 볼 수 없었다&rsquo;</strong>
          이다. 전자는 이미 빛 안에 있는 사람의 이야기지만, 후자는 빛을
          추구하는 모든 사람의 이야기다. 이 시각은 터치드와 청자 사이의 거리를
          좁힌다.
        </p>
        <p>
          제목 《역광》은 이중 독해를 설계에 포함한다. 발매 시점에서 청자는
          &lsquo;빛&rsquo;을 먼저 떠올리지만, 앨범 트랙을 전부 청취한 후에는
          검은 &lsquo;실루엣&rsquo;에 집중해야 했다는 걸 깨닫는다. 《역광》에서
          화자는 빛을 등지고 나서야 까맣게 보이던 실루엣이 자신의 화상
          자국이었음을 알게 되고, 그림자 속에서 비로소 온기를 발견하기
          때문이다. 이 재독해의 순간이 앨범이 청자에게 남기는 마지막 여운이
          된다.
        </p>
        <h3 id="catalog-gap">
          카탈로그의 오래된 공백을 겨냥
        </h3>
        <p>
          기존 곡들에서 &lsquo;나&rsquo;는 &lsquo;너&rsquo;에게 직접적으로
          도움을 주었던 적이 없다. 오히려 &lsquo;너&rsquo;가 나를 구해주는
          존재였다(&ldquo;짙어진 그림자는 오직 너만 밝혀줄 수 있으니까&rdquo; —
          새벽별, &ldquo;나를 기억해줘&rdquo; — Stay by My Side).
        </p>
        <p>
          이 공백에서 《역광》은 이타주의로 도약하지 않는다. 스포트라이트 안에
          있는 사람은 객석이 보이지 않는다. 빛을 등지고 나서야 어둠 속의 상대가
          보인다. 앨범의 종착은 &ldquo;이번엔 내가 너를 구하겠다&rdquo;가
          아니라 <strong>&ldquo;이제야 네가 보인다&rdquo;</strong>이며, 위로는
          화자가 주는 것이 아니라 목격당한 상대의 내면에서 발생한다.
        </p>
        <p>
          마지막으로, 이 컨셉은 <a href="#diagnosis">① 진단</a>에서 확인한{' '}
          &lsquo;넓은 스펙트럼&rsquo;에 대한 답변 방식이기도 하다. 《역광》은
          선언으로 정체성을 규정하지 않는다.{' '}
          <strong>
            명확한 컨셉 아래 사운드와 발화 선택을 일관되게 좁히면, 그 총합이
            자연스럽게 하나의 색깔로 남는다.
          </strong>{' '}
          《역광》은 팬이 시각적 목격으로 태어난다는 유입 분석 결과와도
          정합한다 — 조명 연출·앨범아트로 직역 가능한 드문 컨셉이다.
        </p>
      </AlbumSection>

      {/* ④ 트랙과 서사 구성 */}
      <AlbumSection id="order" no="④" title="트랙과 서사 구성">
        <p>
          《역광》은 총 12곡으로 구성된다. 이번 기획에서 새로 제안하는 신곡
          4곡과, 라이브로만 공개되어 온 미발매곡 8곡을 하나의 서사 아래
          배열했다.
        </p>
        <table className="alb-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">트랙</th>
              <th scope="col">국면</th>
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
                <td>{t.arc}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="alb-fn">
          가제와 서사 국면은 본 기획의 제안 · 미발매 8곡: 7월 공개분까지 반영.
        </p>
        <h3>서사 구성</h3>
        <p>
          거침없는 상승(Sunburst)이 어느 순간 좌표를 잃고 하강하기
          시작한다(무중력 → 미아 → Hide). 무중력은 몽환적이고 평온하며, 미아는
          막막한 심정을 표현하는 가사에 경쾌한 멜로디를 입힌 역설적인 곡이다. 두 곡은 낮고 불길한 사운드를 가진
          Hide로 이어지는 완만한 흐름을 만든다.
        </p>
        <p>
          이후 화자는 깊은 밤을 헤매며(영혼의 밤) 강렬한 빛을 갈구하다 시야를
          상실한다(Whiteout). 구원을 위해 타자에게 매달리지만, 세 번의 시도(Save
          Me → Stay by My Side → Alone)에도 돌아오는 응답은 없다.
        </p>
        <p>
          <strong>
            밖에서 구원을 찾던 시선은 갈 곳을 잃고 처음으로 자기 자신에게
            꺾인다.
          </strong>{' '}
          빛을 갈망할 때는 볼 수 없었던 상처를 발견하고 이를 고백한다(일광화상).
          앞선 세 곡을 거치며 감정의 조도를 충분히 낮춰두었기에, 일광화상은
          담담하지만 잔인한 어조가 가능하다.
        </p>
        <p>
          화자는 익숙한 곳에서 안정을 되찾으려 한다(At Home). 그 방은 아무것도
          보이지 않는 어둠이다. 그러나 차츰 곁에 있는 타인의 온기를 느끼고,{' '}
          <strong>그 어둠 속에서 상대를 왜곡 없이 바라볼 수 있게 된다</strong>
          (Touched).
        </p>
        <p className="alb-fn">무중력은 가사 미공개로 사운드 기준 서술.</p>
      </AlbumSection>

      {/* ⑤ 신곡 사양서 — 유일하게 폭 960 허용 */}
      <AlbumSection id="spec" no="⑤" title="신곡 사양서" wide>
        <SpecMatrix
          columns={SPEC_COLUMNS}
          rows={SPEC_ROWS}
          defaultOpenKey="whiteout"
        />
      </AlbumSection>

      {/* ⑥ 타이틀 전략과 퍼널 */}
      <AlbumSection id="title" no="⑥" title="타이틀 전략과 퍼널">
        <p>
          《역광》은 더블 타이틀 앨범(Sunburst · Whiteout)이다. 두 타이틀은
          서로 다른 취향을 겨냥한 상품 두 개가 아니라,{' '}
          <strong>하나의 갈망이 앨범 안에서 겪는 변화의 양 끝점</strong>이다.
          Sunburst에서 암시된 결핍이 Whiteout에서 자각적 폭발로 연결된다.
          이와 같은 타이틀 선정은 앨범의 핵심 사건을 압축 전달해 전체 아크에
          대한 호기심을 유발하는 걸 목표한다.
        </p>
        <p>
          타이틀 선공개 전략은 <a href="#diagnosis">① 진단</a>에서 확인한 유입
          구조를 따랐다 —{' '}
          <strong>팬덤이 퍼포먼스 목격에서 시작된다</strong>. 경로가 특정된
          유입을 계기별로 재그룹하면(post-hoc) 퍼포먼스 창은 셋이다: 현장
          공연/페스티벌(38건), 방송 라이브(43건 — 복면가왕·GSI·불후, 모두
          라이브 퍼포먼스를 방송으로 내보내는 포맷, 신규 출연 없이는 감쇠
          예상), 콜라보 클립(10건 — 단일 영상 집중, 영상 하나가 창 하나 몫).
          외부의 편성이나 섭외를 기다리지 않고 진행할 수 있는 퍼포먼스 목격의
          계기를 만든다.
        </p>
        <ul>
          <li>
            <strong>시차 더블 타이틀</strong> — Sunburst 선공개(발매 2~3주 전)
            → Whiteout 앨범 발매일 공개.
          </li>
          <li>
            <strong>Sunburst는 라이브 세션 영상 동반 공개</strong> — 실연주 +
            멀티트랙 후반 믹싱.
          </li>
        </ul>
        <p>
          라이브 영상에 스튜디오 음원을 싱크하는 안은{' '}
          <a href="#ledger">검토 후 기각</a>했다. 이
          팀의 유입층은 라이브의 진위를 판별하며 들어온 팬층이므로,{' '}
          <strong>싱크 연출은 그 진정성 자산을 담보로 잡는 선택</strong>이다.
          형상과 실체의 일치를 따르는 《역광》의 컨셉과도 정면으로 충돌한다.
        </p>
        <p>
          선공개 Sunburst가 멜로디 이면의 결핍을 확실히 암시할수록 Whiteout이
          감당할 부담은 줄어든다. Sunburst는 신규 유입 장치일 뿐 아니라{' '}
          <strong>Whiteout의 서사적 정당성을 완성하는 곡</strong>이다 — 즉
          Sunburst가 그 역할을 못 해낼 경우 Whiteout도 흔들린다. 이 전략의
          리스크는 두 가지다: 선공개 부진 시 앨범 전체 기대치가 함께 하락하며,
          홍보 화력이 두 시점으로 분산된다.
        </p>
      </AlbumSection>

      {/* ⑦ 실현 가능성 — 공개판 축약 */}
      <AlbumSection id="feasibility" no="⑦" title="실현 가능성">
        <p>
          가상 앨범 기획안은 항상 동일한 과제를 떠안는다 — 이 컨셉은 실제로
          밴드가 수행할 수 있는 방향인가. 이를 보완하기 위해 공개 인터뷰·기록을
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
                승빈 &ldquo;우울과 불안일지라도 진심이 전해지면 도움이
                된다&rdquo; / 존비킴 &ldquo;작은 위로나 격려&rdquo;
                (시어터플러스, 2025. 1. 17)
              </td>
              <td>
                앨범 주제와 연결. 위로를 건네지 않고 상대의 내면에서
                발생시키는 방식과 정합
              </td>
            </tr>
            <tr>
              <td>
                윤민 &ldquo;앞으로 나올 앨범에 고독함·이별·슬픔 등 꺼내는
                것만으로 위로가 되는 솔직한 이야기를 담을 예정&rdquo;
                (경향신문, 2026. 4. 6)
              </td>
              <td>앨범 주제와 연결</td>
            </tr>
            <tr>
              <td>
                윤민 — 라디오헤드 &lsquo;Creep&rsquo;을 10대 시절 영감으로
                꼽으며, 위로를 건네지 않는 자기비하적 가사가 오히려 위로가
                됐다고 회고 (경향신문, 2026. 4. 6)
              </td>
              <td>
                &lsquo;일광화상&rsquo; 사양: 담담한 자백, 감정을 키우는 편곡
                반려. 위로가 아닌 자백이 위로로 기능하는 트랙
              </td>
            </tr>
          </tbody>
        </table>
        <p>
          이처럼 《역광》의 컨셉은 팀의 지향점을 드러내는 말과 기록에서
          출발했으며, 그 지향을 앨범이 실행할 수 있는 형태로 옮긴 결과물이다.
        </p>
      </AlbumSection>

      {/* ⑧ 무대·비주얼 번역 */}
      <AlbumSection id="stage" no="⑧" title="무대·비주얼 번역">
        <p>
          유입 언급의 31.5%(post-hoc)가 퍼포먼스 목격임을 감안했을 때(
          <a href="#diagnosis">① 진단</a>) 《역광》은{' '}
          <strong>무대 조명을 통해 시각적으로 직역될 수 있는 앨범</strong>
          이라는 독보적인 이점을 가진다. 무대 스포트라이트 연출은 앨범 아크의
          흐름을 그대로 표현하며, 이는 타이틀 선공개 영상(
          <a href="#title">⑥ 타이틀 전략과 퍼널</a>)에도 그대로 적용된다.
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
          실루엣의 미학에서 <strong>역광(Contre-jour)</strong>은 럭셔리 사진의
          문법이기도 하므로 팬덤이 선망하는 세련된 이미지 자산과 충돌하지
          않는다. 다만 모든 곡에서
          역광을 고집하면 비주얼이 전혀 보이지 않을 수 있고, 이는 신규 유입
          저하·기존 팬 충성도 하락으로 손실이 더 클 수 있다. 따라서{' '}
          <strong>서사적으로 반드시 필요한 곡에서만</strong> 역광을
          채택했다(일광화상, Touched).
        </p>
      </AlbumSection>

      {/* ═══ 층3 — 판단의 기록 + 이 사이트에 담지 않은 것 ═══════════ */}
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
            <h2>이 사이트에 담지 않은 것</h2>
            <p className="closing">
              유입 분석 원자료는 사이트에 싣지 않았습니다(판정 로그, 감사
              데이터, 재현성 묶음).
              <br />
              판정·감사 절차는{' '}
              <Link href="/method#inflow">
                <strong>분석 방법</strong>
              </Link>
              에 공개되어 있습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
