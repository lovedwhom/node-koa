//koa 模板


const Koa = require('koa');
const os = require('os');
const path = require('path')
const fs = require("fs")
const koaBody = require('koa-body')
const app = new Koa();

const main = async  (ctx) => {
    const tmpdir = os.tmpdir();
    const filePaths = [];

    console.log(ctx.request.files)
    const files = ctx.request.files || {};
    // console.log(files)
    for (let key in files) {
        const file = files[key];
        const filePath = path.join(tmpdir,file.name)
        const reader = fs.createReadStream(file.path);
        const writer = fs.createWriteStream(filePath);
        reader.pipe(writer);
        filePaths.push(filePath);
    }

    ctx.body = filePaths;
}





app.use(koaBody({ multipart: true }));
app.use(main);
app.listen(30001)

console.log('server start at http://localhost:30001')
