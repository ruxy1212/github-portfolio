// app/api/screenshot/route.ts

import { generateScreenshot } from '@/lib/utils/screenshot';
import { NextResponse } from 'next/server';

// Remove `revalidate` — it doesn't cache per query param.
// Per-URL caching is handled by Cache-Control headers
// (Vercel's CDN will cache by full URL including ?url= param).

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');

  if (!targetUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }

  // Optional: whitelist your own domains to prevent open proxy abuse
  // const allowed = ['https://yourdomain.com'];
  // if (!allowed.some((d) => targetUrl.startsWith(d))) {
  //   return new Response('Domain not allowed', { status: 403 });
  // }

  try {
    const imageBuffer = await generateScreenshot(targetUrl);

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/jpeg',
        // Vercel CDN caches per full URL (including query params).
        // s-maxage=86400 → cache for 1 day on the CDN edge.
        // stale-while-revalidate=43200 → serve stale for 12h while refreshing.
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    console.error('[screenshot]', error);
    return new Response('Failed to capture screenshot', { status: 500 });
  }
}