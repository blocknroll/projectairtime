/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Project Airtime",
    titleTemplate: "Project Airtime",
    author: "Chris Santacroce",
    description:
      "Project Airtime is a Nevada 501(c)(3) non-profit based in Draper, Utah. Our mission is take EVERYONE flying with a paraglider. When we say EVERYONE, we mean it. No exclusions. From special needs individuals to those with brain and spinal cord injuries. Individuals with illness, as well as the elderly and veterans. Our co-pilots have one thing in common, they want to fly!",
    siteUrl: "http://localhost:8000", // No trailing slash allowed!
    image: "project_airtime.jpeg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@projectairtime",
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images/`,
      },
    },
  ],
}
