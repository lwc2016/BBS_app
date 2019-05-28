module.exports = ()=>{
    const outer = async (ctx, next) => {
        // 成功返回
        const success = function(data){
            this.body = {
                code: 0,
                result: data || ""
            };
        };

        // 参数错误
        const paramError = function(errorMsg){
            this.body = {
                code: 1001,
                errorMsg: errorMsg || "参数错误"
            }
        };

        // 未授权
        const notAuth = function(){
            this.body = {
                code: 1002,
                errorMsg: "请重新登录"
            }
        };

        // 其他错误
        const error = function(errorMsg){
            console.log(errorMsg);
            this.body = {
                code: 1003,
                errorMsg: errorMsg
            }
        };

        ctx.success = success.bind(ctx);
        ctx.paramError = paramError.bind(ctx);
        ctx.notAuth = notAuth.bind(ctx);
        ctx.error = error.bind(ctx);

        await next();
    };
    return outer;
}