const path = require(`path`)

module.exports = {
    siteMetadata: {
      title: ``,
        siteUrl: `https://www.thisisbrandon.xyz`,
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
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-netlify`,
      `gatsby-plugin-styled-components`,
    ]
}