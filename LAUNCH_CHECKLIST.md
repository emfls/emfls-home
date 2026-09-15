# Home Live QA 체크리스트

- `npm run build` 성공과 예상 정적 페이지 수 확인
- `/`, `/about/`, `/contact/`, `/privacy/`, `/editorial-policy/`, 주요 category·guide가 200인지 확인
- `/robots.txt`와 `/sitemap.xml` 응답·내용·production canonical 확인
- sitemap은 canonical URL만 포함하고 404·noindex 페이지를 제외
- 모든 페이지의 trailing slash, canonical, description, OG, Twitter, favicon, theme-color 확인
- 홈 WebSite, 가이드 Article·BreadcrumbList JSON-LD 확인
- GA4는 `home.emfls.com`에서만 로드되고 localhost·preview·pages.dev에서는 로드되지 않음
- AdSense는 승인·정책 결정 전 loader와 광고 위치를 임의로 추가하지 않음
- skip link, 키보드 focus, semantic header/nav/main/footer, alt, reduced-motion과 모바일 overflow 확인
- 존재하지 않는 URL에서 custom 404 UI와 적절한 404 응답 확인
- Git diff에 `emfls-home` 외 저장소 변경이 없고 main push 후 Pages 배포 성공 확인
