import express from 'express';;
import bodyParser from 'body-parser'
import cors from 'cors';
const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

export default app;
