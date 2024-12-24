/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Видеопродакшн полного цикла`,
    sitesubtitle: `С 2009 года создаём профессиональные#видео высокого качества`,
    description: ``,
    author: `Ivan Shumilov`,
    siteUrl: `https://events.mustbefamily.com/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/icons/favicon256.png`,
      },
    },
  ],
}
