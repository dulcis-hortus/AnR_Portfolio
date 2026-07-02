// 사이트 전역 상수. TODO 항목은 배포 전 확정 필요.
export const SITE = {
  title: '정지영 — A&R 포트폴리오',
  description:
    '데이터로 가설을 세우고, 현장에서 검증하는 A&R. 유튜브 댓글 데이터 기반 팬덤 분석 포트폴리오.',
  // TODO: 도메인 확정 후 교체 (OG 절대경로 산출에 사용)
  url: 'https://example.com',
  email: 'jiyeong.0807.kr@gmail.com',
  // TODO: 브런치 프로필 URL 확정
  brunch: 'https://brunch.co.kr/@TODO',
  // public/resume.pdf 로 이력서 PDF 배치
  resumePdf: '/resume.pdf',
  disclaimer:
    '본 사이트의 분석은 공개 데이터에 기반한 비공식 분석이며, 아티스트·소속사와 무관합니다.',
};

export const ARTISTS = [
  { slug: 'touched', name: '터치드' },
  { slug: 'eumyul', name: '음율' },
  { slug: 'sinillyu', name: '신인류' },
] as const;
