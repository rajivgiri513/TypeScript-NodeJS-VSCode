function messagePrint(target){
    Object.defineProperty(target.prototype, 'server',{value: () => 'Node server is running'})
}

export default class Message{
    name;
    Constructor(name){
        this.name = name;
    }
}