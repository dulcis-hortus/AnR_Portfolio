# A&R 포트폴리오

Next.js(App Router) static export. GitHub Pages 정적 호스팅 전제.

## 실행

```bash
npm install   # 처음 한 번 (기존 node_modules는 지우고 설치 권장 — 샌드박스에서 쓰던 리눅스용 바이너리 포함됨)
npm run dev   # 개발 서버
npm run build # 정적 빌드 → out/
```

## 배포 (GitHub Pages)

- 커스텀 도메인·user page: 그대로 `npm run build`
- 프로젝트 페이지(`username.github.io/repo`): `BASE_PATH=/repo npm run build`
- `out/`을 gh-pages 브랜치 또는 Actions로 배포

## 배포 전 확정 필요 (src/data/site.ts)

- [ ] `url` — 도메인 확정 후 교체 (OG 절대경로)
- [ ] `brunch` — 브런치 프로필 URL
- [ ] `public/resume.pdf` — 이력서 PDF 배치
- [ ] 홈 히어로 카피 — 현재 시안 (결정로그 §7 미결)
- [ ] 가상 앨범 아트 — 현재 그라디언트 placeholder

## 데이터

`src/data/aggregate_report.json` — 파이프라인 산출물(2026-06-12, 시드 20260612).
표기 원칙은 결정로그 §3 준수: 개수 표기, 95% CI 병기, 순위 표기 금지,
음율 비율 생략(신호 18건), 표본 한계 문구, 푸터 디스클레이머.

⚠ `config.yaml`·API 키는 저장소에 올리지 말 것 (.gitignore 포함).
