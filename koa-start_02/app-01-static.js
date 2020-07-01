// koa 搭建静态资源服务器

const Koa = require('koa');
const path = require('path');
const serve = require('koa-static');

const app01Static = new Koa();



const main = serve(path.join(__dirname));
app01Static.use(main)

app01Static.listen(3001);
console.log('server start at http://localhost:3001')

