$(()=>{
    //底部状态切换
    $(".tab").click(function () {
        $(this).addClass("active").siblings().removeClass("active")
    })


})