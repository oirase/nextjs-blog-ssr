/*
const redis = require('redis')

const client = redis.createClient(process.env.REDIS_URL)
client.on('error', function (err) {
  throw err
})
client.exists('frameworks', function (err, reply) {
  if (reply !== 1) {
    client.hmset('frameworks', {
      'javascript': 'AngularJS',
      'css': 'Bootstrap',
      'node': 'Express'
    })
  } else {
     console.log('exist');
  }
})

client.quit()
*/
