module.exports = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: '**cloudflare-ipfs.com',
      },
      {
        protocol: 'https',
        hostname: '**63bedcf7f5cfc0949b634fc8.mockapi.io',
      },
      {
        protocol: 'https',
        hostname: '**images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.freecodecamp.org',
      },
      {
        protocol: 'https',
        hostname: '**ui-avatars.com',
      },
      {
        protocol: 'https',
        hostname: '**images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com',
      },
      {
        protocol: 'https',
        hostname: '**sm.ign.com',
      },
    ],
  },
};
