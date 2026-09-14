# home.emfls.com

집에서 생기는 문제를 원인, 점검, 해결 순서로 안내하는 주택 생활 관리 매뉴얼입니다.

## 기술 스택

- Astro 정적 사이트
- TypeScript와 자체 CSS
- 배포 기준 도메인: `https://home.emfls.com`

## 실행

```bash
npm install
npm run dev
npm run build
```

## 주요 디렉터리

- `src/data`: 카테고리와 가이드 콘텐츠
- `src/pages`: 페이지와 라우트
- `src/components`: 공통 UI
- `src/layouts`: 공통 HTML·SEO 레이아웃
- `src/styles`: 디자인 토큰과 반응형 CSS
- `public`: favicon, robots 등 정적 파일

새 가이드는 `src/data/guides.ts`, 카테고리는 `src/data/site.ts`에서 관리합니다.

## 관리 문서

`AGENTS.md`, `SITE_STRATEGY.md`, `DESIGN_SYSTEM.md`, `TASKS.md`, `PROJECT_HISTORY.md`를 확인합니다.
