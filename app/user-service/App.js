import express from 'express' 
import Bootstrap from './Bootstrap'

const app = express() 
const bootstrap = new Bootstrap(app)


// //404 page
// app.get('*', (req, res) => res.send('what???').status(404) )

