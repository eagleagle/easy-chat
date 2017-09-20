const tokenManager = require('../../middlewares/tokenManager');

//路由统一添加 管理
const auth = require('../handlers/auth');
const friends = require('../handlers/friends');
const messages = require('../handlers/messages');
const users = require('../handlers/users');
const upgradeYourBrowser = require('../handlers/upgradeYourBrowser');

module.exports = function (app) {

    //登录注册路由
    app.post('/api/auth/signin', tokenManager.autoSignin,  auth.signin);
    app.post('/api/auth/signup', auth.signup);
    app.post('/api/auth/valid', auth.valid);

    //friends
    app.get('/api/friends/:id', tokenManager.verifyToken, friends.getFriend);
    app.post('/api/friends/:id', tokenManager.verifyToken, friends.postFriend);
    app.put('/api/friends/:id', tokenManager.verifyToken, friends.putFriend);
    app.delete('/api/friends/:id', tokenManager.verifyToken, friends.deleteFriend);
    app.get('/api/friends', tokenManager.verifyToken, friends.getFriends);
    
    //获取某个用户是否存在
    app.get('/api/users/:id/logout', tokenManager.removeToken, users.getUser);
    app.get('/api/users/:id', tokenManager.verifyToken, users.getUser);
    
    //messages
    app.get('/api/messages/:id', tokenManager.verifyToken, messages.getMessage);
    app.post('/api/messages/:id', messages.postMessage);
    app.delete('/api/messages/:id', messages.deleteMessage);
    app.get('/api/messages', tokenManager.verifyToken, messages.getMessages);

    //提示浏览器升级
    app.get('/upgrade_your_browser', upgradeYourBrowser);
};