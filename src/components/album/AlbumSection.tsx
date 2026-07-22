import type { ReactNode } from 'react';

/**
 * 층2 섹션 골격 (시스템) — sticky 거터(번호+제목) + 본문 최대 폭 640.
 * wide: ⑤ 사양서형 섹션만 본문 폭 960 허용.
 */
export default function AlbumSection({
  id,
  no,
  title,
  wide = false,
  children,
}: {
  id: string;
  no: string;
  title: string;
  wide?: boolean;
  children: ReactNode;
}) {
  return (
    <section id={id} className={wide ? 'alb-sec alb-sec--wide' : 'alb-sec'}>
      <header className="alb-gutter">
        <span className="alb-sec-no">{no}</span>
        <h2 className="alb-sec-title">{title}</h2>
      </header>
      <div className="alb-body">{children}</div>
    </section>
  );
}
