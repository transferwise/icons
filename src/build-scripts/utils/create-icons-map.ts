/* eslint-disable fp/no-mutation */
import { createIconComponentName, writeFile, Icon } from './index';

const OLD_ICON_NAMES_MAP = {
  more: 'pips',
  cross: 'close',
  'chevron-left': 'left',
  'chevron-right': 'right',
  checkcircle: 'tickcircle',
  plus: 'topup',
  check: 'tick',
};

export interface IconsMap {
  [key: string]: Icon;
}

export const createIconsMap = (paths): IconsMap => {
  const icons: IconsMap = {};

  paths.forEach(path => {
    // TODO: validate icon name and meta data (svg file name) to follow convention
    const pathFragments = path.split('/');
    const name = pathFragments[2];
    const meta = pathFragments[3];
    const [variant, sizeWithExtension] = meta.split('_');
    const size = sizeWithExtension.slice(0, 2);

    if (!icons[name]) {
      icons[name] = {
        name,
        oldName: OLD_ICON_NAMES_MAP[name],
        componentName: createIconComponentName(name),
        sizes: [size],
        svgFiles: {
          [variant]: {
            [size]: path,
          },
        },
      };
      return;
    }

    if (!icons[name].sizes.includes(size)) {
      icons[name].sizes.push(size);
    }

    if (!icons[name].svgFiles[variant]) {
      icons[name].svgFiles[variant] = {};
    }

    icons[name].svgFiles[variant][size] = path;

    writeFile('./build/icons.json', JSON.stringify(icons, null, 2));
  });

  return icons;
};
