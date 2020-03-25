const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=>{

	const method = req.method;
	const url = req.url;

	if(url === '/')
	{
		res.write("<html>");
		res.write("<head><title>User Form</title></head>");
		res.write("<body><form method='POST' action='/create-user'><input type='text' name='username'><button type='submit'>Add User</button></body>");
		res.write("</html>");
		return res.end();
	}

	if(url === '/create-user' && method === 'POST')
	{
		const body = [];
		req.on('data',(chunk) => {
			console.log(chunk);
			body.push(chunk);
		});

		req.on('end',()=>{

			const bodyParseData = Buffer.concat(body).toString();
			console.log(bodyParseData);

			const username = bodyParseData.split('=')[1];
			fs.writeFileSync("username.txt",username);
			
		});
		
		res.statusCode = 302;
		res.setHeader('Location','/');
		return res.end();
		
	}

	res.setHeader('Content-Type', 'text/html');
	res.write("<html>");
	res.write("<head><title>User Form</title></head>");
	res.write("<body><h2>Node Js from Get / method.</h2></body>");
	res.write("</html>");
	res.end();
}); 

server.listen(3000);