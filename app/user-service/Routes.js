import usersRoute from './UsersRoute'


export default class Routes{
    
    constructor(app){

        app.use("/api/v1/users", usersRoute)
        
    }
}