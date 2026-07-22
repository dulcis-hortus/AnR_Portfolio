// 《역광》 인스턴스 데이터 — 시스템 골격에 주입되는 앨범 고유 값.
// 문안 출처: 역광_빌드지시문_최종(2026-07-22) §4~§5 · 공개판사양 · 원고(md).

import type { AlbumNavSection, AlbumDeepLink } from '@/components/album/AlbumHeader';
import type { SpecColumn, SpecRow } from '@/components/album/SpecMatrix';

export const ALBUM_COLOR = '#a3490f'; // 화상 엠버 (지면 위 대비 5.34:1, AA)

export const STRIP_FULL = '비공식 가상 프로젝트이며 아티스트·소속사와 무관합니다.';
export const STRIP_SHORT = '비공식 가상 프로젝트 · 아티스트·소속사와 무관';

// 층2 섹션 목차 (8섹션, 순서 고정). nav = 스크롤스파이 축약, title = 본문 표제.
export const SECTIONS: (AlbumNavSection & { title: string })[] = [
  { id: 'diagnosis', no: '①', nav: '진단', title: '진단' },
  { id: 'question', no: '②', nav: '질문', title: '질문' },
  { id: 'concept', no: '③', nav: '컨셉', title: '컨셉과 근거' },
  { id: 'order', no: '④', nav: '러닝오더', title: '러닝오더와 아크' },
  { id: 'spec', no: '⑤', nav: '사양서', title: '신곡 사양서' },
  { id: 'title', no: '⑥', nav: '타이틀', title: '타이틀 전략과 퍼널' },
  { id: 'feasibility', no: '⑦', nav: '실현성', title: '실현 가능성' },
  { id: 'stage', no: '⑧', nav: '무대', title: '무대·비주얼 번역' },
];

// 부속 딥링크 — /log·/v1 라우트와 /method#inflow 앵커는 다음 세션에서 생성 예정(확정 경로 선연결).
export const DEEP_LINKS: AlbumDeepLink[] = [
  { href: '/method#inflow', label: '분석 방법' },
  { href: '/artists/touched/log/', label: '관찰 기록' },
  { href: '/artists/touched/v1/', label: '기획 이력 v1' },
];

// 트랙리스트 12행 (wip = 가제)
export const TRACKS = [
  { no: 1, title: 'Sunburst', wip: true, open: false, arc: '자각 없는 상승' },
  { no: 2, title: '무중력', wip: false, open: true, arc: '접지 상실' },
  { no: 3, title: '미아', wip: false, open: true, arc: '하강' },
  { no: 4, title: 'Hide', wip: false, open: true, arc: '혼란' },
  { no: 5, title: '영혼의 밤', wip: false, open: true, arc: '헤맴' },
  { no: 6, title: 'Whiteout', wip: true, open: false, arc: '갈망의 자각과 폭발' },
  { no: 7, title: 'Save Me', wip: false, open: true, arc: '매달림(절망)' },
  { no: 8, title: 'Stay by my Side', wip: false, open: true, arc: '의존' },
  { no: 9, title: 'Alone', wip: false, open: true, arc: '간청' },
  { no: 10, title: '일광화상', wip: true, open: false, arc: '결핍에 대한 자백' },
  { no: 11, title: 'At Home', wip: false, open: true, arc: '자기 위로' },
  { no: 12, title: 'Touched', wip: true, open: false, arc: '온기, 명료한 타자 인식' },
];

// ⑤ 신곡 사양서 — 4곡 비교표 (금지 조항·반려 기준은 포트폴리오 문서에 별도 기술)
export const SPEC_COLUMNS: SpecColumn[] = [
  { key: 'sunburst', name: 'Sunburst (가제)' },
  { key: 'whiteout', name: 'Whiteout (가제)' },
  { key: 'ilgwang', name: '일광화상 (가제)' },
  { key: 'touched', name: 'Touched (가제)' },
];

export const SPEC_ROWS: SpecRow[] = [
  { label: '타이틀 여부', cells: ['타이틀', '타이틀 (메인)', '수록곡', '수록곡'] },
  {
    label: '가제 의미',
    cells: [
      '빛이 터져나옴 (긍정어)',
      '눈부심으로 시야 상실',
      '빛으로 인한 화상',
      '닿음 (온기로 이어짐)',
    ],
  },
  {
    label: '위치/기능',
    cells: [
      '오프닝, 자각 없는 갈망',
      '갈망의 자각적 폭발, 메인 타이틀',
      '자백, 린치핀',
      '온기로 상대를 인식, 시야가 넓어짐, 클로징',
    ],
  },
  {
    label: '톤/사운드',
    cells: [
      'Highlight 톤, 경쾌하고 야망에 찬 모습, 자우림 레퍼런스',
      '80년대 감정 극대주의',
      '담담. 현재 터치드의 절제 문법',
      '전반 좁고 가깝게 → 후반 공간 열림',
    ],
  },
  {
    label: '핵심 문장/이미지',
    cells: [
      '끝없는 갈망과 허기를 암시',
      '"빛을 원했다, 어느 때보다"',
      '"까맣게 탄 나를 보네"',
      '"이제야 네가 제대로 보여"',
    ],
  },
  {
    label: '형식 조항',
    cells: [
      'Whiteout과의 구분: 무자각 버전',
      '근거: 선공개곡 청취 기준, 80년대 해외 록 지향의 낭만적 감정주의 — 팀 질감과 정합',
      "편지 형식. 수신인=7·8번의 '너'(=빛). 반전 — 수신인이 자기 자신이었음이 드러남. 단 선언 금지, 호칭의 소멸로만 처리.",
      '촉각(온기) 선행 → 시각(개안). 온기는 결론 아닌 원인',
    ],
  },
];

// ⑧ 조명 문법 표 — 4곡 비교표 (모바일 아코디언 기본 펼침: 일광화상)
export const LIGHT_COLUMNS: SpecColumn[] = [
  { key: 'sunburst', name: 'Sunburst' },
  { key: 'whiteout', name: 'Whiteout' },
  { key: 'ilgwang', name: '일광화상' },
  { key: 'touched', name: 'Touched' },
];

export const LIGHT_ROWS: SpecRow[] = [
  { label: '방향', cells: ['순광', '전방위', '역광', '역광'] },
  {
    label: '조도',
    cells: ['중간', '과다한 밝음', '중간', '어둠 → 관객석에만 낮은 조명'],
  },
  {
    label: '목적성',
    cells: [
      '빛을 쫓는 화자, 관객에게는 순광의 온전한 노출',
      '시야 상실 유도',
      "빛을 등진 그림자 확인('화상 자국')",
      '암순응을 통한 시야 확장을 표현',
    ],
  },
];

// 층3 기각 원장 — 항목명 6행, 사유 칸은 공란(마크업 자리만 확보)
export const LEDGER: {
  name: string;
  badge?: string;
  link?: { href: string; label: string };
}[] = [
  { name: '정체성 주제화' },
  { name: '재발 배열' },
  {
    name: '빛 긍정 계열 제목 (silver lining · sunburst)',
    badge: 'sunburst → Track 1 재채용',
  },
  { name: '라이브 영상 + 스튜디오 음원 싱크' },
  { name: '아버지 수신인' },
  {
    name: 'v1 5막 구조',
    link: { href: '/artists/touched/v1/', label: '기획 이력 v1' },
  },
];
