const withImages = require('next-images');
// const projectsData = require('./data.js');
// const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) =>
  withImages({
    exportPathMap: async function (
      defaultPathMap,
      { dev, dir, outDir, distDir, buildId }
    ) {
      const paths = {
        '/': { page: '/' },
        '/aboutus': {
          page: '/aboutus',
        },
        '/contact': {
          page: '/contact',
        },
        '/platform': {
          page: '/platform',
        },
        '/blogs': {
          page: '/blogs',
        },
        '/blog': {
          page: '/blog',
        },
      };

      return paths;
    },
  });
