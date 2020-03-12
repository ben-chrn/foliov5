/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "BenChrn",
    titleTemplate: "%s | Front-end developer & Product designer",
    description:
      "I’m a front-end developer & product designer dedicated to building beautiful experiences and crafted material. I've had the chance to work on many amazing projects, which you can see a sample of on this website ! If something in here interests you, please reach out!",
    url: "https://benchrn.com", // No trailing slash allowed!
    image: "/meta_image.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ben-chrn",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Inter`,
            variants: [`Regular`, `Medium`, `Semibold`],
          }
        ]
      }
    }
  ],
}