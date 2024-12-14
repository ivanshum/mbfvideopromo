/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  flags: {
    DEV_SSR: true,
  },
  siteMetadata: {
    title: `Видеопродакшн полного цикла`,
    sitesubtitle: `С 2009 года создаём профессиональные видео высокого качества`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/icons/favicon256.png`,
      },
    },
  ],
}
