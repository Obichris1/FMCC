export default {
    async redirects() {
      return [
        {
          source: '/',
          has: [
            {
              type: 'host',
              value: 'fmccng.com',
            },
          ],
          destination: 'https://www.fmccng.com',
          permanent: true,
        },
      ];
    },
  };
  