require('dotenv').config() // Read variables from .env
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5163

express()
  .use(express.static(path.join(__dirname, 'public')))
  .use(express.json)
  .use(express.urlencoded({ extended: true }))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', function (req, res) { // Home is grabbed | Step 5 in Routes
    res.render('pages/index')
  })

  .get('/health', function (req, res) { // Step 4 in Routes
    res.status(200).send('Healthy')
  })

  .get('/about', function (req, res) { // Step 6 in Routes
    res.render('pages/about')
  })

  .listen(PORT, () => console.log(`Listening on ${PORT}`))