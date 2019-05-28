// api 相关测试
const expect = require("chai").expect;
const request = require("request");
const BASEURL = "http://localhost:60800";
const Http = require("../libs/Http.js");



describe("/api/user/info", ()=>{
    const testData = {
        username: "test_username_2",
        nickname: "test_nickname_2",
        password: "test_password_2"
    };

    before(async ()=>{
        const db = require("../libs/mongoose.js");
        let resp = await Http.post(`${BASEURL}/api/register`, {form: testData});
        console.log(resp);
    });

    it("should login in", (done)=>{
        request.get(`${BASEURL}/api/user/info`, {}, (err, httpResponse, body)=>{
            const { code, errorMsg } = JSON.parse(body);
            expect(code).eq(1002);
            expect(errorMsg).to.be.an("string").eq("请重新登录");
            done();
        });
    });

    after(async ()=>{
        const mongoose = require("mongoose");
        const User = mongoose.model("User");
        // 清除数据
        let resp = await User.findOne({username: testData.username});
    });
});
