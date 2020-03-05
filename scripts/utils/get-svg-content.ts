/* eslint-disable fp/no-mutation */
import { parseSync, stringify } from 'svgson';
import SVGO from 'svgo';
import { Icon, readFile } from '.';

interface AstNode {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const svgo = new SVGO();

/**
 * Transform function that is applied for each node in the AST
 * Removes hardocded fill attributes to clean SVG paths
 * @param node
 */
const transformNode = (node: AstNode): AstNode => {
  const newNode = node;
  delete newNode.attributes.fill;

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
    const sizes = Object.keys(icon.svgFiles[variant]);
    svgContent[variant] = {};

    await sizes.forEach(async size => {
      svgContent[variant][size] = await readSvgFile(icon.svgFiles[variant][size]);
    });
  });

  return svgContent;
};
