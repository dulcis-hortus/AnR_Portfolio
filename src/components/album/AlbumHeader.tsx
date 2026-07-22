'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export type AlbumNavSection = { id: string; no: string; nav: string };
export type AlbumDeepLink = { href: string; label: string };

/**
 * 앨범 원페이지 전역 고정 헤더 (시스템 골격 — 앨범 무관).
 * 가상 기획 스트립 + 로고(→ 사이트 홈) + 스크롤스파이 내비 + 부속 딥링크.
 * 모바일: 현재 섹션 인디케이터, 탭 시 전체 목차 시트.
 * 모션은 스크롤스파이 인디케이터의 상태 변화만 허용.
 */
export default function AlbumHeader({
  sections,
  deepLinks,
  stripFull,
  stripShort,
}: {
  sections: AlbumNavSection[];
  deepLinks: AlbumDeepLink[];
  stripFull: string;
  stripShort: string;
}) {
  const [active, setActive] = useState<string | null>(null);
  const [sheet, setSheet] = useState(false);

  useEffect(() => {
    const els = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);

  const current = sections.find((s) => s.id === active);

  return (
    <header className="alb-header">
      <p className="alb-strip">
        <span className="alb-strip-full">{stripFull}</span>
        <span className="alb-strip-short">{stripShort}</span>
      </p>
      <div className="alb-bar">
        <Link href="/" className="alb-logo">
          정지영<span className="alb-logo-dot">.</span>
        </Link>
        <nav className="alb-spy" aria-label="본문 섹션">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={active === s.id ? 'on' : undefined}
            >
              <span className="alb-spy-no">{s.no}</span> {s.nav}
            </a>
          ))}
        </nav>
        <nav className="alb-aux" aria-label="부속 페이지">
          {deepLinks.map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="alb-cur"
          aria-expanded={sheet}
          aria-label="섹션 목차"
          onClick={() => setSheet((v) => !v)}
        >
          {current ? `${current.no} ${current.nav}` : '목차'} {sheet ? '▴' : '▾'}
        </button>
      </div>
      {sheet && (
        <nav className="alb-sheet" aria-label="전체 목차">
          {sections.map((s) => (
            <a key={s.id} href={`#${s.id}`} onClick={() => setSheet(false)}>
              {s.no} {s.nav}
            </a>
          ))}
          <div className="alb-sheet-aux">
            {deepLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setSheet(false)}>
                {l.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
