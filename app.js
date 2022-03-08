const http = require('http');
const server =http.createServer((req,res)=>{
    console.log('url',req.url);
    if(req.url === "/"){
       res.setHeader('Content-Type','text/html');
       res.write("<h1>Home page</h1>")
       res.end();
    }else if(req.url==="/api/products"){
        const products = [
            {id:1,name:"Product A"},
            {id:2,name:"Product B"}
        ];
        res.end(JSON.stringify(products));
    }else{
        console.log('chịu không biết');
    }
});
const PORT = 3001;
server.listen(PORT, ()=>{
    console.log("Server is running port",PORT);
})