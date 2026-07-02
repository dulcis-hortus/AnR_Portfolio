import type { Metadata } from 'next';
import { SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    '프론트엔드 개발자 5년에서 데이터·현장 검증 A&R로. 전환 스토리와 경력.',
  openGraph: {
    title: 'About — 정지영',
    description:
      '프론트엔드 개발자 5년에서 데이터·현장 검증 A&R로. 전환 스토리와 경력.',
  },
};

const TIMELINE = [
  {
    period: '2026',
    role: '인디 아티스트 분석 · 앨범 콘셉트 기획',
    detail:
      '유튜브 댓글 데이터 파이프라인 구축, 팬 관계유형 분류·통계 검증, 공연 현장 관찰 기반 앨범 기획.',
  },
  {
    period: '2024 – 현재',
    role: '브런치 인디음악 칼럼',
    detail:
      '인디음악·팬덤 문화 분석과 음악 소비 트렌드 기록. 브런치북 발간.',
  },
  {
    period: '2023 – 2025',
    role: '에이젠글로벌 · 웹 프론트엔드 개발자',
    detail: '기획·CS 요구사항의 UI·기능 구현, 부서 간 협업과 우선순위 조율.',
  },
  {
    period: '2022 – 2023',
    role: '서울리쉬 · 웹 프론트엔드 개발자',
    detail: '서비스 운영·장애 대응 단독 수행. 한정된 리소스에서 우선순위 실행.',
  },
  {
    period: '2020 – 2022',
    role: '아름다운가게 · 웹 프론트엔드 개발자',
    detail: '웹 서비스 개발·운영, 백오피스 구축으로 내부 업무 효율 개선.',
  },
  {
    period: '2018 – 2019',
    role: '서울대학교 빅데이터 핀테크 과정 수료',
    detail: 'SQL 개발자(SQLD) 자격 보유.',
  },
  {
    period: '2017',
    role: '서울대학교 작물생명과학과 졸업',
    detail: '',
  },
];

export default function About() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>
            이름은 알지 못했지만,
            <br />그 일을 하고 있었습니다
          </h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p>
            대학 졸업 전 인디 뮤지션의 음악을 만났고, 그 음악과 공연이 더 많은
            사람에게 알려질 가치가 있다고 느꼈습니다. 공연의 인상 깊은 순간을
            — 셋리스트 구성, 연주, 조명, 그날의 감정선까지 — 이유와 함께
            기록했고, 가지 못한 공연은 영상으로 무대 구성과 관객 반응을
            복기했습니다. 앨범 발매를 앞두고 매일 캘리그라피 작품을 올리며
            홍보를 자처하기도 했습니다. 당시에는 의식하지 못했지만, 전부
            아티스트의 음악 활동을 지지하는 일이었습니다.
          </p>
          <p>
            개발자가 된 뒤에도 음악 업계에서 눈을 떼지 못했습니다. 팬덤의
            성격을 관찰하고 공연 매진 여부와 앨범 반응을 분석했습니다. 누가
            시킨 일이 아니었습니다. 그러다 A&amp;R이라는 직무를 알게 됐습니다.
            지금껏 해오고, 하고 싶던 일에 가장 가까운 이름이었습니다.
          </p>
          <p>
            제가 생각하는 A&amp;R은 아티스트가 자신도 모르던 자신을 발견해주는
            일입니다. 노래가 본인보다 솔직할 때가 있습니다. 그것을 먼저
            알아보고, 더 많은 사람에게 닿을 형태로 만들어주는 일 — 그것이
            아티스트를 시장과 연결한다는 말의 진짜 의미라고 생각합니다.
          </p>
          <p>
            개발자 5년의 습관은 그대로 분석의 원칙이 되었습니다.{' '}
            <strong>
              추측 없이 실제 데이터만. 관찰과 해석의 구분. 표본 한계의 공개.
            </strong>{' '}
            데이터로 가설을 세우고, 데이터가 닿지 못하는 부분은 공연장에서
            직접 확인합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Timeline</p>
          <h2 style={{ marginTop: 0 }}>경력</h2>
          <ul className="timeline">
            {TIMELINE.map((t) => (
              <li key={`${t.period}-${t.role}`}>
                <span className="period">{t.period}</span>
                <div>
                  <div className="role">{t.role}</div>
                  {t.detail && <div className="detail">{t.detail}</div>}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h2 style={{ marginTop: 0 }}>연락처</h2>
          <p>
            <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            <br />
            <a href={SITE.brunch} target="_blank" rel="noopener noreferrer">
              브런치에서 칼럼 읽기
            </a>
            <br />
            <a href={SITE.resumePdf} target="_blank" rel="noopener noreferrer">
              이력서 PDF 내려받기
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
