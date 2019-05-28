// api 相关测试
const expect = require("chai").expect;
const request = require("request");
const BASEURL = "http://localhost:60800";


describe("/api/register", ()=>{
    /*
    /api/register
    1. 字段校验 （用户名，昵称，密码必须填写）；
    2. 重复校验  (用户名，昵称，不能重复)；
    3. 正确登录校验
    */
    const url = `${BASEURL}/api/register`;
    const test_data = {
        username: "test_name",
        nickname: "test_nickname",
        password: "test_123456"
    };

    before(()=>{
        const db = require("../libs/mongoose.js");
    });
    // 字段校验测试 1
    it("params validator:", (done)=>{
        request.post(url, {}, (err, httpResponse, body)=>{
            const {errorMsg, code} = JSON.parse(body);
            // 判断错误码
            expect(code).eq(1001);
            // 判断错误信息
            expect(errorMsg).to.be.an("object");
            expect(errorMsg).to.have.a.property("password");
            expect(errorMsg).to.have.a.property("nickname");
            expect(errorMsg).to.have.a.property("username");
            done();
        })
    });

    // 字段校验测试 2
    it("submit success test:", (done)=>{
        request.post(url, {
            form: test_data,
            headers: {"Content-type": "application/x-www-form-urlencoded"}
        }, (err, httpResponse, body)=>{
            const {result, code} = JSON.parse(body);
            expect(code).eq(0);
            expect(result).to.be.an("string", "");
            done();
        });
    });

    it("username duplicate test:", (done)=>{
        request.post(url, {
            form: test_data,
            headers: {"Content-type": "application/x-www-form-urlencoded"}
        }, (err, httpResponse, body)=>{
            const {code, errorMsg} = JSON.parse(body);
            expect(code).eq(1003);
            expect(errorMsg).eq("用户名已存在！");
            done();
        });
    });

    // 清除测试数据
    after(()=>{
        const mongoose = require("mongoose");
        const User = mongoose.model("User");
        // 清除数据
        User.findOne({username: test_data.username}, (err, doc)=>{
            doc.remove((err)=>{
                mongoose.disconnect();
            });
        })
    });
});

describe("/api/login", ()=>{
    /*
    /api/login:
    1. 用户名或密码错误校验
    2. 用户名或密码正确校验
    */
    const url = `${BASEURL}/api/login`;
    const test_data = {
        username: "test_name1",
        nickname: "test_nickname1",
        password: "test_1234561"
    };

    before((done)=>{
        const db = require("../libs/mongoose.js");
        // 创建用户
        request.post(`${BASEURL}/api/register`, {
            form: test_data,
            headers: {"Content-type": "application/x-www-form-urlencoded"}
        }, ()=>{
            done();
        });
    });

    it("params error", (done)=>{
        request.post(url, {
            form: {},
            headers: {"Content-type": "application/x-www-form-urlencoded"}
        }, (err, httpResponse, body)=>{
            const { code , errorMsg } = JSON.parse(body);
            expect(code).eq(1001);
            expect(errorMsg).to.be.an("object");
            expect(errorMsg).to.have.a.property("username");
            expect(errorMsg).to.have.a.property("password");
            done();
        });
    });

    it("username error", (done)=>{
        request.post(url, {
            form: {username: "test", password: "test_123456"},
            headers: {"Content-type": "application/x-www-form-urlencoded"}
        }, (err, httpResponse, body)=>{
            const { code , errorMsg } = JSON.parse(body);
            expect(code).eq(1003);
            expect(errorMsg).to.be.an("string");
            done();
        });
    });

    it("password error", (done)=>{
        request.post(url, {
            form: {username: "test_username", password: "test"},
            headers: {"Content-type": "application/x-www-form-urlencoded"}
        }, (err, httpResponse, body)=>{
            const { code , errorMsg } = JSON.parse(body);
            expect(code).eq(1003);
            expect(errorMsg).to.be.an("string");
            done();
        });
    });

    it("username and password correct", (done)=>{
        request.post(url, {
            form: {username: test_data.username, password: test_data.password},
            headers: {"Content-type": "application/x-www-form-urlencoded"}
        }, (err, httpResponse, body)=>{
            console.log(body);
            const { code , result } = JSON.parse(body);
            expect(code).eq(0);
            expect(result).to.be.an("object");
            expect(result).to.have.a.property("token");
            done();
        });
    });

    after(()=>{
        const mongoose = require("mongoose");
        const User = mongoose.model("User");
        // 清除数据
        User.findOne({username: test_data.username}, (err, doc)=>{
            doc.remove((err)=>{
                mongoose.disconnect();
            });
        })
    });
});
