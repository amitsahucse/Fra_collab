const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db/setup.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.post('/posts/create', (req, res) => {
    res.jsonp({
        message: 'Post hast been created',
    });
});

server.use(router);

server.listen(3002, () => {
    console.log('JSON Server запущен на порту 3000');
});
