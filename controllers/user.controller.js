const userService = require("../services/user.service");
const utils = require("../libs/utils.js");
const _ = require("lodash");
// 注册
exports.register = async (ctx, next)=>{
    const {username, nickname, password} = ctx.request.body;
    const user = await userService.findOne({username});
    if(!user){
        const _password = utils.generate_password(password);
        await userService.create({username, nickname, password: _password});
        await ctx.success();
    }else{
        await ctx.error("用户名已存在！");
    }
};

// 登录
exports.login = async (ctx, next)=>{
    const {username, password} = ctx.request.body;
    const user = await userService.findOne({username});
    if(user && utils.validate_password(user.password, password)){
        await ctx.success({token: utils.generate_token({id: user._id})});
    }else{
        await ctx.error("用户名或密码错误");
    }
};

// 用户信息
exports.info = async (ctx, next)=>{
    let { id } = ctx.state.user;
    const user = await userService.findOne({_id: id});
    const data = _.pick(user, ["username", "nickname", "_id", "createdTime"].sort());
    ctx.success(data);
};

// 用户详情
exports.detail = async (ctx, next)=>{
    let { id } = ctx.request.query;
    const user = await userService.findOne({_id: id});
    const data = _.pick(user, ["username", "nickname", "_id", "createdTime"].sort());
    ctx.success(data);
};