module.exports = {
  title: 'Vue Router Tab',
  description: '基于 Vue Router 的路由页签组件',

  // 主题配置
  themeConfig: {
    // 页头
    displayAllHeaders: true,

    // 页头导航
    nav: [
      { text: '教程', link: '/guide.html' },
      { text: 'API', link: '/api.html' },
      { text: '实例', link: 'https://bhuh12.github.io/vue-router-tab/demo/' },
      { text: '主页', link: 'https://bhuh.net' }
    ],

    // 侧边栏
    sidebar: 'auto',

    // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
    repo: 'bhuh12/vue-router-tab',

    repoLabel: 'GitHub',

    // 假如文档放在一个特定的分支下：
    docsBranch: 'dev',
    
    lastUpdated: '上次更新: ',
  },

  // markdow 配置
  markdown: {
    lineNumbers: true,
  },

  plugins: ['@vuepress/back-to-top']
}