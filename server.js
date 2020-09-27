
//const redis = require('redis')

//const client = require('redis').createClient('redis://h:pcc2666e7a4e5acc8e29f2c17804d4b4edaf3')
const client = require('redis').createClient(process.env.REDIS_URL)
client.on('error', function (err) {
  throw err
})

client.exists('frameworks', function (err, reply) {
  if (reply !== 1) {
    client.hmset('frameworks', {
      'javascript': 'AngularJS',
      'css': 'Bootstrap',
      'node': 'Express'
    }, function(err, res) {
      client.quit()
    })
  } else {
     console.log('exist');
     client.quit()
  }
})

