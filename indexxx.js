const http = require('http');
const { readFile } = require('fs/promises');
const fs = require('fs');
const path = require('path');
//1 Start server
const server = http.createServer((request, response)=>{
    //console.log("hELO FROM SERVER")
    console.log('request.url :>> ', request.url);
    console.log('request.method :>> ', request.method);
    
    readFile('./pages/index.html', {encoding: 'utf-8' })
    .then(fileText => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html')
    response.end(fileText);
})
.catch(err => {
    response.statusCode = 500;
    response.end('error');
        });
    });
    
    

//2 -Run server
//http://localhost:5000
//
server.listen(5000, ()=> console.log("Server is Listening port 5000"))
 //////////////////////////////////////////////////////////////////////////////////
 const requestListener = (requst, response) => {
    const { method, url } = requst;
  
    switch (method) {
      case 'GET': {
        const pageName = url === '/' ? 'index.html' : url;
  
        // html
        if (/^.*\.html$/.test(pageName)) {
          const pagePath = path.join(__dirname, '/pages/', pageName);
  
          if (fs.existsSync(pagePath, { encoding: 'utf-8' })) {
            readFile(pagePath)
              .then(data => {
                // - файл є 200
                response.statusCode = 200;
                response.setHeader('Content-Type', 'text/html');
                response.end(data);
              })
              .catch(err => {
                // - файл є, але помилки при читанні 500
                response.statusCode = 500;
                response.end('Sever Error');
              });
          } else {
            // - файла немає 404
            response.statusCode = 404;
            response.end('Page not found');
          }
        } else {
          // не html 403
          response.statusCode = 403;
          response.end('You have no access');
        }
        break;
      }
      default: {
        response.statusCode = 400;
        response.end('Bad Request');
      }
    }
  };
  
  // 1 Create server
  const server = http.createServer(requestListener);
  
  // 2 Run server
  // http://localhost:5000
  server.listen(5000, () => console.log('Server is listening port 5000'));