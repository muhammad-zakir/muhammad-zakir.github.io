const ghpages = require('gh-pages');

ghpages.publish(
  '__sapper__/export',
  {
    branch: 'master',
    repo: 'https://github.com/muhammad-zakir/muhammad-zakir.github.io',
    user: {
      name: 'Muhammad Zakir',
      email: 'hi@zakir.id'
    }
  },
  () => {
    console.log('Deployment completed!')
  }
)
