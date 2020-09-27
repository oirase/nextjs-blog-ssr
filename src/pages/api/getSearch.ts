import redis from 'redis'

export default async function getSearch(req, res) {
  const client = redis.createClient(process.env.REDIS_URL)
  client.on('error', function (err) {
    throw err
  })

  const body = req.body

  client.quit()

  res.json({
    body: body,
  })
}
