import { Icon, SvgContentForVariantsAndSizes, GENERATED_CODE_COMMENT, writeFile } from '.';
import { IconsMap } from './create-icons-map';

export const createReactIconComponentContent = (
  icon: Icon,
  svgContent: SvgContentForVariantsAndSizes,
): string => {
  const variants = Object.keys(icon.svgFiles);
  const hasFillVariant = variants.length > 1;

  return `
${GENERATED_CODE_COMMENT}
import React, { FunctionComponent } from 'react';
import { IconSize } from '../types';

export interface ${icon.componentName}IconProps {
  size?: IconSize;
  ${hasFillVariant ? `filled?: boolean;` : ''}
  className?: string;
  title?: string;
  ['data-testid']?: string;
}

export const ${icon.componentName}: FunctionComponent<${
    icon.componentName
  }IconProps> = ({ size = 16, className = undefined, title = undefined ${
    hasFillVariant ? `, filled = false` : ''
  }, ...restProps }) => {
  return (
    <span
      className={\`tw-icon tw-icon-${icon.name} \${className ? className : ''}\`}
      aria-hidden={!title ? 'true' : undefined}
      role={!title ? 'presentation' : undefined}
      data-testid={restProps['data-testid']}
    >
      <svg width={String(size)} height={String(size)} fill="currentColor">
        { Number(size) === 16 ${hasFillVariant ? '&& filled === false' : ''} && (
          <>
            ${svgContent.outline[16].react}
          </>
        )}
        { Number(size) === 24 ${hasFillVariant ? '&& filled === false' : ''} && (
          <>
            ${svgContent.outline[24].react}
          </>
        )}
        ${
          hasFillVariant
            ? `
          { Number(size) === 16 && filled && (
            <>
              ${svgContent.fill[16].react}
            </>
          )}
          { Number(size) === 24 && filled && (
            <>
              ${svgContent.fill[24].react}
            </>
          )}
        `
            : ''
        }
      </svg>
      { title && <span className="sr-only">{title}</span> }
    </span>
  )
}
`;
};

export const generateAdditionalReactFiles = (icons: IconsMap, targetDir: string): void => {
  // Create index file that exports all the icons in the components folder
  const exportComponents = Object.keys(icons)
    .map(id => `export * from './${icons[id].name}';`)
    .join('\n');
  writeFile(`${targetDir}/components/index.ts`, exportComponents);

  // Create index file in ./${targetDir} folder for exporting everyhting from ./${targetDir}/components
  writeFile(`${targetDir}/index.ts`, `${GENERATED_CODE_COMMENT}\nexport * from "./components";`);

  // Create types file that exports common types
  writeFile(
    `${targetDir}/types.ts`,
    `${GENERATED_CODE_COMMENT}\nexport type IconSize = "16" | "24" | 16 | 24;`,
  );
};
