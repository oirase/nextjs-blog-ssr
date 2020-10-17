
export default async function getData(req, res) {
  const { body } = req

  res.status(200).json(body)
}
