import report from '@/data/aggregate_report.json';

/**
 * 시그니처 차트 — 팀별 "관계 신호 댓글 중 친구형 비중" + 95% 신뢰구간.
 * 표기 원칙(결정로그 §3):
 * - 순위 표기 금지 → 가나다순 고정
 * - 비율 생략 팀(음율)은 차트에서 제외하고 각주로 사유 명시
 * - 분모(친구형+우상형)와 표본 한계를 각주 병기
 */

type TeamRatio = {
  점추정: number;
  CI95: number[];
  분모: number;
};

type TeamData = {
  표본: number;
  분포: { 친구형: number; 우상형: number; 혼합: number; 무신호: number };
  관계신호_수: number;
  비율_생략: boolean;
  친구형_비율?: TeamRatio;
};

const teams = report['팀별'] as Record<string, TeamData>;

// 가나다순 고정 (순위 아님)
const ORDER = ['데이먼스이어', '신인류', '최유리', '터치드'];

function pct(v: number) {
  return Math.round(v * 100);
}

export default function CIChart() {
  return (
    <div className="chart-card">
      <p className="chart-title">
        관계 신호 댓글 중 &lsquo;친구형&rsquo; 비중 — 95% 신뢰구간
      </p>
      <p className="chart-sub">
        팀별 표본 200건(층화 무작위) 중 관계 신호(친구형·우상형)를 드러낸
        댓글만을 분모로 한 비중입니다. 팀 전체 팬 비율이 아닙니다. 팀 순서는
        가나다순입니다.
      </p>

      <div className="ci-rows">
        {ORDER.map((name) => {
          const t = teams[name];
          const r = t.친구형_비율!;
          const lo = pct(r.CI95[0]);
          const hi = pct(r.CI95[1]);
          const pt = pct(r.점추정);
          const confirmed = r.CI95[0] > 0.5;
          return (
            <div className="ci-row" key={name}>
              <div className="ci-label">
                <span className="ci-name">{name}</span>
                <span className="ci-counts">
                  친구형 {t.분포.친구형} : 우상형 {t.분포.우상형}
                  <span className="ci-denominator"> (분모 {r.분모}건)</span>
                </span>
              </div>
              <div
                className="ci-track"
                role="img"
                aria-label={`${name}: 친구형 비중 점추정 ${pt}%, 95% 신뢰구간 ${lo}%에서 ${hi}%`}
              >
                <span className="ci-mid" aria-hidden="true" />
                <span
                  className="ci-range"
                  style={{ left: `${lo}%`, width: `${hi - lo}%` }}
                />
                <span className="ci-point" style={{ left: `${pt}%` }} />
              </div>
              <div className="ci-value">
                <strong>{pt}%</strong>
                <span className="ci-interval">
                  [{lo}–{hi}%]
                </span>
                <span className={confirmed ? 'ci-tag ci-tag-ok' : 'ci-tag'}>
                  {confirmed ? '친구형 우세 · 통계적 확인' : '방향 단정 불가'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="ci-axis" aria-hidden="true">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>

      <p className="footnote" style={{ marginTop: 16 }}>
        · 친구형 비중 = 친구형 ÷ (친구형 + 우상형). 혼합·무신호는 분모에서
        제외했습니다.
        <br />
        · 댓글 작성자는 능동적 팬 집단으로, 전체 팬층을 대표하지 않습니다.
        <br />
        · 음율은 관계 신호가 18건으로 다른 팀(34~38건) 대비 뚜렷이 적어 비율
        해석을 생략합니다(개수·인용만 표기).
        <br />
        · &lsquo;통계적 확인&rsquo;은 95% 신뢰구간 하한이 50%를 넘는 경우를
        뜻합니다. 상세 절차는{' '}
        <a href="/method/">분석 방법</a> 참고.
      </p>
    </div>
  );
}
