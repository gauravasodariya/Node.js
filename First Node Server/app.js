const http=require('http'); 

function requestListener(req,res)
{
    console.log(req);
}  
const server=http.createServer(requestListener);
server.listen(3000,() =>{
    console.log(`Server running on address http://localhost:${3000}`);
}
);
