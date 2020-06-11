require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Pandas Eating Lots`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: "papa",
        apiKey: "185862596636687",
        apiSecret: "HHNdbkYid4RMDoC36dL7boqWCO0",
      },
    },
    {
      resolve: `gatsby-transformer-cloudinary`,
      options: {
        // cloudName: process.env.CLOUDINARY_CLOUD_NAME,
        // apiKey: process.env.CLOUDINARY_API_KEY,
        // apiSecret: process.env.CLOUDINARY_API_SECRET,
        cloudName: "papa",
        apiKey: "185862596636687",
        apiSecret: "HHNdbkYid4RMDoC36dL7boqWCO0",
        uploadFolder: "tutorial-part-four",
      },
    },
  ],
}
