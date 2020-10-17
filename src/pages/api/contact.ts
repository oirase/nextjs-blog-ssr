
export default async function getData(req, res) {
  console.log(req)
  res.status(200).json({ test: 'hello'})
}
