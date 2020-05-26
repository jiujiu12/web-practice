// user 用户路由配置
const userHandle=(req,res)=>{
    // 请求路径
    let relPath=req.url.split('?')[0];
    // 请求方式
    let method=req.method;
     // post添加
    if (method==='POST'&&relPath==='/user/login') {
        // 提交    用户名密码   信息
        return{
            msg:'登录'
        };
    }
}
module.exports.userHandle=userHandle;