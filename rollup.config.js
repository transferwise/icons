import css from 'rollup-plugin-css-porter';
import typescript from 'rollup-plugin-typescript2';
import analyze from 'rollup-plugin-analyzer';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

const reactBundle = {
  input: 'build/index.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      },
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    typescript({
      // eslint-disable-next-line global-require
      typescript: require('typescript'),
    }),
    terser(),
    analyze({ summaryOnly: true }),
  ],
};

const angularBundle = {
  input: 'build/angular/index.js',
  output: {
    file: 'lib/angular/index.js',
    name: 'index.js',
    format: 'umd',
    globals: {
      angular: 'angular',
    },
  },
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [terser(), analyze({ summaryOnly: true })],
};

const cssBundle = {
  input: 'src/style/main.css',
  plugins: [css({ dest: 'lib/styles/main.css', raw: false })],
};

export default [reactBundle, angularBundle, cssBundle];
