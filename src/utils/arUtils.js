export function normalizeScanPayload(input) {
  if (!input) {
    return '';
  }

  let candidate = String(input).trim();

  if (!candidate) {
    return '';
  }

  if (candidate.startsWith('puzzle:')) {
    candidate = candidate.slice('puzzle:'.length);
  }

  try {
    const parsedUrl = new URL(candidate);
    const queryCode =
      parsedUrl.searchParams.get('code') ||
      parsedUrl.searchParams.get('puzzle') ||
      parsedUrl.searchParams.get('id');

    if (queryCode) {
      candidate = queryCode;
    }
  } catch (error) {
    // Not a URL payload. Keep raw scan text.
  }

  return candidate.trim();
}

export function inferSourceType(url) {
  const value = String(url || '').toLowerCase();

  if (value.includes('youtube.com') || value.includes('youtu.be')) {
    return 'youtube';
  }

  if (value.includes('.m3u8')) {
    return 'hls';
  }

  if (value.includes('.mp4') || value.includes('.webm')) {
    return 'mp4';
  }

  return 'other';
}

const sourceWeight = {
  mp4: 10,
  hls: 20,
  youtube: 60,
  other: 100,
};

export function sortPlaybackSources(sources) {
  if (!Array.isArray(sources)) {
    return [];
  }

  return sources
    .filter((source) => source && source.url)
    .map((source) => {
      const type = source.type || inferSourceType(source.url);
      const inferredPriority = sourceWeight[type] || sourceWeight.other;

      return {
        type,
        url: String(source.url).trim(),
        priority: Number.isFinite(Number(source.priority))
          ? Number(source.priority)
          : inferredPriority,
      };
    })
    .filter((source) => source.url)
    .sort((a, b) => a.priority - b.priority);
}

export function extractYouTubeEmbedUrl(url) {
  if (!url) {
    return '';
  }

  try {
    const parsed = new URL(url);

    let videoId = '';

    if (parsed.hostname.includes('youtu.be')) {
      videoId = parsed.pathname.split('/').filter(Boolean)[0] || '';
    } else if (parsed.hostname.includes('youtube.com')) {
      if (parsed.pathname.startsWith('/shorts/')) {
        videoId = parsed.pathname.split('/')[2] || '';
      } else if (parsed.pathname.startsWith('/embed/')) {
        videoId = parsed.pathname.split('/')[2] || '';
      } else {
        videoId = parsed.searchParams.get('v') || '';
      }
    }

    if (!videoId) {
      return '';
    }

    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=1&playsinline=1&rel=0&loop=1&playlist=${videoId}`;
  } catch (error) {
    return '';
  }
}