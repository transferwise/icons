const path = require('path');
const ejs = require('ejs');
const mkdirp = require('mkdirp');
const fs = require('fs');

const { getIconNames } = require('../utils/icon');


const TEMPLATE_PATH = path.join(__dirname, 'views', 'index.ejs');
const DEMO_PATH = path.join(__dirname, '..', '..', 'demo');

function build() {
  const names = getIconNames();

  ejs.renderFile(TEMPLATE_PATH, { names }, {}, (err, str) => {
    mkdirp.sync(DEMO_PATH);
    fs.writeFileSync(path.join(DEMO_PATH, 'index.html'), str);
  });
}

module.exports = build;
