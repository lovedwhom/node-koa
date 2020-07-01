const  Koa = require('koa');

//解析request 的body
const bodyParser = require('koa-bodyparser')

const controller = require('./controller/index')

const app = new Koa();


app.use(async (ctx,next)=>{
 console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
 await next();
});


app.use(bodyParser());

app.use(bodyParser());

app.use(controller());


app.listen(3432);
console.log('app start at port 3432')
