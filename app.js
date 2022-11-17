const express = require('express');
const app = express();
// 配置静态资源目录
app.use('/public',express.static('./public'));

// 启动服务器
app.listen(1234,()=>{
    console.log('1234');
})
