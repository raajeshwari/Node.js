const http=require('http');
http.createServer(function(req,res)
{
res.writeHead(300,{'Content-Type':'text/html'});
res.write('<h1>Oct-31  = Indra Gandhi death anniversary</h1>');
res.write('<h2>She was assasinated at her office by the security guard.</h2>');
res.end();
}).listen(3000);