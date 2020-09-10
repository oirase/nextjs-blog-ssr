export default (req, res) => {
  //res.status(200).json({ text: 'Hello' })
  //return {{ text: 'Hello '}}
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ name: 'John Doe' }))
}
