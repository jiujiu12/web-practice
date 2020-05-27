// 获取博客列表
const getList=(author,keyword)=>{
    return [
        {
            id:1,
            title:'Node',
            content:'in',
            author:'Sherry',
            time:1590505335006
        }
    ]
}
// 获取博客详情
const getDetailList=(id)=>{
    return[
        {
            id:1,
            title:'Node',
            content:'in',
            author:'Sherry',
            time:1590505335006
        }
    ]
}
// 新建博客
const newBlog=(blogtData)=>{

    return {
        // 插入到数据库中数据的id
        id : 2
    }
}
module.exports = {
    getList,
    getDetailList,
    newBlog
}