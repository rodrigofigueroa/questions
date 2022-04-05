import express               from 'express'
import { register_question, register_user } from '../controllers/auth'


const routes = express.Router()

routes.post("/register-question", register_question )

routes.post( '/register-user', register_user )

module.exports = routes