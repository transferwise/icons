# TransferWise SVG Icons

[![npm](https://img.shields.io/npm/v/@transferwise/icons.svg)](https://www.npmjs.com/package/@transferwise/icons)
[![GitHub release](https://img.shields.io/github/release/transferwise/icons.svg)](https://github.com/transferwise/icons/releases)
[![CircleCI](https://img.shields.io/circleci/project/github/transferwise/icons/master.svg)](https://circleci.com/gh/transferwise/icons)
[![npm](https://img.shields.io/npm/l/icons.svg)](https://github.com/transferwise/icons/blob/master/LICENSE)

![transferwise-icons-github-readme](https://user-images.githubusercontent.com/47105236/81312233-b1ba1080-9086-11ea-9f99-ae754b3387fe.png)

Set of SVG icons designed and built by TransferWise and distributed as React and AngularJS components.
Each Icon is designed in two sizes: **`16`** and **`24`** pixels.
The icon set has mostly **`outline`** icons but some of them also have **`filled`** variants.

#### TransferWise Icons v1 
You can find the documentation of `v1` icons [here](https://github.com/transferwise/icons/blob/f2d4b29847b3fa9ca488dac8acd5e2b75fc74291/README.md)

<!-- 
# Demo page of icons
TODO: Add demo link here once it's deployed to github pages 
-->

# Usage
## Install
```shell script
yarn add @transferwise/icons
```
or
```shell script
npm install @transferwise/icons
```
## Import and use it with
### React
[![Edit TransferWise Icons | React](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/transferwise-icons-react-5hhxb?fontsize=14&hidenavigation=1&theme=dark)

```ts
import { BankIcon } from '@transferwise/icons';

const YourComponent = () => <BankIcon size={24} filled />;
```

### AngularJS
[![Edit TransferWise Icons | Angular JS](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/transferwise-icons-angular-js-gwkoo?fontsize=14&hidenavigation=1&theme=dark)

```ts
import { TwIconsModule } from '@transferwise/icons/lib/angular';

// add it to the list of dependencies
angular.module('your-app-name', [TwIconsModule]);
```

and in template
```html
<tw-bank-icon size="24"></tw-bank-icon>

<tw-activity-icon size="24" filled="true"></tw-activity-icon>

<tw-balance-icon size="24" filled="$ctrl.isFilled"></tw-balance-icon>
```

# Styling

### Inline SVG alignment

⚠️ **Important:**
SVGs are inline elements and inline elements leave white space when rendered by browsers.
To save some headaches when aligning your icons, make sure you added this CSS rule to your global stylesheet. More info in this [Stack Overflow thread](https://stackoverflow.com/a/24626986/2650174).

```css
.tw-icon svg {
  display: block;
}
```

### Coloring Icons
The css rule `color` cascades to the `<svg>` shapes, because each inline SVG shapes all have the `fill` property set to `currentColor`. More info about [Cascading SVG Fill Color](https://css-tricks.com/cascading-svg-fill-color/). You can set the color of the icons, by simply using the following CSS

```css
/* to set the color of all the icons */
.tw-icon {
  color: #2ed06e;
}

/* to set the color of individual icons */
.tw-icon-activity {
  color: #00b9ff;
}
.tw-icon-fast-flag {
  color: #00b9ff;
}

/* if an icon inside another element should have a specific color */
.parent-element > .tw-icon-fast-flag {
  color: #00b9ff;
}

/* change the color of the icon on :hover */
.parent-element:hover > .tw-icon-fast-flag {
  color: red;
}
```

# Contributing

Add / remove / change icon(s) in the `icons` folder.
Follow the **naming convention**, use **kebab-case** for naming the icon and its folder.
For naming the SVG files in the folder, follow this pattern: `<<variant>>_<<size>>.svg`, e.g. `fill_16.svg` or `outline_24.svg`.

The build process for parsing, optimizing and generating individual icon components is done by TypeScript script files, that you can find the in the `/scripts` folder. [Rollup.js](https://rollupjs.org/guide/en/) is used for generating the ES and UMD bundles of the library.


Follow these steps, if you'd like to contribute to the project:

1. Run `yarn build` to check your changes.
1. For a single-run check of version match and linting errors, run `yarn test`.
1. **Bump version number in `package.json` according to [semver](http://semver.org/) and add an item to `CHANGELOG.md`**.
1. Submit your pull request from a feature branch and get code reviewed.
1. If the pull request is approved and the [CircleCI build](https://circleci.com/gh/transferwise/icons) passes, you will be able to merge with rebase.
1. Code will automatically be released to [GitHub](https://github.com/transferwise/icons/releases) and published to [npm](https://www.npmjs.com/package/@transferwise/icons) with the version specified in the changelog and package file.
