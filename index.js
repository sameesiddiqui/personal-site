const express = require('express')
let app = express()

app.use(express.static('public'))

app.set('views', __dirname + '/views')
app.set('view engine', 'html')
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {
  res.render('index.html')
})

app.get('/about', (req, res) => {
  res.render('about.html')
})

app.listen(8080, () => {
  console.log('Listening on 8080...')
})
