import fs from 'fs';

const content = fs.readFileSync('src/data/posts.ts', 'utf8');

const matches = content.matchAll(/slug:\s*'([^']+)'[\s\S]*?content:\s*`([\s\S]*?)`/g);
for (const match of matches) {
  const slug = match[1];
  const text = match[2];
  const wordCount = text.split(/\s+/).length;
  console.log(`${slug}: ${wordCount} words`);
}
