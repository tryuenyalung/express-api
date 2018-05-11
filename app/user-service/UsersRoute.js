import express from 'express'
import UsersController from './UsersController'
import usersMiddleware from './UsersMiddleware'

const router = express.Router()
const usersController = new UsersController()


router.get(
    '/',
    usersController.findAll
)
            
// router.get(
//     '/:id', 
//     usersMiddleware.method,
//     usersController.method
// )

router.post(
    "/",
    usersMiddleware.validateUsers,
    usersController.add
)

// router.put(
//     '/:id', 
//     usersController.method
// )

// router.delete(
//     '/:id',
//     usersController.method
// )

export default router
