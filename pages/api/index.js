export default (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({name: 'John Doe'}))
}

export function add(a, b) {
  return a + b
}
