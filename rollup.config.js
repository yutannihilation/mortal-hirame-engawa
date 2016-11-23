import typescript from 'rollup-plugin-typescript';
import nodeResolve  from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default {
    entry: './main.ts',
    dest: './main.js',
    plugins: [
        typescript({
            typescript: require('typescript')
        }),
        nodeResolve({ jsnext: true, main: true }),
        babel({
            exclude: 'node_modules/**'
        })
    ]
}