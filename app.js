const express = require('express');
const bodyParser = require('body-parser');

class App{
    constructor(){
        this.pessoaRouter = require('./routes/pessoa');
        this.express = express();
        this.middleware();
        this.pessoa();

    }
    middleware(){
        //instala os middleware
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));

    }
    pessoa(){
        //rota da api
        this.express.use('/api/pessoa', this.pessoaRouter);
        
    }
    error(){
        this.express.use(function(req, res, next){
            const error = new Error('Not found');
            error.status(404);
            next(error);
        });
    }
}

module.exports = new App().express;

