import fs from "fs";
import path from "path";

const SUPPORTED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

/**
 * Returns a sorted list of image filenames found in /public/hero-images/.
 * Falls back to an empty array if the folder does not exist.
 * This runs server-side (Node.js) only — never called in the browser.
 */
export function getHeroImages(): string[] {
  const dir = path.join(process.cwd(), "public", "hero-images");

  try {
    const files = fs.readdirSync(dir);
    return files
      .filter((f) => SUPPORTED_EXTENSIONS.includes(path.extname(f).toLowerCase()))
      .sort();
  } catch {
    // Folder doesn't exist yet — return empty so carousel degrades gracefully
    return [];
  }
}
