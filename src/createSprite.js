const SVGSpriter = require('svg-sprite');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');


const ICONS_PATH = path.join(__dirname, 'icons');
const SPRITE_PATH = 'dist';
const SPRITE_FILENAME = 'sprite.svg';

function createSprite() {
  const config = {
    dest: SPRITE_PATH,
    mode: {
      symbol: {
        dest: '.',
        sprite: SPRITE_FILENAME,
      },
    },
  };

  const spriter = new SVGSpriter(config);

  const iconFiles = fs.readdirSync(ICONS_PATH);

  iconFiles.forEach((fileName) => {
    spriter.add(
      path.join(ICONS_PATH, fileName),
      fileName,
      fs.readFileSync(path.join(ICONS_PATH, fileName), { encoding: 'utf-8' })
    );
  });

  spriter.compile((error, result) => {
    const modes = Object.keys(result);

    modes.forEach((mode) => {
      const types = Object.keys(result[mode]);

      types.forEach((type) => {
        mkdirp.sync(path.dirname(result[mode][type].path));
        fs.writeFileSync(result[mode][type].path, result[mode][type].contents);
      });
    });
  });
}

module.exports = createSprite;
