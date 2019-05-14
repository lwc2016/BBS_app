const UserModel = require("../models/user.model.js");

// 创建
exports.create = async ({username, nickname, password})=>{
   let user = new UserModel({username, nickname, password});
   await user.save();
};

// 查询一条数据
exports.findOne = async (data)=>{
    return await UserModel.where(data).findOne();
};