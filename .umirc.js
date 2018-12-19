export default {
  plugins: [
    ['umi-plugin-react', {
      dva: {
        immer: true,
      },
      antd: true,
      routes: {
        exclude: [/models\//, /components\//, /services\//],
      },
      // 解决 i18n 问题
      locale: {},
      // 切换底层库为 preact 或 react
      library: 'react',
      dynamicImport: {
        webpackChunkName: true,
        loadingComponent: './components/Loading.js',
      },
      dll: {
        exclude: [],
      },
      // 开启 webpack 缓存，二次启动时间减少 80%
      hardSource: true,
      pwa: false,
      // 开启高清方案
      hd: true,
      fastClick: true,
      // 开启 title 插件，设置 HTML title
      title: 'default title',
    }],
  ],
}
