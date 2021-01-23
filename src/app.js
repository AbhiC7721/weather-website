const path = require('path')
const express = require('express')
const hbs =  require('hbs')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

//To set up handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
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
        title: 'Help',
        name: 'Abhinaba Chowdhury',
        helpText: 'We are providing help here'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Philadelphia',
        forecast: "The temperature is 50 degrees"
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title:'404 Error Page',
        name: 'Abhinaba Chowdhury', 
        errorMessage:'Help article not found'
    })
})

app.get('*',(req, res) => {
    res.render('404', {
        title:'404 Error Page',
        name: 'Abhinaba Chowhdury',
        errorMessage: 'Page not found'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
