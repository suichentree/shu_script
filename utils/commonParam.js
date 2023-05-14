//公共参数，此处定义一些公共参数，提供其他文件使用

let jdVersion = '10.1.2'
let iphoneVersion = [Math.ceil(Math.random()*2+12),Math.ceil(Math.random()*4)]

//定义UA标识（浏览器标识）
let UA = `jdapp;iPhone;${jdVersion};${Math.ceil(Math.random()*2+12)}.${Math.ceil(Math.random()*4)};${randomString(40)};network/wifi;model/iPhone12,1;addressid/0;appBuild/167802;jdSupportDarkMode/0;Mozilla/5.0 (iPhone; CPU iPhone OS ${iphoneVersion[0]}_${iphoneVersion[1]} like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148;supportJDSHWK/1`
//创建40位随机数
function randomString(e) {
    e = e || 32;
    let t = "abcdef0123456789", a = t.length, n = "";
    for (let i = 0; i < e; i++)
        n += t.charAt(Math.floor(Math.random() * a));
    return n
}

//定义uuid
let UUID = UA.split(';') && UA.split(';')[4] || ''


export let commonParam = {
    UA,UUID,jdVersion,iphoneVersion
}
