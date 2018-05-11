import mongoose from 'mongoose'


export default class MongoDB{
    
    constructor(app){
        
        const uri = 'mongodb://root:root@ds149134.mlab.com:49134/mydb'

        const options = {
            autoIndex: false, // Don't build indexes
            reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
            reconnectInterval: 500, // Reconnect every 500ms
            poolSize: 10, // Maintain up to 10 socket connections
            // If not connected, return errors immediately rather than waiting for reconnect
            bufferMaxEntries: 0
        }    

        mongoose.connect(uri, options).then(
            () => { console.log(`${new Date().toLocaleString()} mongodb : connnection success`) },
            err => { console.error( err )}
        )

    }//@end
}