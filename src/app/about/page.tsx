import type { Metadata } from 'next';
import { OG_IMAGE, SITE } from '@/data/site';

export const metadata: Metadata = {
  title: 'About',
  description:
    '뮤지션 동행자에서 A&R로. 아티스트를 시장과 연결하는 일에 대한 관점과 이력.',
  openGraph: {
    title: 'About — 정지영',
    description:
      '뮤지션 동행자에서 A&R로. 아티스트를 시장과 연결하는 일에 대한 관점과 이력.',
    images: OG_IMAGE,
  },
};

const TIMELINE = [
  {
    period: '2026',
    role: '인디 아티스트 분석 · 앨범 콘셉트 기획',
    detail:
      '유튜브 댓글 데이터 파이프라인 구축, 팬 관계유형 분류·통계 검증, 공연 현장 관찰 기반 앨범 기획',
  },
  {
    period: '2024 – 2025',
    role: '인디음악 에세이 연재 · 브런치북 완결',
    detail: '곡·앨범 해석 12편',
  },
  {
    period: '2020 – 2025',
    role: '웹 프론트엔드 개발',
    detail: '웹 서비스 개발·운영, 기획·CS 부서 간 협업과 우선순위 조율',
  },
  {
    period: '2018 – 2019',
    role: '서울대학교 빅데이터 핀테크 과정 수료',
    detail: 'SQL 개발자(SQLD) 자격 보유',
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
      <section className="hero" style={{ paddingBottom: 14 }}>
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>뮤지션 동행자에서 A&amp;R로</h1>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p>
            돌이켜보면, 대학 졸업 전 한국 인디씬을 알게 된 이후로 같은 일을
            반복하고 있었습니다. 뮤지션의 강점과 약점을 살피고, 팬덤의 성격을
            관찰하고, 공연 매진 여부와 앨범 반응을 분석했습니다. 앨범 발매 한 달
            전부터 SNS에 캘리그라피 작품을 올리며 발매를 홍보한 적도 있습니다.
            누가 시킨 일이 아니었습니다. 저는 그냥 그러고 있었습니다. 이 일을
            뭐라 불러야 할지 몰라, 한동안 스스로를 &lsquo;뮤지션 동행자&rsquo;라고
            소개하기도 했습니다. 그러다 A&amp;R이라는 직무를 접했습니다. 지금껏
            제가 해오고, 하고 싶던 일에 가장 가까운 이름이었습니다.
          </p>
          <p>
            제가 생각하는 A&amp;R은 아티스트를 시장과 연결하는 일입니다. 다만 그
            연결이 아티스트를 무조건 시장에 맞추는 방식은 아닙니다. 노래가 뮤지션의
            현재 모습을 앞질러 갈 때가 있습니다. 미처 정의되지 않은 마음과 가능성이
            그 안에 담겨 있곤 합니다. 그것을 미리 알아보고 더 많은 사람에게 닿을
            형태로 다듬는 일. 연결은 거기에서 시작한다고 생각합니다.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Timeline</p>
          <h2 style={{ marginTop: 0 }}>이력</h2>
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
            {SITE.brunch && (
              <>
                <a href={SITE.brunch} target="_blank" rel="noopener noreferrer">
                  브런치에서 칼럼 읽기
                </a>
                <br />
              </>
            )}
            {SITE.resumePdf && (
              <a
                href={SITE.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
              >
                이력서 PDF 내려받기
              </a>
            )}
          </p>
        </div>
      </section>
    </>
  );
}
