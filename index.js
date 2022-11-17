var static = require('node-static');
var file = new static.Server('./index.html'); // "./"是资源的路径，如果你的index.js是跟资源同一个文件夹就可以这么写

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(1234); // 端口号一般建议4位跟相关服务类端口号区别开。