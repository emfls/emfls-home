# 프로젝트 진행 이력

### 2026-09-14

- `emfls/emfls-home`을 집관리/주택 생활 매뉴얼 사이트로 설계했다.
- Astro 정적 사이트를 선택해 Cloudflare Pages 배포와 SEO, 낮은 JavaScript 사용량을 우선했다.
- 카테고리와 가이드 데이터를 페이지와 분리했다.
- 문서·점검표·단계별 해결 절차 중심의 독립적인 디자인 방향을 확정했다.
- 홈, 카테고리, 샘플 가이드, About, Privacy, Contact와 SEO 기반을 구축했다.
- 주요 파일: `package.json`, `src/`, `public/`, `AGENTS.md`, `SITE_STRATEGY.md`, `TASKS.md`.
- 의존성 설치와 production build를 완료했고 15개 정적 페이지 생성을 확인했다.
- sitemap, robots, canonical, OG, JSON-LD와 주요 내부 링크를 점검했다.
- 남은 작업: 실제 검색형 가이드 콘텐츠 확장, 필요 시 검색 기능 검토.

### 2026-09-14 — 출시 전 QA

- 기존 문서와 Astro 구조를 재확인하고 다른 저장소는 수정하지 않았다.
- `README.md`와 실제 CSS·컴포넌트 기준의 `DESIGN_SYSTEM.md`를 추가했다.
- 커스텀 `src/pages/404.astro`를 추가해 홈과 카테고리로 돌아가는 경로를 제공했다.
- npm audit 결과 직접 의존성 `astro`에서 critical 1건, transitive `sharp`에서 high 1건, `esbuild`에서 low 1건을 확인했다.
- 세 취약점 모두 현재 설치 버전 범위를 벗어나며 fix는 Astro 7.3.2 major 업데이트만 제안되어, 강제 major 업그레이드는 하지 않았다. 현재 사이트는 정적 출력이며 sharp/esbuild는 빌드·개발 도구 경로에 해당한다.
- 주요 route, sitemap, robots, canonical, OG, favicon, HTML lang, H1과 JSON-LD를 검수했다.
- 360px·768px·1440px 기준 CSS 규칙을 확인했고 모바일 overflow를 유발하는 고정 폭 요소는 없었다.
- 최종 production build에서 404 포함 16개 정적 페이지 생성을 확인했다.
- 다음 단계는 Cloudflare Pages 배포와 커스텀 도메인 연결이다.
