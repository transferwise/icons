import { Icon, readFile } from './';
import { parseSync, stringify } from 'svgson';
import SVGO from 'svgo';

const svgo = new SVGO();

// TODO: add `fill="currentColor"` to each path
// TODO: remove hardcoded fill values from files
// TODO: optimize SVGs

// Read SVG file with svgson by parsing it into AST
export async function readSvgFile(path) {
  const svgBefore = readFile(path);
  const optimizedSvgContent = await svgo.optimize(svgBefore);

  // Convert attributes to camelCase for React
  const svgsonOptions = { camelcase: true }
  const ast = parseSync(optimizedSvgContent.data, svgsonOptions);


  return stringify(ast.children);
}

// get content for each variant and size
export const getSvgContent = async (icon: Icon) => {
  const variants = Object.keys(icon.pathToSvgfiles);
  const svgContent = {};
  
  for (let i = 0; i < variants.length; i++) {
    const variant = variants[i];
    svgContent[variant] = {};
    svgContent[variant][16] = await readSvgFile(icon.pathToSvgfiles[variant][16]);
    svgContent[variant][24] = await readSvgFile(icon.pathToSvgfiles[variant][24]);
  }

  return svgContent;
}