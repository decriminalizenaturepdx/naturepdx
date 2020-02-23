const express = require('express')
const fetch = require('node-fetch');
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.json())
app.use(express.static('build'))

/**
 * Request Handlers
 */
const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
app.post('/api/newsletter', async (req, res) => {
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

  const body = {
    merge_fields: {
      FNAME: subscriber.firstName,
      LNAME: subscriber.lastName,
    },
    email_address: subscriber.email,
    status: 'subscribed'
  }

  try {
    const resp = await fetch(`https://us4.api.mailchimp.com/3.0/lists/${process.env.listID}/members`, {
      method: 'post',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Basic ${process.env.mailAuth}`
      },
    })
    const payload = await resp.json()
    if (payload.status > 200) {
      throw payload
    }
    console.log('success!', subscriber, payload)
    res.sendStatus(200)
  } catch (err) {
    console.log('Server error', err)
    res.sendStatus(500)
  }
})


/**
 * Server start
 */
app.listen(port, () => {
  console.log(`listening on ${port}`)
})

