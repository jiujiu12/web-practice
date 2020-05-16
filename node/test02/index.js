const server=require('./server');
const route=require('./router');
const handle=require('./handle')

server.start(handle.handle);