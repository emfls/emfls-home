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

### 2026-09-14 — Cloudflare Pages 연결

- Cloudflare 계정에서 기존 `emfls-site`와 다른 독립 프로젝트 `emfls-home`을 생성했다.
- GitHub `emfls/emfls-home`의 `main` 브랜치를 연결했다.
- Build command는 `npm run build`, output directory는 `dist`, root directory는 저장소 루트로 설정했다.
- 프로젝트 기본 주소는 `https://emfls-home.pages.dev`이다.
- 기존 `emfls.com` 및 다른 서브도메인 설정은 변경하지 않았다.
- GitHub 연결 직후 배포 목록은 비어 있어 main push로 첫 production 배포를 트리거한다.

### 2026-09-14 — Production 배포 완료

- Cloudflare Pages production 배포 성공: `https://3d83e234.emfls-home.pages.dev`
- `home.emfls.com` 커스텀 도메인을 Pages 프로젝트에 연결했다.
- DNS CNAME `home.emfls.com → emfls-home.pages.dev`를 추가했다.
- 인증서 검증을 위해 승인받은 범위에서 프록시를 일시적으로 DNS-only로 전환했고, HTTPS 검증 완료 후 프록시를 다시 활성화했다.
- `https://home.emfls.com/`에서 홈페이지 200 응답과 실제 콘텐츠를 확인했다.
- About 페이지와 존재하지 않는 경로의 custom 404를 production에서 확인했다.
- 배포 산출물에 404, 카테고리, 가이드, About, Privacy, Contact, robots.txt, sitemap.xml이 포함된 것을 확인했다.
- production canonical/내부 링크는 `home.emfls.com` 기준으로 생성된다.
- Git commit `d12b2a0e545a4751022f88c691e3f571afb38a66`을 `main`에 push했다.
- 다음 단계: 핵심 카테고리별 실제 집관리 가이드 확충.
### 2026-09-14 — 핵심 집관리 가이드 확충

- 검색 유입과 실제 사용 상황을 고려해 신규 집관리 가이드 10개를 추가했다.
  - 화장실 환풍구 담배 냄새
  - 욕실 배수구 냄새와 트랩
  - 보일러 온수가 지나치게 뜨거운 경우
  - 수도 수압 저하
  - 창문 결로
  - 벽지 곰팡이
  - 욕실 실리콘 곰팡이
  - 에어컨 실외기 환기와 과열
  - 세탁기 청소 주기와 냄새
  - 겨울철 수도 동파 예방
- 기존 창문 물때·싱크대 배수구 냄새 가이드도 동일한 데이터 구조로 보강했다.
- 모든 가이드에 `checkFirst`, 원인, 준비물, 단계, 금지사항, 전문가 판단 기준, 예방 방법, 관련 가이드, FAQ 필드를 적용했다.
- 상세 페이지 템플릿에서 먼저 확인할 것·자주 묻는 질문·이어 읽기 링크를 공통 렌더링하도록 확장했다.
- 콘텐츠는 일상적인 주택 관리 범위로 제한하고, 전기·가스·누수·곰팡이 등 안전 관련 항목은 무리한 자가 수리를 권하지 않도록 작성했다.
- 카테고리와 가이드 목록은 기존 `src/data` 기반 구조를 유지해 이후 가이드 추가 시 자동으로 카테고리 페이지와 sitemap에 반영되도록 했다.
- 다음 단계는 build, 링크, SEO 파일, 모바일·데스크톱 화면을 검증한 뒤 GitHub와 Cloudflare Pages에 반영하는 것이다.

### 2026-09-14 — 확충 콘텐츠 검증 및 production 반영

- `npm run build` 성공: 총 26개 정적 페이지 생성.
- 12개 가이드 URL이 `dist/sitemap.xml`에 포함되는 것을 확인했다.
- 새 가이드 상세 페이지에서 사전 점검, FAQ, 이어 읽기 링크가 실제로 렌더링되는 것을 확인했다.
- 홈페이지 문제 바로가기의 기존 의미 불일치 링크를 실제 관련 가이드 slug 기반으로 정리했다.
- Git commit `a8554ae2117904780edce9b0656ef67b8860edf4`를 `main`에 push했다.
- Cloudflare Pages production deployment `19e553de-7462-4a91-b62f-f342f34e696e`가 build/deploy 모두 성공했고 `home.emfls.com` alias를 확인했다.
- 브라우저에서 `https://home.emfls.com/guides/bathroom-fan-odor/`를 열어 새 상세 구조와 내부 링크를 확인했다.

### 2026-09-14 — Search Console·GA4 연결 준비

- Google Search Console에서 `https://home.emfls.com/` URL 접두어 속성을 생성했다.
- 소유권 확인은 DNS record를 변경하지 않는 HTML 메타태그 방식으로 선택했다.
- Google이 발급한 인증값은 공통 `src/layouts/BaseLayout.astro`의 `<head>`에 추가했다. 민감한 secret은 아니지만, 동일 속성 재인증에 필요한 값이므로 코드에 유지한다.
- 기존 GA4 계정 구조를 확인한 뒤 다른 사이트와 분리하기 위해 `emfls-home` 독립 속성을 생성했다.
- 웹 데이터 스트림: `https://home.emfls.com`, stream ID `15773785181`, measurement ID `G-3250GECR4K`.
- GA4는 공통 레이아웃에서 production build일 때만 Google tag를 한 번 로드하도록 구현했다. 새 analytics 라이브러리나 UI dependency는 추가하지 않았다.
- Privacy 페이지에 GA4의 수집 목적과 범위, Google 개인정보처리방침 링크를 최소한으로 반영했다. AdSense는 여전히 사용하지 않는다.
- 로컬 production build 성공 및 26개 정적 페이지 생성을 확인했다.
- 다음 단계: 배포 후 Search Console 소유권 확인·sitemap 제출, 라이브 페이지의 GA 태그·canonical·robots·sitemap 확인, GA4 실시간 수집 확인.
