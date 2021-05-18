const db = require('./database/database')
db.insert({
    Local_id: 1,
    id_Produto: 6,
    Nome: 'Celular',
    valor_produto: 100.00

}).table("estoque").then((data)=>{
    console.log(data)
})

db.select([
    "produtos.*"
]).table("produtos").then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})

db.select([
    
]).table('produtos').innerJoin("estoque", "estoque.id_Produto", "produtos.idProdutos").then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})