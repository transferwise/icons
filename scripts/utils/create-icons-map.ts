import { createIconComponentName, writeFile, Icon } from '.';

export const createIconsMap = paths => {

  const icons: { [key: string]: Icon } = {}

  paths.forEach(path => {
    let [_, fileName] = path.split('/');

    // TODO: validate fileNames here
    const variant = fileName.match(/(outline|fill)/)[0];
    const size: number = Number(fileName.match(/([0-9]{2})/)[0]);
    const name: string = fileName.match(/.+?(?=\[)/)[0];

    if (!icons[name]) {
      icons[name] = {
        name,
        componentName: createIconComponentName(name),
        sizes: [size],
        pathToSvgfiles: {
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

    if (!icons[name].pathToSvgfiles[variant]) {
      icons[name].pathToSvgfiles[variant] = {};
    }

    icons[name].pathToSvgfiles[variant][size] = path;

    writeFile('./icons.json', JSON.stringify(icons,null,2));
  });

  return icons;
};