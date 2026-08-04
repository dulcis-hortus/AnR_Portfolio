// 사이트 전역 상수. TODO 항목은 배포 전 확정 필요.
export const SITE = {
  title: '정지영 — A&R 포트폴리오',
  description:
    '앨범과 무대로 방향을 읽고, 데이터로 시장을 확인하는 A&R. 유튜브 댓글 4만여 건에서 관찰과 해석을 구분하고, 표본의 한계를 함께 공개합니다.',
  // 배포 주소. repo를 dulcis-hortus.github.io로 바꾸거나 커스텀 도메인 연결 시 교체.
  url: 'https://dulcis-hortus.github.io/AnR_Portfolio',
  email: 'jiyeong.0807.kr@gmail.com',
  // 새 브런치 계정 작가 승인 후 URL 기입. 비워두면 사이트에 링크 미노출.
  brunch: '',
  // public/resume.pdf 배치 후 '/resume.pdf'로 변경. 비워두면 링크 미노출.
  resumePdf: '',
  // GoatCounter 사이트 코드(https://<코드>.goatcounter.com의 <코드> 부분).
  // 비워두면 분석 스크립트 미삽입 — 방문 집계도 없음.
  goatcounter: 'dulcis-hortus',
  disclaimer:
    '본 사이트의 분석은 공개 데이터에 기반한 비공식 분석이며, 아티스트·소속사와 무관합니다.',
};

// 아티스트 기획 페이지 색인 차단(2026-08-04). 이력서 링크나 홈 카드로 들어온
// 사람에게는 아무 영향이 없고 — 링크는 그대로 작동한다 — 아티스트명 검색으로
// 팬덤·소속사가 유입되는 경로만 닫는다. 실존 아티스트의 약점 진단과 미발매곡
// 목록이 담겨 있어, 채용 이득이 없는 그 경로만 비대칭적으로 위험하기 때문이다.
// 홈·About·분석 방법·프로젝트는 색인을 허용해 본인 이름 검색에는 계속 걸린다.
// 공개해도 되겠다고 판단되면 각 페이지 metadata의 robots 줄만 지우면 된다.
export const NOINDEX = { index: false, follow: false } as const;

// 공유 미리보기 이미지. 카카오·슬랙·X는 URL 단위로 캐시하므로,
// og.png를 다시 그릴 때는 v 값을 올려 캐시를 무효화한다.
// 카드 원본은 내부 문서 폴더의 og-card.html (미배포) — Chrome 헤드리스로
// 1200×630 스크린샷을 떠서 public/og.png를 덮어쓴다.
export const OG_IMAGE = [
  { url: '/og.png?v=2', width: 1200, height: 630 },
];

// 네비 드롭다운은 산출물명(앨범 기획안) 기준으로 표기 (결정로그 v3.1)
export const ARTISTS = [
  { slug: 'touched', name: '터치드', album: '터치드 — 정규 1집 《역광》' },
  { slug: 'sinillyu', name: '신인류', album: '신인류 — EP 《구름을 빌려줘》' },
  {
    slug: 'eumyul',
    name: '음율',
    album: '음율 — 정규 2집 《매순간 그냥 그러고 싶었어》',
  },
] as const;
