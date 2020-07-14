import { Icon, SvgContentForVariantsAndSizes, GENERATED_CODE_COMMENT, writeFile } from '.';
import { IconsMap } from './create-icons-map';

const getTemplate = (
  icon: Icon,
  hasFillVariant: boolean,
  svgContent: SvgContentForVariantsAndSizes,
): string => {
  if (hasFillVariant) {
    return `
<span ng-switch="$ctrl.size" ng-if="!$ctrl.filled" class="tw-icon tw-icon-${icon.name}">
  <svg ng-switch-when="24" width="24" height="24" fill="currentColor">
    ${svgContent.outline[24].angular}
  </svg>
  <svg ng-switch-default width="16" height="16" fill="currentColor">
    ${svgContent.outline[16].angular}
  </svg>
</span>
<span ng-switch="$ctrl.size" ng-if="$ctrl.filled" class="tw-icon tw-icon-${icon.name}">
  <svg ng-switch-when="24" width="24" height="24" fill="currentColor">
    ${svgContent.fill[24].angular}
  </svg>
  <svg ng-switch-default width="16" height="16" fill="currentColor">
    ${svgContent.fill[16].angular}
  </svg>
</span>`;
  }

  return `
  <span ng-switch="$ctrl.size" ng-if="!$ctrl.filled" class="tw-icon tw-icon-${icon.name}">
    <svg ng-switch-when="24" width="24" height="24" fill="currentColor">
      ${svgContent.outline[24].angular}
    </svg>
    <svg ng-switch-default width="16" height="16" fill="currentColor">
      ${svgContent.outline[16].angular}
    </svg>
  </span>
  `;
};

export const createAngularJsIconComponentContent = (
  icon: Icon,
  svgContent: SvgContentForVariantsAndSizes,
): string => {
  const variants = Object.keys(icon.svgFiles);
  const hasFillVariant = variants.length > 1;

  return `
${GENERATED_CODE_COMMENT}
export const ${icon.componentName}IconComponent = {
  bindings: {
    size: "<", ${hasFillVariant ? `\nfilled: "<",` : ''}
  },
  template: \`${getTemplate(icon, hasFillVariant, svgContent)}\`,
}`;
};

export const generateAngularJsIconModuleContent = (icons: IconsMap, targetDir: string): void => {
  const importStatements = [];
  const moduleComponents = [];

  Object.keys(icons).forEach(key => {
    const icon = icons[key];
    importStatements.push(
      `import { ${icon.componentName}IconComponent } from "./components/${key}-icon.component"`,
    );
    moduleComponents.push(
      `.component("tw${icon.componentName}Icon", ${icon.componentName}IconComponent)`,
    );
  });

  const angularJsModule = `${GENERATED_CODE_COMMENT}
import angular from "angular";
${importStatements.join('\n')}
import { IconComponent } from "./components/icon.component"
  
export const TwIconsModule = angular
  .module("tw.icons", [])
  ${moduleComponents.join('\n')}
  .component("twIcon", IconComponent)
  .name;  
`;

  writeFile(`${targetDir}/angular/index.js`, angularJsModule);
};

export const generateGeneralIconComponent = (icons: IconsMap, targetDir: string): void => {
  const components = Object.keys(icons).map(
      key =>
      `<tw-${key}-icon ng-switch-when="${key}" filled="$ctrl.filled" size="$ctrl.size"></tw-${key}-icon>`,
  );

  const content = `
  export const IconComponent = {
  bindings: {
    name: '<',
    size: '<',
    filled: '<',
  },
  template: \`
    <ng-switch on="$ctrl.name">
      ${components.join('\n')}
    </ng-switch>\`,
  };`;

  writeFile(`${targetDir}/angular/components/icon.component.js`, content);
};
