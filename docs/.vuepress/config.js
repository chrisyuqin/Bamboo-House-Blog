module.exports = {
    title: 'BamBoo-House',
    description: 'Just playing around',
    base: '/',
    // .vuepress/config.js
    themeConfig: {
        lastUpdated: 'Last Updated', // string | boolean
        //   logo: '/assets/img/bamboo.png',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Microservice', link: '/microservice/' },
            { text: 'Vue', link: '/vue/' },
            { text: 'Tools', link: '/tools/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: {
            '/guide/': [
                {
                    title: '微服务基础知识',
                    collapsable: false,
                    children: [
                        ['微服务','微服务'],
                        ['Vue','vue'],
                        ['Tools-KN','Tools']
                    ]
                }
            ],
            '/microservice/': [
                {
                    title: '微服务基础知识',
                    collapsable: false,
                    children: [
                        ['微服务定义','微服务定义'],
                        ['微服务发展历史','微服务发展历史']
                    ]
                }
            ],
            '/vue/': [
                {
                    title: 'vue基础知识',
                    collapsable: false,
                    children: [
                        ['Vue学习参考网址','Vue学习参考网址'],
                        ['Vue的生命周期','Vue的生命周期']
                    ]
                }
            ],
            '/tools/': [
                {
                    title: 'Tools',
                    collapsable: false,
                    children: [
                        ['Mac上安装Yarn','Mac上安装Yarn'],
                    ]
                }
            ]
        }
    }
}
