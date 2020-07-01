//koa 中间件的合成


const Koa = require('koa');
const Compose = require('koa-compose')


const app = new Koa();

const logger = (ctx,next) => {
    console.log(`${Date.now()} ${ctx.request.method} ${ctx.request.url}`);
    next();
}

const main = ctx =>{
    ctx.response.body = 'hello world'
}
const middlewares = Compose([logger,main])

app.use(middlewares)

app.listen(30001)

console.log('server start at http://localhost:30001')
