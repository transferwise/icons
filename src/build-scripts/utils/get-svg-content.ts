/* eslint-disable fp/no-mutation */
import { parseSync, stringify, INode } from 'svgson';
import SVGO from 'svgo';
import { Icon, readFile } from './index';

interface SvgContent {
  react: string;
  angular: string;
}

export interface SvgContentForVariantsAndSizes {
  [key: string]: {
    [key: number]: SvgContent;
  };
}

const svgo = new SVGO();

/**
 * Transform function that is applied for each node in the AST
 * Removes hardocded fill attributes to clean SVG paths
 * @param node
 */
const transformNode = (node: INode): INode => {
  const newNode = node;
  delete newNode.attributes.fill;

  return newNode;
};

// Read SVG file with svgson by parsing it into AST
export const readSvgFile = async (path: string): Promise<SvgContent> => {
  const svgBefore = readFile(path);
  const optimizedSvgContent = await svgo.optimize(svgBefore);

  // Convert attributes to camelCase for React
  const ASTforReact = parseSync(optimizedSvgContent.data, { transformNode, camelcase: true });
  const ASTforAngular = parseSync(optimizedSvgContent.data, { transformNode });

  // FIXME: stringify type expects INode not INode[], this still works
  const ASTforReactChildren = (ASTforReact.children as unknown) as INode;
  const ASTforAngularChildren = (ASTforAngular.children as unknown) as INode;

  return {
    react: stringify(ASTforReactChildren),
    angular: stringify(ASTforAngularChildren),
  };
};

// get content for each variant and size
export const getSvgContent = async (icon: Icon): Promise<SvgContentForVariantsAndSizes> => {
  const variants = Object.keys(icon.svgFiles);
  const svgContentForVariantsAndSizes: SvgContentForVariantsAndSizes = {};

  await variants.forEach(async variant => {
    const sizes = Object.keys(icon.svgFiles[variant]);
    svgContentForVariantsAndSizes[variant] = {};

    await sizes.forEach(async size => {
      svgContentForVariantsAndSizes[variant][size] = await readSvgFile(
        icon.svgFiles[variant][size],
      );
    });
  });

  return svgContentForVariantsAndSizes;
};
