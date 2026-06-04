import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

async function convertDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir).filter(f => f.endsWith('.png') || f.endsWith('.jpg'));
  for (const file of files) {
    const inPath = path.join(dir, file);
    const outPath = path.join(dir, file.replace(/\.(png|jpg)$/, '.webp'));
    console.log(`Converting ${inPath} to ${outPath}...`);
    await sharp(inPath).webp({ quality: 80 }).toFile(outPath);
  }
}

async function main() {
  await convertDir('src/assets');
  await convertDir('src/assets/mainPage');
}
main();
