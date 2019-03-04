const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send({Hi: 'there'})
})

# Heroku environment variables
const PORT = process.env.PORT
app.listen(PORT)
