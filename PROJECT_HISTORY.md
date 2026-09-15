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

### 2026-09-14 — Search Console 인증 및 sitemap 제출 완료

- Cloudflare Pages production deployment `bb2b942c-6a6e-43ad-947c-5342751fb361`가 build/deploy 모두 성공했고 `home.emfls.com` alias를 확인했다.
- Search Console에서 URL 접두어 속성 `https://home.emfls.com/`의 HTML 태그 소유권 확인이 성공했다.
- Search Console sitemap 제출 URL은 `/sitemap.xml`이며, 제출 결과는 `성공`, 발견된 페이지 25개, 동영상 0개로 표시되었다. 404 페이지는 sitemap 정책상 제외되어 정적 build 26페이지와 차이가 난다.
- Search Console 개요는 새 속성 데이터 처리 중 상태이며, 검색 실적·색인 데이터는 며칠 후 확인해야 한다.
- 라이브 홈페이지는 브라우저에서 정상 로드되었고 새 문제 바로가기와 12개 가이드 링크를 확인했다.
- 로컬 production 산출물에서 GA4 스크립트 1회, measurement ID `G-3250GECR4K` 2회(스크립트 URL 및 설정), Search Console 인증 메타태그 1회를 확인했다.
- GA4 데이터 스트림은 생성 직후라 `최근 48시간 동안 수신한 데이터가 없습니다` 상태였으며, 실제 실시간 수집 확인은 다음 작업으로 남겼다.

### 2026-09-14 — 초기 색인 및 GA4 실제 수집 점검

- Search Console 개요는 실적·색인 데이터 처리 중 상태였다.
- URL 검사 결과 `https://home.emfls.com/` 홈은 `URL이 Google에 등록되어 있음`, `페이지 색인이 생성됨`으로 확인했다.
- 대표 가이드 `https://home.emfls.com/guides/bathroom-fan-odor/`는 `Google에는 아직 알려지지 않은 URL` 상태였다.
- 해당 가이드 1개만 색인 생성 요청했고, Google의 우선순위 크롤링 대기열에 정상 등록되었다. 전체 URL 일괄 요청은 하지 않았다.
- 라이브 HTML 점검에서 최초 GA4 인라인 초기화 코드가 Astro 템플릿 문자열로 잘못 출력되는 문제를 발견했다.
- `src/layouts/BaseLayout.astro`의 초기화 코드를 일반 inline JavaScript로 최소 수정했다. 수정 후 production HTML은 외부 GA 스크립트 1회와 `gtag('config', 'G-3250GECR4K')`를 정상 포함한다.
- 수정 commit `8aa2245cad98090f34319da7e828be64e3c259f3`를 push했고 Cloudflare deployment `0b3701a6-3a26-4c81-ab25-8d1c4fca3edd`가 build/deploy 모두 성공했다.
- 수정 후 실제 live 방문을 발생시켰지만 GA4 `emfls-home` 실시간 개요는 활성 사용자 0명·사용 가능한 데이터 없음으로 표시됐다. 따라서 GA4 실제 수집 성공으로 기록하지 않으며, 브라우저 확장 차단 여부와 Google 처리 지연을 다음 점검에서 다시 확인한다.
- 라이브 직접 응답에서 canonical은 `https://home.emfls.com/`, sitemap은 25개 indexable URL, robots는 `Allow: /`로 확인했다.
- 코드·콘텐츠·디자인·DNS 변경은 GA4 초기화 오류 수정 외에 하지 않았고, 다른 `emfls-*` 저장소도 수정하지 않았다.

### 2026-09-14 — 초기 Search Console·GA4 데이터 재점검

- Git 상태는 `main`과 `origin/main`이 동기화되어 있었고 작업 트리는 깨끗했다.
- Search Console sitemap `/sitemap.xml`은 계속 `성공`, 발견 페이지 25개, 동영상 0개로 표시됐다.
- URL 검사 표본 결과:
  - 홈 `/`: Google 등록 및 색인 완료.
  - `guides/bathroom-fan-odor/`: Google 등록 및 색인 완료.
  - `guides/boiler-water-too-hot/`: 아직 Google에 알려지지 않은 URL.
  - `guides/window-condensation/`: 아직 Google에 알려지지 않은 URL.
