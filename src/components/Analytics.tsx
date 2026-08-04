'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { SITE } from '@/data/site';

// GoatCounter count.js가 window에 심는 API 중 실제로 쓰는 것만 선언.
declare global {
  interface Window {
    goatcounter?: { count?: (vars: { path: string }) => void };
  }
}

/**
 * 경로 변경 집계 — GoatCounter. 로더 스크립트 자체는 layout.tsx의 <head>에 있다.
 *
 * count.js는 로드 시점에 한 번 자동 집계한다. 이 사이트는 App Router 클라이언트
 * 내비게이션이라 <Link> 이동에서는 문서가 다시 로드되지 않으므로, 첫 진입 이후의
 * 경로 변경만 여기서 수동 집계해 중복·누락을 피한다.
 *
 * 경로는 usePathname 대신 location에서 직접 읽는다 — 쿼리스트링(지원처 구분용
 * ?ref=)까지 남겨야 하는데, useSearchParams는 정적 내보내기(output: 'export')에서
 * Suspense 경계를 요구하기 때문이다.
 */
export default function Analytics() {
  const pathname = usePathname();
  const firstRun = useRef(true);

  useEffect(() => {
    if (!SITE.goatcounter) return;
    if (firstRun.current) {
      firstRun.current = false; // 첫 진입은 count.js가 이미 집계했다.
      return;
    }
    window.goatcounter?.count?.({
      path: window.location.pathname + window.location.search,
    });
  }, [pathname]);

  return null;
}
