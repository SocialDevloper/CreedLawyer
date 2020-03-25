const fs = require('fs');

const requestHandler = (req,res) =>{
	const url = req.url;
	const method = req.method;

	if(url === '/')
	{
		res.write('<html>');
		res.write('<head><title>Form</title></head>');
		res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
		res.write('</html');
		return res.end();
	}

	if(url === '/message' && method === 'POST')
	{
		const body = [];
		req.on('data',(chunk) => {
			console.log(chunk);
			body.push(chunk);
		});

		req.on('end', () => {
			const parseBody = Buffer.concat(body).toString();
			const message = parseBody.split('=')[1];
			fs.writeFileSync('message.txt',message);
		});

		res.statusCode = 302;
		res.setHeader('Location','/');
		return res.end();
	}

	res.setHeader('Content-Type', 'text/html');
	res.write('<html>');
	res.write('<head><title>Node Js Page</title></head>');
	res.write('<body><h2>This is Node Js program</h2></body>');
	res.write('</html');
	res.end();
};


module.exports = requestHandler;

// same below
/*module.exports = {
	handler: requestHandler,
	someText : 'Some text called'
};*/

//same below
//module.exports.handler = requestHandler;
//module.exports.someText = 'same TExt called';

//same below
//exports.handler = requestHandler;
//exports.someText = 'same TExt called';
