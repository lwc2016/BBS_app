const CommentModel = require("../models/comment.model.js");

// 创建
exports.create = async ({content, post_id, user})=>{
    const comment = new CommentModel({content, post_id, user});
    await comment.save();
};

// find
exports.find = async (data)=>{
    return await CommentModel.find(data).populate("user");
};