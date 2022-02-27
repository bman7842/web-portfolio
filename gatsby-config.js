const path = require(`path`)

module.exports = {
    siteMetadata: {
      title: `new`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: path.join(__dirname, `src`, `images`),
        },
      },
      'gatsby-plugin-postcss',
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
    ]
}