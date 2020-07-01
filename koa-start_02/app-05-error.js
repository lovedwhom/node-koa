//koa 模板


const Koa = require('koa');


const app = new Koa();

// const main = ctx =>{
//     ctx.throw(500)
// }


const main = ctx =>{
    ctx.response.status =404;
    ctx.response.body = 'Page Not Found';
}
app.use(main)
app.listen(30002)

console.log('server start at http://localhost:30002')
