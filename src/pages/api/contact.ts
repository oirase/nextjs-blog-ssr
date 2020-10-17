
export default async function getData(req, res) {
  //const { body } = req
  const test = req.body.test
  res.status(200).json({sample: test})
}
