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

export const ARTISTS = [
  { slug: 'touched', name: '터치드' },
  { slug: 'eumyul', name: '음율' },
  { slug: 'sinillyu', name: '신인류' },
] as const;
