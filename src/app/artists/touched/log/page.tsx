import type { Metadata } from 'next';
import type { CSSProperties } from 'react';
import AlbumHeader from '@/components/album/AlbumHeader';
import Chip from '@/components/album/Chip';
import '@/styles/album-system.css';
import { ALBUM_COLOR, STRIP_FULL, STRIP_SHORT } from '../data';

export const metadata: Metadata = {
  title: '터치드 — 관찰 기록',
  description:
    '터치드 공연 현장 관찰 로그. 데이터가 닿지 못하는 것을 기록한다.',
  openGraph: {
    title: '터치드 — 관찰 기록',
    description:
      '터치드 공연 현장 관찰 로그. 데이터가 닿지 못하는 것을 기록한다.',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
  },
};

const ALBUM_VARS = { '--album': ALBUM_COLOR } as CSSProperties;

export default function TouchedLog() {
  return (
    <div className="album-scope" style={ALBUM_VARS}>
      <link
        rel="stylesheet"
        precedence="default"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Noto+Serif+KR:wght@600;900&display=swap"
      />

      <AlbumHeader
        sections={[]}
        deepLinks={[{ href: '/artists/touched/', label: '본편으로 돌아가기' }]}
        stripFull={STRIP_FULL}
        stripShort={STRIP_SHORT}
      />

      <main className="alb-log">
        <p className="alb-eyebrow">터치드 — 관찰 기록</p>
        <h1 className="alb-log-title">데이터가 닿지 못하는 것</h1>
        <p className="alb-log-intro">
          단회 관찰은 표본 대표성이 없고, 반복 관찰은 비용이 성립하지 않는다.
          현장성은 검증 항목이 아니라 관찰 로그로 축적한다.
        </p>

        {/* ── 관찰 항목 (역시간순 — 새 항목은 아래 <article> 블록을 통째로
            복사해 이 줄 바로 밑, 목록 맨 위에 붙이고 내용만 교체) ── */}

        <article className="alb-log-entry">
          <h2 className="alb-log-date">2026.07.10 · 마포아트센터 아트홀맥</h2>
          <p>
            <Chip kind="obs" />
            어쿠스틱 편성 공연. 베이스·건반 비중이 통상 편성보다 큰 편곡.
          </p>
          <p>
            <Chip kind="int" />
            편성 변화가 곡 시너지를 오히려 끌어올림 — 악기 간 균형이 드러날
            때 강해지는 곡들.
          </p>
          <p>
            <Chip kind="int" />
            음원에서도 각 악기 파트가 묻히지 않는 섬세한 레코딩이 필수적이라
            판단.
          </p>
        </article>
      </main>
    </div>
  );
}
