const express = require("express")
const app = express();
const db = require('./Database/database')


//Insert
/*
let dados = {
    nomedacidade:"Marilia"
};

db.insert(dados).into("cidade").then(()=>{
    console.log("Inserindo: " + dados)
}).catch((err)=>{
    console.log("Delete: " + err)
});

*/

//Select
/*
db.select([
    "id",
    "nomedacidade",
    "usuario",
    "d_datacadastro",
    "t_horacadastro",
    "percentualmulta"
    
]).where({
    id: 2
}).table("public.cidade").then((dados)=>{
    console.log(dados)
}).catch((err)=>{
    console.log(err)
})

*/

let toStringQuery = db.select([
    "id",
    "nomedacidade",
    "usuario",
    "d_datacadastro",
    "t_horacadastro",
    "percentualmulta"
    
]).where({
    id: 2
}).table("public.cidade").toString() 
console.log(toStringQuery)


//Config Servidor
app.listen(8081, (req,res)=>[])