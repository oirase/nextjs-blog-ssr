import redis from 'redis'

export default async function getSearch(req, res) {
  const client = redis.createClient(process.env.REDIS_URL)
  client.on('error', function (err) {
    throw err
  })

  const body = req.body
  console.log(req.body)
  let result = {}
  client.hgetall('frameworks', function (err, value) {
    result = value
    client.quit()
    res.json(result)
  })

  /*
  res.json({
    name: "apple"
  })
*/
  res.json(result)
}
