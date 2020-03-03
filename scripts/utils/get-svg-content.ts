import { Icon, readFile } from './';
import { parseSync, stringify } from 'svgson';
import SVGO from 'svgo';

const svgo = new SVGO();

const transformNode = node => {
  // Remove hardocded fill attributes and replace them with 'currentColor'
  delete node.attributes['fill'];
  node.attributes['fill'] = 'currentColor'

  return node;
}

// Read SVG file with svgson by parsing it into AST
export async function readSvgFile(path) {
  const svgBefore = readFile(path);
  const optimizedSvgContent = await svgo.optimize(svgBefore);

  // Convert attributes to camelCase for React
  const svgsonOptions = { camelcase: true, transformNode }
  const AST = parseSync(optimizedSvgContent.data, svgsonOptions);

  return stringify(AST.children);
}

// get content for each variant and size
export const getSvgContent = async (icon: Icon) => {
  const variants = Object.keys(icon.svgFiles);
  const svgContent = {};
  
  for (let i = 0; i < variants.length; i++) {
    const variant = variants[i];
    svgContent[variant] = {};
    svgContent[variant][16] = await readSvgFile(icon.svgFiles[variant][16]);
    svgContent[variant][24] = await readSvgFile(icon.svgFiles[variant][24]);
  }

  return svgContent;
}