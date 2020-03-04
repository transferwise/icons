/* eslint-disable fp/no-mutation */
import { parseSync, stringify } from 'svgson';
import SVGO from 'svgo';
import { Icon, readFile } from '.';

interface AstNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const svgo = new SVGO();

const transformNode = (node: AstNode): AstNode => {
  // Remove hardocded fill attributes and replace them with 'currentColor'
  const newNode = node;
  delete newNode.attributes.fill;
  Object.defineProperty(newNode.attributes, 'fill', {
    value: 'currentColor',
  });

  return newNode;
};

// Read SVG file with svgson by parsing it into AST
export const readSvgFile = async (path: string): Promise<string> => {
  const svgBefore = readFile(path);
  const optimizedSvgContent = await svgo.optimize(svgBefore);

  // Convert attributes to camelCase for React
  const svgsonOptions = { camelcase: true, transformNode };
  const AST = parseSync(optimizedSvgContent.data, svgsonOptions);

  return stringify(AST.children);
};

// get content for each variant and size
export const getSvgContent = async (icon: Icon): Promise<{ [key: string]: string }> => {
  const variants = Object.keys(icon.svgFiles);
  const svgContent = {};

  await variants.forEach(async variant => {
    svgContent[variant] = {};
    svgContent[variant][16] = await readSvgFile(icon.svgFiles[variant][16]);
    svgContent[variant][24] = await readSvgFile(icon.svgFiles[variant][24]);
  });

  return svgContent;
};
