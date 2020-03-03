import { createIconComponentName, writeFile, Icon } from '.';

export const createIconsMap = paths => {

  const icons: { [key: string]: Icon } = {}

  paths.forEach(path => {
    // TODO: validate icon name and meta data (svg file name) to follow convention
    // validatePathToIcon(path);
    const [_, name, meta] = path.split('/');
    const [variant, sizeWithExtension] = meta.split('_');
    const size = sizeWithExtension.slice(0,2);

    if (!icons[name]) {
      icons[name] = {
        name,
        componentName: createIconComponentName(name),
        sizes: [size],
        svgFiles: {
          [variant]: {
            [size]: path,
          }
        }
      };
      return;
    } 

    // push new size if it's not in the sizes array yet
    if (!icons[name].sizes.includes(size)) {
      icons[name].sizes.push(size)
    }

    if (!icons[name].svgFiles[variant]) {
      icons[name].svgFiles[variant] = {};
    }

    icons[name].svgFiles[variant][size] = path;

    // save JSON to icons.json
    writeFile('./icons.json', JSON.stringify(icons,null,2));
  });

  return icons;
};