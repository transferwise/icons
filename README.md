# TransferWise Icons

[![npm](https://img.shields.io/npm/v/@transferwise/icons.svg)](https://www.npmjs.com/package/@transferwise/icons)
[![GitHub release](https://img.shields.io/github/release/transferwise/icons.svg)](https://github.com/transferwise/icons/releases)
[![CircleCI](https://img.shields.io/circleci/project/github/transferwise/icons/master.svg)](https://circleci.com/gh/transferwise/icons)
[![npm](https://img.shields.io/npm/l/icons.svg)](https://github.com/transferwise/icons/blob/master/LICENSE)

This is the TransferWise SVG icon set, [as seen in this demo](https://transferwise.github.io/icons).

The SVG icon sprite and demo are built using [create-svg-icon-sprite](https://github.com/transferwise/create-svg-icon-sprite).

# Documentation

More detailed documentation about icons, names, props etc. you can find on [Neptune Design System website](https://transferwise.github.io/neptune-web/icons/About).

# Usage

#### Yarn

```shell script
yarn add @transferwise/icons
```

#### NPM

```shell script
npm install @transferwise/icons -S
```

### React

The icons can be imported individually, allowing us to minimize our app sizes.

For example:
```js
import { Bank } from '@transferwise/icons';

const YourComponent = () => {

  return (<>...<Bank size={} />...</>)
};
```

### AngularJS

```js
import { TwIconsModule } from '@transferwise/icons/lib/angular';

// add it to list of dependencies
angular.module('your-app-name', [TwIconsModule]);
```

```html
<tw-bank-icon size="24"></tw-bank-icon>
```

### SVG Sprite

[A helpful general guide for SVG icon sprites - CSSTricks](https://css-tricks.com/svg-sprites-use-better-icon-fonts/)

### CDN

The assets are available at:

<https://daw291njkc3ao.cloudfront.net/icons/{version}/sprite.svg> (SVG sprite itself)
<https://daw291njkc3ao.cloudfront.net/icons/{version}/svg-icon-sprite.js> (sprite string script)
<https://daw291njkc3ao.cloudfront.net/icons/{version}/svg-icon-sprite-version.js> (sprite version script)
<https://daw291njkc3ao.cloudfront.net/icons/{version}/icons.min.css> (styles)

Where `{version}` is either the package version or `latest`.

### Usage from server side

Just append the sprite code (manually or in case of Node, by requiring it as a module) to your template
and use [like explained here](https://css-tricks.com/svg-sprites-use-better-icon-fonts/#article-header-id-2).

We recommend using the provided stylesheet for the classes below.

# Adding/removing/changing icons

1. If adding, minify your 24x24 SVG icon(s) (https://jakearchibald.github.io/svgomg/ using Precision 1)
1. Add/remove/change icon(s) in the `icons` folder.
1. Change `package.json` version (if doing multiple of these, follow the first one that applies):  
Removing an icon: _major_ release, f.e. `1.2.3 => 2.0.0`  
Adding an icon: _minor_ release, f.e. `1.2.3 => 1.3.0`  
Changing an icon: _patch_ release, f.e. `1.2.3 => 1.2.4`
1. Add a `CHANGELOG.md` entry with the version and an explanation of changes
1. Submit your pull request from a feature branch and get code reviewed.
1. If the pull request is approved and the [CircleCI build](https://circleci.com/gh/transferwise/icons) passes, you will be able to merge with rebase.
1. Code will automatically be released to [GitHub](https://github.com/transferwise/icons/releases) and published to [npm](https://www.npmjs.com/package/@transferwise/icons) with the version specified in the changelog and package file.
1. The [demo](https://transferwise.github.io/icons) will also automatically be built.

# Contributing

1. Develop
1. For a single-run check of version match and linting errors, run `npm test`.
1. **Bump version number in `package.json` according to [semver](http://semver.org/) and add an item that a release will be based on to `CHANGELOG.md`**.
1. Submit your pull request from a feature branch and get code reviewed.
1. If the pull request is approved and the [CircleCI build](https://circleci.com/gh/transferwise/icons) passes, you will be able to merge with rebase.
1. Code will automatically be released to [GitHub](https://github.com/transferwise/icons/releases) and published to [npm](https://www.npmjs.com/package/@transferwise/icons) with the version specified in the changelog and package file.
