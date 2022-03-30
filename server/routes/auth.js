import express      from 'express'
import { message }  from '../controllers/auth'


const routes = express.Router()

routes.get("/:message", message )

module.exports = routes