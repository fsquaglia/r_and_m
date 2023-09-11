const PORT = 3001;
const express = require ('express')
const router = require ('./routes/index')
const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());
 server.use("/rickandmorty", router)



//inicializar el servidor
server.listen(PORT, () => {
    console.log('Server raised in port ' + PORT)
});










/*
SIN EXPRESS
const http = require ("http");
const {getCharById} = require ("./controllers/getCharById");
// const data = require("./utils/data.js")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const {url} = req;

if (url.includes("/rickandmorty/character")) {
    const id = parseInt(url.slice(url.lastIndexOf("/")+1))
    
    getCharById(res,id);
    
 ------------------------------------------------  
 
 res.writeHead(200, {"Content-Type":"application-json"})
    return res.end(JSON.stringify(personaje));
}
if (url.includes("/rickandmorty/character")) {
  const id = parseInt(url.slice(url.lastIndexOf("/")+1))
    let personaje = {};

    for (let index = 0; index < data.length; index++) {
        if (data[index].id == id) {
        personaje = data[index];
        }
    }
   
    res.writeHead(200, {"Content-Type":"application-json"})
    return res.end(JSON.stringify(personaje));
}

})
.listen(3001, "localhost")
*/

