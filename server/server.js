import express          from 'express'
import { readdirSync }  from 'fs'
import cors             from 'cors'
import mongoose         from 'mongoose'


const app     = express(),
      port    = process.env.PORT || 1024,
      morgan  = require( 'morgan' )

// Middlewares
app.use( cors() )
app.use( morgan( 'dev' ) )
require( 'dotenv' ).config()
app.use( express.json())
app.use( express.urlencoded({ extended: true }))

mongoose
  .connect(process.env.DATABASE)
  .then(( data ) => console.log( "Connected" ))
  .catch(( err ) => console.error( err ))
  
// Routes middlewares
readdirSync( "./routes" ).map( route =>
  app.use( "/api", require( `./routes/${ route }` ))
)

app.listen( port, () => console.log( `http://127.0.0.1:${ port }` ))