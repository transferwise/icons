const path = require('path');
const fs = require('fs');


const ICONS_PATH = path.join(__dirname, '../icons');

function getIconFileNames() {
  const iconFiles = fs.readdirSync(ICONS_PATH).filter(file => file.endsWith('.svg'));

  return iconFiles;
}

function getIconNames() {
  const iconFileNames = getIconFileNames();
  const iconNames = iconFileNames.map(fileName => fileName.split('.')[0]);

  return iconNames;
}

module.exports = {
  ICONS_PATH,
  getIconFileNames,
  getIconNames,
};
