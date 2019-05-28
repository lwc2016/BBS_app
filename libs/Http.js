const request = require("request");
exports.post = (url, options) => {
    return new Promise((resolve, reject)=>{
       request.post(url, {...options}, (err, httpReseponse, body)=>{
            if(err){
                reject(err);
            }
            if(httpReseponse.statusCode === 200){
                resolve(JSON.parse(body));
            }else{
                reject(body);
            }
       });
    });
};