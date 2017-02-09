
module.exports = class Observer {

    constructor(){
        this.handlers = [];
        console.log('constructor called');
    }

    attach(obj){
        this.handlers.push(obj)
    }

    doSomething(obj){
        console.log('do something');
    }

    justFunc(){
        console.log('just a function');
    }
}