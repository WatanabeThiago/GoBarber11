import { Router } from 'express'
import UserController from './controllers/UserController'
import AppointmentController from './controllers/AppointmentController'
const routes = Router()

routes.post('/users', UserController.create)
routes.get('/users', UserController.list)

routes.get('/appointments', AppointmentController.list)
routes.post('/appointments', AppointmentController.create)

export default routes;