import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import routes from './src/routes/crmRoutes';
import messenger from './src/controllers/createMessage';
import { Settings } from './settings';
import { Contact } from './src/controllers/crmController';


const app = express();
//const PORT: number = 3000;
//const mlabUser: string = 'root';
//const mlabPass: string = 'root';

//instance of our class

let messages = new messenger(Settings.PORT);
let getContact = new Contact();

const dataConnection =(user:string, pass: string): string => {

    return `mongodb+srv://${user}:${pass}@cluster0.q34li.mongodb.net/linkedinDB?retryWrites=true&w=majority`

}


let database = dataConnection(Settings.mlabUser, Settings.mlabPass);

mongoose.connect(database, {
    
    //useMongoClient:true
    
});
// bodyparser setup */ 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

//interface Name {
 ////   firstName: string;
//}

function nameCreator<T>(name: T): T{
    return name;
}
let myName = nameCreator<string>('Raj Giri, ');
let myAge = nameCreator<number>(37);

interface Warriors{
    weapon: string;
    skills: number;
}

interface Warriors{
    name: string;
    
}

let Batman: Warriors ={weapon: "Bat Mobile", skills: 10, name: "Raj G"}



// serving static files
app.use(express.static('public'));

app.get('/', (req, res) =>
    res.send(Batman)
);

app.listen(Settings.PORT, () =>
   console.log(myName, myAge, messages.messagePrint())
   
   
);
    const fs = require('fs');
    const out ={getContact}
    const myConsole = new console.Console(fs.createWriteStream('./output.txt'));
    myConsole.log(out);