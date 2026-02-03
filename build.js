const fs = require('fs');
const path = require('path');
fs.mkdirSync('dist', { recursive: true });
fs.copyFileSync(path.join(__dirname, 'index.html'), path.join(__dirname, 'dist', 'index.html'));
fs.copyFileSync(path.join(__dirname, 'about.html'), path.join(__dirname, 'dist', 'about.html'));
console.log('Built: dist/index.html, dist/about.html');
