const Router = require("koa-router");
const router = new Router({prefix: "/api"});
const userController = require("../controllers/user.controller.js");
const postController = require("../controllers/post.controller.js");
const commentController = require("../controllers/comment.controller.js");
const validator = require("../middlewares/validator.js");
const rules = require("../middlewares/validator_rules.js");
const login_required = require("../middlewares/login_required.js");

module.exports = (app)=>{
    // 注册接口
    router.post("/register", validator(rules.register), userController.register);
    // 登录
    router.post("/login", validator(rules.login), userController.login);


    /*
    *** 用户相关接口
    */
    // 获取用户信息
    router.get("/user/info", login_required, userController.info);
    // 用户详情
    router.get("/user/detail", validator(rules.user_detail), userController.detail);


    /*
    *** 帖子相关接口
    */
    // 添加帖子
    router.post("/post/add", login_required, validator(rules.post_add), postController.add);
    // 帖子列表
    router.get("/post/list", login_required, postController.list);
    // 帖子详情
    router.get("/post/detail", login_required, validator(rules.post_detail), postController.detail);

    /*
    *** 评论相关接口
    */
    // 添加评价
    router.post("/comment/add", login_required, validator(rules.comment_add), commentController.add);
    // 通过post_id获取评论
    router.get("/post/comments", login_required, commentController.comments);

    app
        .use(router.routes())
        .use(router.allowedMethods())
};
