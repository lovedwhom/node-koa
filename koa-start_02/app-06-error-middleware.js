//koa 模板


const Koa = require('koa');


const app = new Koa();

const handle = async (ctx,next) => {
    try {
        await next()
    } catch (error)  {
        ctx.response.status = error.statusCode || error.status ||500;
        ctx.response.body = {
            message: error.message
        }
        ctx.app.emit('error',error,ctx)
    }
}

const main = ctx =>{
    ctx.throw(500)
}

app.use(handle)
app.use(main)

app.listen(30001)

app.on('error',function (error) {
    console.log('logging error',error.message)
})

console.log('server start at http://localhost:30001')
