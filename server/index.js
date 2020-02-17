const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.NODE_ENV === 'production' ? 80 : 3000

app.use(bodyParser.json())
app.use(cors())

const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
app.post('/api/newsletter', cors(), (req, res) => {
  const {
    firstName: encodedFirstName,
    lastName: encodedLastName,
    email: encodedEmail
  } = req.body
  if (!encodedFirstName || !encodedLastName || !encodedEmail) {
    return res.sendStatus(400)
  }
  const subscriber = {
    firstName: decodeURIComponent(encodedFirstName),
    lastName: decodeURIComponent(encodedLastName),
    email: decodeURIComponent(encodedEmail)
  }
  if (!emailRegEx.test(subscriber.email)) {
    return res.sendStatus(400)
  }
  console.log('success!', subscriber)
  // todo add data to DB
  res.sendStatus(200)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
