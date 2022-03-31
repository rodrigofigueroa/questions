import express               from 'express'
import { register_question } from '../controllers/auth'


const routes = express.Router()

routes.post("/register-question", register_question )

module.exports = routes