function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
        + ""// "年"
        + (month >= 10 ? month : "0"+ month)
        + ""// "月"
        + (date.getDate() < 10 ? "0" + date.getDate() : date
            .getDate())
        + ""
        + (date.getHours() < 10 ? "0" + date.getHours() : date
            .getHours())
        + ""
        + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
            .getMinutes())
        + ""
        + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
            .getSeconds());
    return datetime;
}
btn.onclick = function(){
    let b = a.value;
    $.ajax({
        type: 'post',
        url: 'http://route.showapi.com/119-42',
        dataType: 'json',
        data: {
            "showapi_timestamp": formatterDateTime(),
            "showapi_appid": '75948', //这里需要改成自己的appid
            "showapi_sign": '2d1cbad70e844c33a660d6e7756f51b9',  //这里需要改成自己的应用的密钥secret
            "date":b

        },

        error: function(XmlHttpRequest, textStatus, errorThrown) {
            alert("操作失败!");
        },
        success: function(result) {
            console.log(result.showapi_res_body.list) //console变量在ie低版本下不能用
            let arr =  result.showapi_res_body.list;
            let len = arr.length;
            for(let i = 0; i < len; i++){
                oUl.innerHTML +=`<li><h3>${arr[i].title}</h3><p></p></li>`;
            }
            let oLi = document.getElementsByTagName("li");
            let oImg = document.getElementsByTagName("img")[0];
            console.log(oLi.length);
            for(let i = 0; i < oLi.length; i++){
                oLi[i].onclick = function () {
                    oImg.src = `${arr[i].img}`;
                    pop.style.display = "block";
                }
            }
        }
    });
}
