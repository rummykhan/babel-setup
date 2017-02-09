
module.exports = class Observer {

    constructor(){
        this.handlers = [];
        console.log('constructor called..');
        console.log('Do something stupid..');
    }

    attach(obj){
        this.handlers.push(obj)
    }


};