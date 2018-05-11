import AppServer from "./AppServer";
import MongoDB from "./MongoDB";
import BodyParser from "./BodyParser";
import ExpressValidator from "./ExpressValidator";
import Routes from "./Routes";

// import mongoose from 'mongoose'
// import bodyParser from 'body-parser'
// import expressValidator from 'express-validator'

export default class Bootstrap{

    constructor(app){

        new AppServer(app)
        new MongoDB(app)
        new BodyParser(app)
        new ExpressValidator(app)
        new Routes(app)

        //404 page
        app.get('*', (req, res) => res.send('what???').status(404) )

        // const uri = 'mongodb://root:root@ds149134.mlab.com:49134/mydb'
        // const PORT = 3000

        // const options = {
        //     autoIndex: false, // Don't build indexes
        //     reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        //     reconnectInterval: 500, // Reconnect every 500ms
        //     poolSize: 10, // Maintain up to 10 socket connections
        //     // If not connected, return errors immediately rather than waiting for reconnect
        //     bufferMaxEntries: 0
        // }    

        // mongoose.connect(uri, options).then(
        //     () => { console.log(`${new Date().toLocaleString()} mongodb : connnection success`) },
        //     err => { console.error( err )}
        // )
        
        // bodyParser = new BodyParser(app)
        // // app.use( bodyParser.json() )
        // // app.use( bodyParser.urlencoded( {extended: true} ) )
        // app.use( expressValidator() )
        
        // app.listen(PORT, () =>  console.log(`${new Date().toLocaleString()} server : started at port ${PORT}`) )

    }

}