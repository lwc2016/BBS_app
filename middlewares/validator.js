const StandardValidator = require("standard-validator");


module.exports = (rules)=>{
    const outer = async (ctx, next)=>{
        let data = {};
        if(ctx.request.method === "GET"){
            data = ctx.request.query;
        }
        if(ctx.request.method === "POST"){
            data = ctx.request.body;
        }
        const validator = new StandardValidator(data, rules);
        if(validator.validate_on_submit()){
            await next();
        }else{
            console.log(validator.errors);
            ctx.paramError(validator.errors)
        }
    };
    return outer;
};