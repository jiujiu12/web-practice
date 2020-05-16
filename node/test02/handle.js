let handle={};
      
function login(){
    console.log('欢迎，请先登录/注册');
}
function user(name){
    console.log('你好，'+name);
}

handle['/']=login;
handle['/login']=login;
handle['/user?name='+name]=user;

exports.handle=handle;