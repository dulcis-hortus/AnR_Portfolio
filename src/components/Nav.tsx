'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ARTISTS } from '@/data/site';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <Link href="/" className="nav-logo" onClick={() => setOpen(false)}>
          정지영
        </Link>
        <nav className="nav-links" aria-label="주 메뉴">
          <div className={open ? 'nav-dropdown open' : 'nav-dropdown'}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              아티스트 {open ? '▴' : '▾'}
            </button>
            <div className="nav-dropdown-menu">
              {ARTISTS.map((a) => (
                <Link
                  key={a.slug}
                  href={`/artists/${a.slug}/`}
                  onClick={() => setOpen(false)}
                >
                  {a.name}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/projects/" onClick={() => setOpen(false)}>
            프로젝트
          </Link>
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
