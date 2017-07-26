import express from 'express'
import api from './api/api'
const port = process.env.PORT || 8080
const app = express()
app.use('/api', api)
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})