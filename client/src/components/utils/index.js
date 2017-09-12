export function query(data, userId) {
    for (let j = 0; j < data.length; j++) {
        if (data[j].userId === userId) {
            return data[j];
        }
    }
    return {};
}

export function dataFormat(date) {
    var o = {
        'M+': date.getMonth() + 1, //月份 
        'd+': date.getDate(), //日 
        'h+': date.getHours(), //小时 
        'm+': date.getMinutes(), //分 
        's+': date.getSeconds(), //秒 
        'q+': Math.floor((date.getMonth() + 3) / 3), //季度 
        'S': date.getMilliseconds() //毫秒 
    };
    var fmt = 'yyyy-MM-dd hh:mm:ss';
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)));
    return fmt;
}