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
    description: `The portfolio of Jenne Cattoor, a multidisciplinary designer and front-end developer based in Belgium. Creating digital experiences and visual identities.`,
    author: `Jenne Cattoor`,
    keywords: `jenne cattoor, portfolio, designer, developer, freelance, ui, ux, front-end developer, digital experiences, visual identities`,
    url: "https://www.jennecattoor.com",
  },
}
