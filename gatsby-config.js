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
    {
      resolve: "gatsby-plugin-sitemap",
      options: {
        excludes: ["/thx-conversion"],
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/icons/favicon256.png`,
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://events.mustbefamily.com/",
        sitemap: "https://events.mustbefamily.com/sitemap-index.xml",
        policy: [{ userAgent: "*", allow: "/", disallow: "/thx-conversion" }],
      },
    },
  ],
}