- 보일러·창문 결로 URL에는 반복적인 색인 요청을 하지 않았다. sitemap과 내부 링크를 통한 자연 크롤링을 우선한다.
- Search Console 검색 실적은 최종 업데이트 시각은 표시됐지만 `데이터를 처리하는 중` 및 `데이터 없음` 상태였다. 클릭·노출·CTR·평균순위·query/page 데이터는 아직 분석하지 않는다.
- GA4 `emfls-home` 실시간 개요는 라이브 방문 후에도 활성 사용자 0명, page view 등 사용 가능한 데이터 없음으로 표시됐다. production HTML 자체는 외부 스크립트 1회와 정상 `gtag` 초기화를 확인했으므로, 재수정 대신 처리 지연 또는 브라우저 환경 가능성을 남긴다.
- GA4·Search Console 모두 데이터 부족 상태이며 제목, 설명, 콘텐츠, 내부 링크, DNS, Cloudflare 설정은 변경하지 않았다.
- 다음 판단 기준은 Search Console에 실제 query/page 데이터가 쌓이고 GA4 실시간 또는 최근 데이터가 발생한 뒤 CTR·순위·페이지별 성과를 함께 비교하는 것이다.

### 2026-09-14 — GA4 실시간 수집 확인

- Search Console sitemap은 계속 `성공`, 발견 페이지 25개, 동영상 0개로 유지됐다.
- 기존 미등록 URL 재검사 결과 `guides/boiler-water-too-hot/`와 `guides/window-condensation/` 모두 아직 Google에 알려지지 않은 URL이었다. 기술적 오류나 canonical·robots 오류는 확인되지 않았으며, 반복 색인 요청은 하지 않았다.
- Search Console 검색 실적은 최종 업데이트 시각은 갱신됐지만 여전히 `데이터를 처리하는 중` 및 `데이터 없음` 상태였다. 클릭·노출·CTR·평균순위·query/page 분석은 보류한다.
- GA4 `emfls-home` 실시간 개요에서 활성 사용자 1명, 페이지 제목 `집관리 매뉴얼 | 집에서 바로 찾는 생활 관리 매뉴얼` 1건, 이벤트 `first_visit`·`page_view`·`session_start` 각 1건을 확인했다.
- GA4 실제 production 수집이 확인되었으므로 코드·태그·Measurement ID는 추가 수정하지 않는다.
- 이번 점검에서 콘텐츠, SEO 문구, 내부 링크, DNS, Cloudflare, 의존성은 변경하지 않았다.
- 판단: GA4는 정상 수집, Search Console은 추가 데이터 수집 대기 상태다.

### 2026-09-14 — Search Console·GA4 재확인

- Git 상태는 `main`과 `origin/main`이 동기화되어 있었고 작업 트리는 깨끗했다.
- Search Console sitemap `/sitemap.xml`은 `성공`, 발견 페이지 25개, 동영상 0개로 이전 점검과 동일했다.
- `guides/boiler-water-too-hot/`와 `guides/window-condensation/`는 다시 검사했지만 모두 `Google에 등록되어 있지 않음` 및 `Google에는 아직 알려지지 않은 URL` 상태였다.
- 두 URL 모두 기술적 오류, robots 차단, canonical 오류가 확인되지 않아 색인 요청을 반복하지 않았다.
- Search Console 검색 실적은 여전히 `데이터를 처리하는 중` 및 `데이터 없음` 상태였다. 클릭·노출·CTR·평균순위·query·page 기반 최적화 후보는 만들지 않았다.
- GA4 실시간 개요는 활성 사용자 1명, 홈페이지 페이지 제목 3건, `page_view` 3건으로 실제 수집을 유지하고 있었다. 수집 오류나 중복 태그 증거는 없었다.
- 이번 점검에서 코드, 콘텐츠, title, description, 내부 링크, Cloudflare, DNS, 의존성은 변경하지 않았다.
- 판단: GA4는 정상 수집 중이며, Search Console은 추가 데이터 수집 대기 상태다.

### 2026-09-15 — EMFLS Network Baseline v1 적용

