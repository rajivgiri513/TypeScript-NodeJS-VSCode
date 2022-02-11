import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import { ConnectionOptions } from 'tls';

const app = express();
const PORT: number = 3000;
/* const mlabUser: string = 'root';
const mlabPass: string = 'root';

const dataConnection = 'mongodb+srv://${user}:${pass}@cluster0.q34li.mongodb.net/linkedinDB?retryWrites=true&w=majority';

//let database = dataConnection();

mongoose.connect(dataConnection, {
    
    useMongoClient:true
    
} as mongoose.ConnectOptions );
// bodyparser setup */


//Coinnection string
mongoose.connect('mongodb+srv://root:root@cluster0.q34li.mongodb.net/linkedinDB?retryWrites=true&w=majority',{
   // useMongoClient:true
    
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`your server is running on port ${PORT}`)
);