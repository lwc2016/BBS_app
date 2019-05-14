// 注册接口字段校验规则
exports.register = {
    username: [
        {required: true, errorMsg: "用户名必须填写"}
    ],
    nickname: [
        {required: true, errorMsg: "昵称必须填写"}
    ],
    password: [
        {required: true, errorMsg: "密码必须填写"}
    ]
};

// 登录接口字段校验规则
exports.login = {
    username: [
        {required: true, errorMsg: "用户名必须填写"}
    ],
    password: [
        {required: true, errorMsg: "密码必须填写"}
    ]
};

// 用户详情
exports.user_detail = {
    id: [
        {required: true, errorMsg: "密码必须填写"}
    ]
};

// 添加帖子
exports.post_add = {
    title: [
        {required: true, errorMsg: "标题必须填写"}
    ],
    content: [
        {required: true, errorMsg: "内容必须填写"}
    ]
};

// 帖子详情
exports.post_detail = {
    id: [
        {required: true, errorMsg: "id必须填写"}
    ]
};

// 添加评论
exports.comment_add = {
    post_id: [
        {required: true, errorMsg: "post_id必填"}
    ],
    content: [
        {required: true, errorMsg: "content必填"}
    ]
};