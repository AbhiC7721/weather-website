const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

//To set up handlebars
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Abhinaba Chowdhury'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Abhinaba Chowdhury'
    })
})

app.get('/help', (req,res) => {
    res.render('help', {
        helpMessage: 'We are providing with some helpful message'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Philadelphia',
        forecast: "The temperature is 50 degrees"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
