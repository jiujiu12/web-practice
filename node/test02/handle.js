let handle={};
      
function login(){
    console.log('欢迎，请先登录/注册');
    // 阻塞操作
    function sleep(millSeconds) {
        let startTime=new Date().getTime();
        while (new Date().getTime()<(startTime+millSeconds)) ;
        return '我醒啦~';
    }
    sleep(10000);
}
function user(name){
    console.log('你好，'+name);
    return `你好，${name}`;
}

function callback(name) {
    user(name);
};
handle['/']=login;
handle['/login']=login;
handle[`/user?name=${name}`]=callback;

exports.handle=handle;