import glob from 'glob';
import fs from 'fs';
import { copyFileSync } from './utils';

const ICON_SET_DIR = 'assets'
const ICONS_DIR = './icons-v2';
const DEFAULT_VARIANT = 'outline';

console.time('Rename icon files');

glob(`${ICON_SET_DIR}/**/*.svg`, (err, paths: string[]) => {
  if (err) {
    console.warn(err);
  }

  // Create out dir if necessary
  if (!fs.existsSync(ICONS_DIR)) {
    fs.mkdirSync(ICONS_DIR);
  }

  paths.forEach(path => {
    const [_, size, svgFileName] = path.split('/');
    let name = svgFileName.replace('.svg','');

    let variant = DEFAULT_VARIANT;
    const variantIsFilled = name.indexOf('Fill') > 0;
    
    if(variantIsFilled) {
      name = name.replace('Fill', '').replace(' ', '');
      variant = 'fill';
    }

    const iconName = name.replace(/\s+/g, '-').toLowerCase();
    copyFileSync(path, `${ICONS_DIR}/${iconName}[${variant}](${size}).svg`, 'utf8')
  })
});

console.timeEnd('Rename icon files');





