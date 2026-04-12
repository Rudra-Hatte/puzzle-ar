const { v4: uuidv4 } = require('uuid');

function generateScanCode() {
  return `puz-${uuidv4().replace(/-/g, '').slice(0, 14)}`;
}

function normalizeScanPayload(input) {
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
    // The payload is not a URL, which is expected for many QR payloads.
  }

  return candidate.trim();
}

module.exports = {
  generateScanCode,
  normalizeScanPayload,
};
