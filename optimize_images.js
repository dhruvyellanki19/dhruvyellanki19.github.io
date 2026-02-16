import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesDir = path.join(__dirname, 'public/images');
const optimizedDir = path.join(__dirname, 'public/images/optimized');

if (!fs.existsSync(optimizedDir)) {
    fs.mkdirSync(optimizedDir, { recursive: true });
}

const files = fs.readdirSync(imagesDir);

files.forEach(file => {
    if (['.png', '.jpg', '.jpeg', '.webp'].includes(path.extname(file).toLowerCase())) {
        const inputPath = path.join(imagesDir, file);
        const outputPath = path.join(optimizedDir, path.parse(file).name + '.webp');

        sharp(inputPath)
            .resize(800) // Resize to 800px width, auto height
            .webp({ quality: 80 }) // Convert to WebP with 80% quality
            .toFile(outputPath)
            .then(info => console.log(`Optimized ${file}: ${info.size} bytes`))
            .catch(err => console.error(`Error optimizing ${file}:`, err));
    }
});
