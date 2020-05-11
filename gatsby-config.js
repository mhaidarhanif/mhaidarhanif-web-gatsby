require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    shortTitle: `M Haidar Hanif`,
    title: `M Haidar Hanif · Educator, Engineer, Explorer`,
    description: `Educating and mentoring aspiring worldwide professional web and software developers.`,
    author: `@mhaidarh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog-posts`,
        path: `${__dirname}/src/blog-posts`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `M Haidar Hanif`,
        short_name: `M Haidar Hanif`,
        start_url: `/`,
        background_color: `#101010`,
        theme_color: `#101010`,
        display: `minimal-ui`,
        icon: `static/mhaidarhanif-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-emotion`,
      options: {
        // Accepts all options defined by `babel-plugin-emotion` plugin.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-v2`,
      options: {
        fonts: [
          {
            family: "Rubik",
            weights: ["400", "500"],
          },
          {
            family: "Playfair Display",
            weights: ["400"],
          },
        ],
      },
    },
    // To learn more, visit: https://gatsby.dev/offline // this (optional) plugin enables Progressive Web App + Offline functionality
    `gatsby-plugin-offline`,
  ],
}
