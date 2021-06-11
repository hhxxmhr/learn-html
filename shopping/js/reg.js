window.onload = function () {
    let reg_tel = /^1[3|4|5|7|8]\d{9}$/; // 手机号码的 正则表达式
    let reg_qq = /^[1-9]\d{4,}$/; // QQ的 正则表达式
    let tel = document.querySelector('#tel');
    let qq = document.querySelector('#qq');
    regExp(reg_tel, tel);
    regExp(reg_qq, qq);




    function regExp(reg, ele) {
        ele.onblur = function () {
            if (reg.test(this.value)) {
                // nextElementSibling 返回元素节点之后的兄弟节点(不包括文本节点、注释节点)
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>恭喜输入正确';
                this.nextElementSibling.className = 'color_green';
            } else {
                this.nextElementSibling.className = 'color_red';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>格式不正确，请重新输入';
            }
        }
    }

}