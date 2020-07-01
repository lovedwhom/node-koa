//koa 重定向


const Koa = require('koa');

const KoaRouter = require('koa-router')


const app= new Koa();
const router = new  KoaRouter()

const redirect = (ctx,next) => {
    ctx.response.redirect('/');

}
const main = ctx =>{
    ctx.response.body = '<a href="/">Index Page</a>';
}

router.get('/',main);
router.get('/about',redirect)

app.use(router.routes()).use(router.allowedMethods());


app.listen(30001)

console.log('server start at http://localhost:30001')
