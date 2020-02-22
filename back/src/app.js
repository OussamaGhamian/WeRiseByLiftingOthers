import express from 'express';;
import bodyParser from 'body-parser'
import cors from 'cors';
const app = express();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true, limit:'50mb', parameterLimit: 9000000}));
// parse application/json
app.use(bodyParser.json({limit:'50mb'})); 
//make folder upload accessible for everyone.
app.use('/uploads',express.static('uploads'))
export default app;
