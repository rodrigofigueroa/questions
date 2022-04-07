import express               from 'express'
import { loging, register_question, register_user } from '../controllers/auth'


const routes = express.Router()

routes.post("/register-question", register_question )

routes.post( '/register-user', register_user )
 
routes.post( '/log', loging )

module.exports = routes