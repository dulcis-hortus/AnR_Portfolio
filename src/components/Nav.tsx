'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ARTISTS } from '@/data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // 앨범 원페이지(터치드 《역광》 및 부속)는 전용 헤더(AlbumHeader)를
  // 쓰므로 전역 내비를 렌더링하지 않는다. 복귀 경로는 앨범 헤더 로고.
  if (pathname?.startsWith('/artists/touched')) {
    return null;
  }

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          A&amp;R 정지영<span className="nav-logo-dot">.</span>
        </Link>
        <nav className="nav-links" aria-label="주 메뉴">
          <div className={open ? 'nav-dropdown open' : 'nav-dropdown'}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              가상 앨범 기획 {open ? '▴' : '▾'}
            </button>
            <div className="nav-dropdown-menu">
              {ARTISTS.map((a) => (
                <Link
                  key={a.slug}
                  href={`/artists/${a.slug}/`}
                  onClick={() => setOpen(false)}
                >
                  {a.album}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/method/" onClick={() => setOpen(false)}>
            분석 방법
          </Link>
          <Link href="/about/" onClick={() => setOpen(false)}>
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
