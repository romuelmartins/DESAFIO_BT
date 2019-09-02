const Pessoa = require('../models/pessoa');
const db = require('../models/pessoa');


let p1 =  new Pessoa("1", "romuel", "03091984", "M", "romuelmartins@gmail.com"); 
let p2 =  new Pessoa("2", "Pedro", "03091984", "M", "romuelmartins@gmail.com"); 
let p3 =  new Pessoa("3", "Karen", "03091984", "M", "romuelmartins@gmail.com"); 
let p4 =  new Pessoa("4", "Gabrille", "03091984", "M", "romuelmartins@gmail.com"); 

lista = [];
lista.push(p1);
lista.push(p2);
lista.push(p3);
lista.push(p4);

//Handle GET
exports.handleGetAll = function(req, res){
    res.status(200).json(lista);
}

//Handle GET with parameter
exports.handleGet = function(req, res){
    lista.forEach(element => {
        if(req.params.id === element.id){
            res.status(200).json(element);
        }  
    });
}

//Handle POST 
exports.handlePost = function(req, res){
    let p =  new Pessoa(); 
    p.id = (Math.floor(Math.random()*1000));
    p.name = req.body.name;
    p.birthday = req.body.birthday;
    p.gender = req.body.gender;
    p.email = req.body.email;
    lista.push(p);
    res.status(200).json({'id': p.id})

}
