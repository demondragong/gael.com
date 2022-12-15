module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-portfolio-minimal",
      options: {
        siteUrl: "https://xn--gal-kma.com/", // Used for sitemap generation
        manifestSettings: {
          favicon: "./content/images/favicon.png", // Path is relative to the root
          siteName: "Gaël de Mondragon", // Used in manifest.json
          shortName: "Gaël", // Used in manifest.json
          description: "Gaël de Mondragon - Freelance web developer",
          startUrl: "/", // Used in manifest.json
          backgroundColor: "#FFFFFF", // Used in manifest.json
          themeColor: "#000000", // Used in manifest.json
          display: "standalone", // Used in manifest.json
        },
        contentDirectory: "./content",
        blogSettings: {
          path: "/blog", // Defines the slug for the blog listing page
          usePathPrefixForArticles: false, // Default true (i.e. path will be /blog/first-article)
        },
        googleAnalytics: {
            trackingId: "G-ERDQ3FBKZZ",
            anonymize: true, // Default true
            environments: ["production"] // Default ["production"]
        }
      },
    },
  ],
};
