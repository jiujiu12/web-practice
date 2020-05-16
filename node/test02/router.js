function route(handle,pathname){
    console.log('请求路径为：'+pathname);
    console.log(typeof handle[pathname]);
    if (typeof handle[pathname]==='function') {
        handle[pathname]();
    }else{
        console.log('Error,no such pages');
    }
}

module.exports=route;