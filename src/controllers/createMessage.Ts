import { prototype } from "stream";

export default class Messenger{
port: number;

constructor(port) {
    this.port=port 
}

messagePrint(){
    

    return `Node and Express server is running on port ${this.port}`

}

}

