//배울때는 http로 하고 배포는 http2로 하자
const http = require('http');
const fs = require('fs');
const ejs = require('ejs');

console.log(http.STATUS_CODES);
console.log(http.METHODS);


const name = '줘니'
const courses = [
  {name : 'css'},
  {name : 'Java Script'},
  {name : 'Python'},
  {name : 'React !!'},
]


const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const url = req.url;

  res.setHeader('Content-Type', 'text/html');
  if(url === '/'){
    fs.createReadStream('./static/index.html').pipe(res);
  } else if (url=== '/template') {
    ejs.renderFile('./template/indexTemplate.ejs', {name, courses})
      .then(data => res.end(data))
      .catch(console.log)
  } else if ( url === '/json') {
    if(req.method === 'GET') {
      res.writeHead(200, {'content-type' : 'text/json'})
      res.end(JSON.stringify(courses))
    } else {
      const body = [];
      req.on('data', (chunk) => {
        body.push(chunk);
      })
      req.on('end', () => {
        console.log(body);
        const bodyStr = Buffer.concat(body).toString();
        console.log(bodyStr);
        const course = JSON.parse(bodyStr);
        courses.push(course);
        res.writeHead(201);
        res.end();
      })
    }
  }
});

server.listen(8080);