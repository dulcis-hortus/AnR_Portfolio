import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '프로젝트',
  description: 'A&R 기획 프로젝트 목록.',
};

export default function Projects() {
  return (
    <section className="hero">
      <div className="container">
        <p className="eyebrow">Projects</p>
        <h1>프로젝트</h1>
        <p style={{ color: 'var(--ink-soft)' }}>기획안을 준비 중입니다.</p>
      </div>
    </section>
  );
}
