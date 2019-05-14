const postService = require("../services/post.service.js");
const _ = require("lodash");

// 添加帖子
exports.add = async (ctx, next)=>{
    const { title, content } = ctx.request.body;
    const { id } = ctx.state.user;
    await postService.create({author:id, title, content});
    ctx.success();
};

// 帖子列表
exports.list = async (ctx, next)=>{
    let list = await postService.find();
    list = list.map(item => {
        item.author = _.pick(item.author, ["_id", "username", "nickname", "createdTime"].sort());
        _.pick(item, ["_id", "title", "content", "createdTime", "author"].sort());
        return item;
    });
    ctx.success(list);
};

// 帖子详情
exports.detail = async (ctx, next)=>{
    let { id } = ctx.request.query;
    let detail = await postService.findById(id);
    detail = _.pick(detail, ["_id", "title", "content", "author", "createdTime"].sort());
    detail.author = _.pick(detail.author, ["_id", "username", "createdTime", "nickname"].sort());
    ctx.success(detail);
};