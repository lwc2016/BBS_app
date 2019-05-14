const env = require("./env.js");
const { sign, verify } = require("jsonwebtoken");
const sha1 = require("sha1");

// 生成密码
exports.generate_password = function(str){
    return sha1(`${env.get("secret_key")}_${str}`);
};

// 校验密码
exports.validate_password = function(password, str){
    return this.generate_password(str) === password;
};

// 生成token
exports.generate_token = function(data){
    return sign(data, env.get("secret_key"), {expiresIn: "3h"});
};

// 校验token
exports.validate_token = function(token){
    return new Promise((resolve, reject)=>{
        verify(token, env.get("secret_key"), (err, data)=>{
            if(err){
                resolve(false);
            }else{
                resolve(data);
            }
        })
    });
};