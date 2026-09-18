const zlib = require('zlib');

/**
 * Nén chuỗi XML thành URL Draw.io mở trực tiếp trên trình duyệt
 * Chuẩn nén: Raw Deflate (-15 windowBits) + Base64
 */
function getDrawioUrl(xmlContent) {
  const deflated = zlib.deflateRawSync(Buffer.from(xmlContent, 'utf-8'));
  const base64 = deflated.toString('base64');
  return 'https://app.diagrams.net/#create=' + encodeURIComponent(base64);
}

module.exports = { getDrawioUrl };
