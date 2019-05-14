const PostModel = require("../models/post.model.js");

// 创建
exports.create = async ({title, content, author})=>{
    const post = new PostModel({title, content, author});
    await post.save();
};

// 搜索
exports.find = async ()=> {
    return await PostModel.find().populate("author").exec();
};

// 按照id搜索
exports.findById = async (id)=>{
    return await PostModel.findById(id).populate("author");
};