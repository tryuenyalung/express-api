
export default class AppServer{

    constructor(app){
        
        const PORT = 3000
        app.listen(PORT, () =>  console.log(`${new Date().toLocaleString()} server : started at port ${PORT}`) )
        
    }//@end
}