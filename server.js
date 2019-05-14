const koa = require("koa");
const bodyParser = require("koa-bodyparser");
const app = new koa();

const json = require("./middlewares/json.js");
const route = require("./router/route.js");

app
    .use(bodyParser())
    .use(json());

// 连接mongodb
require("./libs/mongoose.js");
route(app);

app.listen(60800, ()=>{
    console.log(`Server is running at port: 60800`);
});