import express from 'express'

var app = express()

app.get('*', (req, res) => {
  res.json({ Error: 'API route not found.' })
})
export default app