// blog操作 路由
const blogHandle=(req,res)=>{
    // 请求路径
    let relPath=req.url.split('?')[0];
    // 请求方式
    let method=req.method;
    // get查询
    if (method==='GET') {
        // 展示/查询博客列表
        if(relPath==='/blog'||relPath==='/'){
            return{
                msg:'查询成功'
            };
        }
        // 查看详情
        if (relPath==='/blog/detail') {
            return{
                msg:'详情'
            };
        }
    }
    // put修改
    else if (method==='PUT'&&relPath==='/blog/update') {
        return{
            msg:'修改成功'
        };
    }
    // post添加
    else if (method==='POST'&&relPath==='/blog/add') {
        return{
            msg:'添加成功'
        };
    }
    // delete 删除
    else if(method==='DELETE'&&relPath==='/blog/del'){
        return{
            msg:'删除成功'
        };
    }
}

module.exports.blogHandle=blogHandle;