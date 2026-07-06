// 사이트 전역 상수. TODO 항목은 배포 전 확정 필요.
export const SITE = {
  title: '정지영 — A&R 포트폴리오',
  description:
    '데이터로 가설을 세우고, 현장에서 검증하는 A&R. 유튜브 댓글 데이터 기반 팬덤 분석 포트폴리오.',
  // 배포 주소. repo를 dulcis-hortus.github.io로 바꾸거나 커스텀 도메인 연결 시 교체.
  url: 'https://dulcis-hortus.github.io/AnR_Portfolio',
  email: 'jiyeong.0807.kr@gmail.com',
  // 새 브런치 계정 작가 승인 후 URL 기입. 비워두면 사이트에 링크 미노출.
  brunch: '',
  // public/resume.pdf 배치 후 '/resume.pdf'로 변경. 비워두면 링크 미노출.
  resumePdf: '',
  disclaimer:
    '본 사이트의 분석은 공개 데이터에 기반한 비공식 분석이며, 아티스트·소속사와 무관합니다.',
};

// 네비 드롭다운은 산출물명(앨범 기획안) 기준으로 표기 (결정로그 v3.1)
export const ARTISTS = [
  { slug: 'sinillyu', name: '신인류', album: '신인류 — EP 《구름을 빌려줘》' },
  { slug: 'touched', name: '터치드', album: '터치드 — 정규 1집 《역광》' },
  {
    slug: 'eumyul',
    name: '음율',
    album: '음율 — 정규 3집 《매순간 그냥 그러고 싶었어》',
  },
] as const;
