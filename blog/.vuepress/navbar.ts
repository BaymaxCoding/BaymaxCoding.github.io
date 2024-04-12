import { navbar } from "vuepress-theme-hope";

export default navbar([
  ,{
    text: '文章',
    icon: 'iconfont icon-icon-article',
    link: '/article/'
  },
  {
    text: "分类",
    icon: "iconfont icon-category",
    link: "/category/"
  },
  {
    text: "标签",
    icon: "iconfont icon-tag",
    link: "/tag/"
  },
  {
    text: "时间线",
    icon: "iconfont icon-article-line",
    link: "/timeline/"
  },
  {
    text: "命令",
    icon: "iconfont icon-command",
    children:[
      {
        text: 'linux',
        icon: 'iconfont icon-linux',
        link: '/command/linux/'
      }
    ],
  },
  {
    text: '联系我',
    icon: 'iconfont icon-email',
    link: '/about/'
  }
]);
