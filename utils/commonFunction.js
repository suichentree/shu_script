//公共函数方法，提供其他文件使用





// 随机数
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}


export let commonFunction = {
    cookiesFormat,getRndInteger
}

