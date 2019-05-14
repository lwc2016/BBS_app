const commentService = require("../services/comment.service.js");
const _ = require("lodash");

// 创建
exports.add = async (ctx, next)=>{
    const { post_id, content } = ctx.request.body;
    const { id } = ctx.state.user;
    await commentService.create({content, post_id, user: id});
    await ctx.success();
};

// 根据post_id获取comment
exports.comments = async (ctx, next)=>{
    const { post_id } = ctx.request.query;
    const list = await commentService.find({post_id});
    list.map(item => {
        item.user = _.pick(item.user, ["username", "nickname", "_id", "createdTime"].sort());
    });
    await ctx.success(list);
};