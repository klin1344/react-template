import express from 'express'
const port = process.env.PORT || 8080
const app = express()
app.get('/api', (req, res) => {
  res.send('Hello world!')
})
app.get('*', (req, res) => {
  res.json({Error: 'API route not found.'})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
