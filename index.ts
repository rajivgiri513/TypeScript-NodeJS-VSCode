import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import { ConnectionOptions } from 'tls';

const app = express();
const PORT: number = 3000;
const mlabUser: string = 'root';
const mlabPass: string = 'root';

const dataConnection = (user: string , pass: string): string => {

return 'mongodb+srv://${user}:${pass}@cluster0.q34li.mongodb.net/linkedinDB?retryWrites=true&w=majority';
}

let database = dataConnection(mlabUser, mlabPass);
//Coinnection string
// mongoose connection
//Array Test
//let simpleArray: number[] = [1,2,3,4];
//mongoose.Promise = global.Promise;
mongoose.connect(database, {
    useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectionOptions);

// bodyparser setup
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