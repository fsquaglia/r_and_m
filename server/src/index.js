const http = require ("http");
const {getCharById} = require ("./controllers/getCharById");
// const data = require("./utils/data.js")

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    const {url} = req;

if (url.includes("/rickandmorty/character")) {
    const id = parseInt(url.slice(url.lastIndexOf("/")+1))
    
    getCharById(res,id);
    
   
    // res.writeHead(200, {"Content-Type":"application-json"})
    // return res.end(JSON.stringify(personaje));
}
// if (url.includes("/rickandmorty/character")) {
//   const id = parseInt(url.slice(url.lastIndexOf("/")+1))
//     let personaje = {};

//     for (let index = 0; index < data.length; index++) {
//         if (data[index].id == id) {
//         personaje = data[index];
//         }
//     }
   
//     res.writeHead(200, {"Content-Type":"application-json"})
//     return res.end(JSON.stringify(personaje));
// }

})
.listen(3001, "localhost")