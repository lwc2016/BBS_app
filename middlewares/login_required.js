const utils = require("../libs/utils.js");

module.exports = async (ctx, next)=>{
    const { authorization } = ctx.request.header;
    const token = authorization.replace("Bearer ", "");
    const data = await utils.validate_token(token);
    if(data){
        ctx.state.user = data;
        await next();
    }else{
        await ctx.notAuth();
    }
};