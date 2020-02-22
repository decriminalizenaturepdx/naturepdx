const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('build'))

/**
 * Request Handlers
 */
const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
app.post('/api/newsletter', (req, res) => {
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
  res.sendStatus(200)
})


/**
 * Server start
 */
app.listen(port, () => {
  console.log(`listening on ${port}`)
})

