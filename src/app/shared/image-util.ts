/**
 * Turns a user-selected image File into a resized, compressed data URL — entirely
 * in the browser, so no upload server is needed. The data URL can be stored with
 * the post and rendered directly in an <img src>.
 *
 * Downscaling keeps localStorage and the eventual export to a sensible size.
 */
export async function fileToResizedDataUrl(
  file: File,
  maxDim = 1280,
  quality = 0.82,
): Promise<string> {
  const original = await readAsDataUrl(file);
  const img = await loadImage(original);

  let { width, height } = img;
  const largest = Math.max(width, height);
  if (largest > maxDim) {
    const scale = maxDim / largest;
    width = Math.round(width * scale);
    height = Math.round(height * scale);
  }

  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return original;
  ctx.drawImage(img, 0, 0, width, height);

  // Prefer WebP; fall back to JPEG where the browser can't encode WebP.
  let out = canvas.toDataURL('image/webp', quality);
  if (!out.startsWith('data:image/webp')) {
    out = canvas.toDataURL('image/jpeg', quality);
  }
  return out;
}

function readAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('Could not read that image file.'));
    img.src = src;
  });
}
