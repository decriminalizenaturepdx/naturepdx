const express = require('express')
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')
const { MongoClient } = require('mongodb');

/**
 * Initialization code
 */
const app = express()
const port = process.env.PORT || 3000
//let mongoInstance;
//const mongoUri = "mongodb+srv://naturepdxwebsite:password@cluster0-wzmm5.mongodb.net/test?retryWrites=true&w=majority";
//const mongoClient = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })

/**
 * Middleware
 */
app.use(bodyParser.json())
app.use(cors())
app.use(express.static('build'))
/**
 * Request Handlers
 */
const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
app.post('/api/newsletter', cors(), async (req, res) => {
  const { firstName: encodedFirstName, lastName: encodedLastName, email: encodedEmail } = req.body
  if (!encodedFirstName || !encodedLastName || !encodedEmail) {
    return res.sendStatus(400)
  }
  const subscriber = {
    firstName: decodeURIComponent(encodedFirstName),
    lastName: decodeURIComponent(encodedLastName),
    email: decodeURIComponent(encodedEmail),
  }
  if (!emailRegEx.test(subscriber.email)) {
    return res.sendStatus(400)
  }
  console.log('success!', subscriber)
  // try {
  //   const collection = mongoInstance.collection('subscribers');
  //   await collection.insetOne(subscriber)
  // } catch (err) {
  //   return res.sendStatus(400)
  // }
  res.sendStatus(200)
})


/**
 * Server start
 */
// client.connect(err => {
//   if (err) {
//     return console.log(err)
//   }
//mongoInstance = mongoClient.db('Cluster0');
app.listen(port, () => {
  console.log(`listening on ${port}`)
})
//})
