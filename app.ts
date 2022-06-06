import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv';

dotenv.config()

const app: Express = express();
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World, from express')
})

app.listen(port, () => {
  console.log(`[server]: Server is runnig at http://localhost:${port}/`)
})