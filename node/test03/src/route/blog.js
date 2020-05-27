const { 
    getList,
    getDetailList,
    newBlog
    } = require('../controller/blog');
const {Success,Erro} = require('../models/userModel');

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
            const author = req.query.author || '';
            const keyword = req.query.keyword || '';
            const listData = getList(author,keyword);
            return new Success(listData);
        }
        // 查看详情
        if (relPath==='/blog/detail') {
            const id = req.url.split('?')[1];
            const detailList=getDetailList(id);
            return new Success(detailList);
        
        }
    }

     // post添加
     if (method==='POST'&&relPath==='/blog/add') {

        newBlog(req.body);
        console.log("blogHandle:"+JSON.stringify(req.body));
            
        return JSON.stringify(req.body);
    } 

    // put修改
    else if (method==='PUT'&&relPath==='/blog/update') {
        return{
            msg:'修改成功'
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