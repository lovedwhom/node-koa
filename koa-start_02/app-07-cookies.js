//koa 模板


const Koa = require('koa');


const app = new Koa();

const main = (ctx,next) => {
    const n = Number(ctx.cookies.get('view') ||0) +1;
    ctx.cookies.set('view',n)
    ctx.response.body = n + 'view'
}

app.use(main)

app.listen(30001)

console.log('server start at http://localhost:30001')
