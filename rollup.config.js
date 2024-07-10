import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import path from 'path';

export default {
    input: 'src/simple-waves.js',
    output: [
        {
            file: path.join(__dirname, 'dist/cjs/simple-waves.js'),
            format: 'cjs'
        },
        {
            file: path.join(__dirname, 'dist/esm/simple-waves.js'),
            format: 'esm'
        },
        {
            file: path.join(__dirname, 'dist/umd/simple-waves.min.js'),
            format: 'umd',
            name: 'SimpleWaves',
            plugins: [terser()]
        }
    ],
    plugins: [
        babel({
            babelHelpers: 'bundled',
            exclude: 'node_modules/**',
            presets: [
                ['@babel/preset-env', { modules: false }]
            ]
        }),
        terser({
            compress: true,
            mangle: true
        })
    ]
}