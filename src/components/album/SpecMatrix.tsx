import type { ReactNode } from 'react';

export type SpecColumn = { key: string; name: string };
export type SpecRow = { label: string; band?: boolean; cells: ReactNode[] };

/**
 * 비교표 골격 (시스템) — 데스크톱: 항목열 고정 가로 비교표,
 * 모바일: 카드 아코디언(defaultOpenKey 열만 기본 펼침). CSS로 전환,
 * 좌우 스크롤 없음. band 행은 강조 밴드(금지 조항·반려 기준 등).
 */
export default function SpecMatrix({
  columns,
  rows,
  defaultOpenKey,
}: {
  columns: SpecColumn[];
  rows: SpecRow[];
  defaultOpenKey?: string;
}) {
  return (
    <div className="alb-spec">
      <table className="alb-spec-table">
        <thead>
          <tr>
            <th scope="col" aria-label="항목" />
            {columns.map((c) => (
              <th key={c.key} scope="col">
                {c.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className={r.band ? 'alb-band' : undefined}>
              <th scope="row">{r.label}</th>
              {r.cells.map((cell, i) => (
                <td key={columns[i].key}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="alb-spec-cards">
        {columns.map((c, ci) => (
          <details key={c.key} open={c.key === defaultOpenKey}>
            <summary>{c.name}</summary>
            <dl>
              {rows.map((r) => (
                <div key={r.label} className={r.band ? 'alb-band' : undefined}>
                  <dt>{r.label}</dt>
                  <dd>{r.cells[ci]}</dd>
                </div>
              ))}
            </dl>
          </details>
        ))}
      </div>
    </div>
  );
}
