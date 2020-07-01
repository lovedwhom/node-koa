//koa 模板


const Koa = require('koa');

const app = new Koa();




const logger = (ctx,next) => {
    console.log(`${new Date()} ${ctx.request.method} ${ctx.request.url}`);
    next();
}








app.use(logger)


app.listen(30001)

console.log('server start at http://localhost:30001')
