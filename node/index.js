const http=require("http")
const server=http.createServer((req,res)=>{
    res.write("Hello from Server")
    res.end()
})
server.listen(8000)