- 기존 `emfls-home` 디자인과 콘텐츠를 유지하면서 운영·SEO·Trust·Repo 문서 기준만 정리했다.
- `astro.config.mjs`에 `trailingSlash: 'always'`를 명시하고 홈, category, guide, 정책·안내 페이지 내부 링크와 sitemap URL을 trailing slash 규격으로 통일했다.
- sitemap은 단일 `/sitemap.xml`을 유지하며 홈, About, Privacy, Contact, Editorial Policy, category, guide의 canonical URL만 포함하도록 보완했다. 404는 `noindex`이며 sitemap에서 제외된다.
- 공통 SEO head에 canonical, robots 조건, Open Graph, Twitter 카드, theme-color, favicon, Home 전용 `public/og-home.svg`를 확인·보완했다.
- 홈은 WebSite JSON-LD를 유지하고 가이드에는 Article과 BreadcrumbList JSON-LD를 추가했다. 리뷰·평점·가격 등 허위 schema는 추가하지 않았다.
- GA4 Measurement ID `G-3250GECR4K`는 유지하며 `home.emfls.com` hostname에서만 실행되도록 제한했다. localhost, pages.dev, workers.dev, preview에서는 실행되지 않는다.
- 기존 문서의 AdSense 미사용 정책을 존중해 loader는 추가하지 않고, 승인·Privacy 검토 후 결정할 보류 사항으로 기록했다.
- Home 전용 Editorial Policy 페이지를 추가하고 Footer·sitemap에 연결했다. CONTENT_POLICY.md, LAUNCH_CHECKLIST.md, REPOSITORY_CONNECTION.md를 추가했다.
- 초기 연결 기록은 `CONNECTION.md`에 보존하고 최신 운영 상태는 `REPOSITORY_CONNECTION.md`로 분리했다.
- Cloudflare Pages 및 중복 Worker는 확인 후 영향 범위가 불명확하면 삭제하지 않는다. Worker custom domain·route 수동 확인이 남아 있다.
- Cloudflare API 확인 결과 Pages 프로젝트 `emfls-home`은 GitHub `emfls/emfls-home`의 `main`에 연결되어 있고 custom domain `home.emfls.com`을 사용한다. 계정의 Workers scripts/domains 목록에는 별도 Worker와 Worker domain이 없어 삭제 작업은 하지 않았다.
- 로컬 build 성공: Astro static `27 page(s) built`; Editorial Policy 1개 증가가 예상과 일치한다. 산출물에서 sitemap 26개 URL, 가이드 12개 Article·BreadcrumbList, 다른 프로젝트 도메인 문자열 없음, AdSense 코드 없음, pages.dev/workers.dev canonical 없음, GA 실행 조건은 custom hostname 조건으로 확인했다.
- production 반영 전 최종 작업: Git diff·push 후 Cloudflare Pages 새 deployment와 `home.emfls.com` live QA를 확인한다.
- Git commit `1a506dd9cdb5cd411c62c68f74be481d1f0195ce` (`chore: align home site with network baseline`)를 `main`에 push했다.
- Cloudflare Pages deployment `609e4456-2631-4837-a9a7-c80fd84eca4a`는 build/deploy 모두 성공했고 `home.emfls.com` alias를 확인했다.
- production live QA 결과: 홈, About, Contact, Privacy, Editorial Policy, 대표 보일러 가이드, robots.txt, sitemap.xml은 200; 존재하지 않는 경로는 404였다. sitemap은 26개 canonical URL을 반환했다.
- production homepage에서 canonical `https://home.emfls.com/`, Home OG 이미지, Twitter 카드, Measurement ID를 확인했다. GA script는 custom hostname 조건을 포함한다.
- 이번 Baseline 작업의 최종 판단: 구현·배포·live QA 완료. Search Console 검색 데이터 대기와 AdSense 결정, 중복 Worker 수동 확인은 별도 운영 대기 사항이다.

### 2026-09-15 — 네이버 소유확인 파일을 Astro public 디렉터리로 이동

- 네이버 소유확인 파일의 원본 내용은 변경하지 않고 `public/naver6dde13e69fe8ec25cd17e085c65c2124.html`로 이동했다.
- repo root의 중복 파일은 제거했다. `npm run build` 후 `dist/naver6dde13e69fe8ec25cd17e085c65c2124.html` 생성을 확인한다.

### 2026-09-15 — 네이버 소유확인 파일 교체

- 기존 `naver6dde13e69fe8ec25cd17e085c65c2124.html`을 제거하고 새 `naverf4203719e5de99ea87ed7d6465fa73d6.html`을 `public/`에 추가했다.
- 새 파일명과 네이버가 제공한 인증 내용을 그대로 유지한다.
