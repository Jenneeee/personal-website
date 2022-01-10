module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-fontawesome-css`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`
  ],
  siteMetadata: {
    title: `Jenne Cattoor`,
    description: `Hi i'm Jenne. A UI/UX designer and front-end developer. I sometimes make websites`,
    author: `Jenne Cattoor`,
    keywords: `jenne cattoor, designer, developer, freelance, ui ux, front-end developer, portfolio`,
    url: "https://www.jennecattoor.com",
  },
}
