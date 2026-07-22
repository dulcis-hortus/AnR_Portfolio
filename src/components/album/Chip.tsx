const LABELS = {
  obs: '관찰',
  int: '해석',
  ph: 'post-hoc',
} as const;

/** 칩 3종 (시스템 골격) — [관찰]/[해석]/[post-hoc]. post-hoc만 유채색(앨범 색). */
export default function Chip({ kind }: { kind: keyof typeof LABELS }) {
  return <span className={`alb-chip alb-chip--${kind}`}>{LABELS[kind]}</span>;
}
