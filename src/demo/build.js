const path = require('path');
const ejs = require('ejs');
const mkdirp = require('mkdirp');
const fs = require('fs');

const { getIconNames } = require('../utils/icon');


const TEMPLATE_PATH = path.join(__dirname, 'views', 'index.ejs');
const DEMO_STYLES_PATH = path.join(__dirname, 'styles.css');
const ICON_STYLES_PATH = path.join(__dirname, '..', '..', 'dist', 'icons.min.css');
const SPRITE_PATH = path.join(__dirname, '..', '..', 'dist', 'sprite.svg');
const DEMO_PATH = path.join(__dirname, '..', '..', 'demo');

function build() {
  const demoStyles = getDemoStyles();
  const iconStyles = getIconStyles();
  const sprite = getSprite();
  const names = getIconNames();

  const data = {
    demoStyles,
    iconStyles,
    sprite,
    names,
  };

  ejs.renderFile(TEMPLATE_PATH, data, {}, (err, str) => {
    mkdirp.sync(DEMO_PATH);
    fs.writeFileSync(path.join(DEMO_PATH, 'index.html'), str);
  });
}

function getDemoStyles() {
  return fs.readFileSync(DEMO_STYLES_PATH, 'utf-8');
}

function getIconStyles() {
  return fs.readFileSync(ICON_STYLES_PATH, 'utf-8');
}

function getSprite() {
  return fs.readFileSync(SPRITE_PATH, 'utf-8');
}

module.exports = build;
