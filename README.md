# Learing Web Development

- 01-06: nodejs - modules: http, url
- 10-17: expressjs
- 20-2x: reactjs

************************************************************

- 01. create web server
- 02. add an HTTP header
- 03. read the query string
- 04. split the query string
- 05. read files
- 06. ready files by url

- 10. expressjs - environtment
- 11. hello world
- 12. routing
- 13. express routers
- 14. dynamic route
- 15. middleware
- 16. templating - pug
- 17. static files

- 20. reactjs - environtment
- 21. state and props, stateless and stateful component
- 22. higher order component

************************************************************

## 01. create web server
### source: https://www.w3schools.com/nodejs/nodejs_http.asp
- Nodejs has a built-in module called HTTP, which allows Nodejs to transfer data over the Hyper Text Transfer Protocol (HTTP)
- The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client

## 02. add an HTTP header
- If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
`res.writeHead(200, {'Content-Type': 'text/html'});`
- The first argument of the res.writeHead() method is the status code, 200 means that all is OK
- the second argument is an object containing the response headers

## 03. read the query string
- The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object)
- This object has a property called "url" which holds the part of the url that comes after the domain name
### Note: access: http://localhost:8080/hello

## 04. split the query string
- There are built-in modules to easily split the query string into readable parts, such as the URL module
### Note: access: http://localhost:8080/?year=2017&month=July

## 05. read files
### source: https://www.w3schools.com/nodejs/nodejs_filesystem.asp
- The Nodejs file system module allow us to work with the file system on our computer

## 06. ready files by url
### source: https://www.w3schools.com/nodejs/nodejs_url.asp

************************************************************

## 10. expressjs environment
### source: https://www.tutorialspoint.com/expressjs/expressjs_environment.htm
- create folder: $ mkdir hello-world
- create directory into it: $ cd hello-world
- create the package.json file: $ npm init -y
- install expressjs: $ npm install --save express
- install nodemon: $ npm i -g nodemon // this tool restarts server as soon as we make a change in any of our files

## 11. hello-world
### source: https://www.tutorialspoint.com/expressjs/expressjs_hello_world.htm
- cli: $ nodemon index.js

## 12. routing
### source: https://www.tutorialspoint.com/expressjs/expressjs_routing.htm
- to test post method, using the following cli:
$ curl -X POST "http://localhost:3000/hello"

## 13. express routers
### source: https://www.tutorialspoint.com/expressjs/expressjs_routing.htm
- To separate the routes from our main index.js file, we will use Express.Routervar:
express = require('express');
var router = express.Router();

## 14. dynamic route
### source: https://www.tutorialspoint.com/expressjs/expressjs_url_building.htm
Note: We can also use regex to restrict URL parameter matching
app.get('/things/:id([0-9]{5})', function(req, res){
   res.send('id: ' + req.params.id);
});

## 15. middleware

## 16. templating - pug
### source: https://www.tutorialspoint.com/expressjs/expressjs_templating.htm

## 17. static files
### source: https://www.tutorialspoint.com/expressjs/expressjs_static_files.htm
- Express, by default does not allow you to serve static files. You need to enable it using the following built-in middleware.
`app.use(express.static('public'));`
`app.use(express.static('images'));`
Virtual Path Prefix:
`app.use('/static', express.static('public'));`

************************************************************

## 20. reactjs - environment
### source: https://www.tutorialspoint.com/reactjs/reactjs_environment_setup.htm
- using configuration from dynamic journal project: create-react-app package

## 21. state and props, stateless and stateful component
### source: https://www.tutorialspoint.com/reactjs/reactjs_components.htm

## 22. higher order component
### source: https://www.tutorialspoint.com/reactjs/reactjs_higher_order_components.htm
