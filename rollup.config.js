import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  plugins: [ typescript(), terser({ format: { comments: false } }) ],
  output: [
    { file: 'dist/index.js', format: 'iife', name: 'HyperDOM' },
    { file: 'dist/index.cjs.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'esm' },
  ],
};
