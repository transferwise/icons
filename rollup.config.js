import typescript from 'rollup-plugin-typescript2';
import analyze from 'rollup-plugin-analyzer';
import pkg from './package.json';
import { terser } from "rollup-plugin-terser";

export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      name: pkg.name,
      format: 'umd',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
      }
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
    }),
    terser(),
    analyze({ summaryOnly: true }),
  ],
}