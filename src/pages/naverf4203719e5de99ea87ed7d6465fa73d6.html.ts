import type { APIRoute } from 'astro';

export const GET: APIRoute = () =>
  new Response('naver-site-verification: naverf4203719e5de99ea87ed7d6465fa73d6.html', {
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
