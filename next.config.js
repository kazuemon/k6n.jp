const redirects = async () => {
  return [
    {
      source: '/tw',
      destination: 'https://twitter.com/kazuemon_0602',
      permanent: true
    },
    {
      source: '/gh',
      destination: 'https://github.com/kazuemon',
      permanent: true
    },
    {
      source: '/profcard',
      destination: 'https://profcard.info/u/sPkkk7IKGJeTH9PlBNyj4kBITFf1',
      permanent: true
    },
    {
      source: '/yt',
      destination: 'https://youtube.com/c/kazuemon',
      permanent: true
    },
  ]
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects,
  images: {
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = nextConfig;
