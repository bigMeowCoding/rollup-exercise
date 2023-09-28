import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'

export default {
  input: 'src/index.ts',
  plugins: [
    typescript({ target: 'es5' }),
    del({ targets: 'dist/*' }), // 在构建前删除 dist 目录的内容
  ],
  output: {
    dir: 'dist',
    format: 'cjs',
    // format: 'umd',
  },
}
