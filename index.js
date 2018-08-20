import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;


//mongoose connnection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb',{
    useMongoClient: true
});

//bodyparser setup
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

routes(app);

//static files
app.use( express.static("public") );

app.get('/', (req,res) => {
    res.send(`Node running on port ${ PORT }`);
});

app.listen(PORT, () => {
    console.log(`server running on port ${ PORT }`);
});