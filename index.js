
// 函数：检测设备类型并进行跳转
function checkDeviceAndRedirect() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // 判断是否为手机设备
    if (/android/i.test(userAgent) || /iPhone|iPad|iPod/i.test(userAgent)) {
        // 为手机设备，跳转到移动端网页
        window.location.href = "https://yftdtddh.github.io/m/index.html";
    } else {
        // 不是手机设备，继续访问当前网页
        console.log("当前设备为非手机设备，继续访问");
    }
}

// 初始检测
checkDeviceAndRedirect();

document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        document.title = "(,,・ω・,,)欢迎你回来 - 资源汇总"; // 标签页不可见时修改标题
    } else {
        document.title = "资源汇总"; // 标签页可见时恢复标题
    }
});
