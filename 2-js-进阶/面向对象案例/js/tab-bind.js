// let that;

class Tab {
    constructor(id) {
        // 将实例化对象变成全局的
        // that = this;
        // 获取元素
        this.tabsbox = document.querySelector(id);
        /*this.lis = this.tabsbox.querySelectorAll('li');
        this.sections = this.tabsbox.querySelectorAll('section');*/
        this.tabadd = this.tabsbox.querySelector('.tabadd');
        // li的父元素
        this.ul = this.tabsbox.querySelector('.firstnav ul:first-child');
        // section的父元素
        this.tabscon = this.tabsbox.querySelector('.tabscon');

        this.init();
    }

    // init 初始化操作让相关的元素绑定事件
    init() {
        // 获取所有的小li和section
        this.updateNode();
        this.tabadd.onclick = this.addTab.bind(this.tabadd, this);
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].index = i;
            // 点击的时候才调用toggleTab函数，所以不要写成toggleTab();不然页面一加载就会执行函数
            // this.lis[i].onclick = this.toggleTab;
            // todo 进阶：这里不能用call()或者apply(),这两个会立即调用函数
            // bind()在这里没有改变this的指向。this.lis[i] 还是当前点击的对象，第二个this：constructor当作参数传递
            this.lis[i].onclick = this.toggleTab.bind(this.lis[i], this);
            // 关闭按钮的事件绑定
            this.guanbis[i].onclick = this.removeTab.bind(this.guanbis[i], this);
            // 双击事件
            this.spans[i].ondblclick = this.editTab;
            this.sections[i].ondblclick = this.editTab;
        }
    }

    // 更新获取所有的小li和section：因为添加tab时，只在最初始获取了一次，添加的并没有添加进去，也就没有绑定点击事件--》单独提取出来获取
    // 动态添加元素，重新获取对应的元素
    updateNode() {
        this.lis = this.tabsbox.querySelectorAll('li');
        this.sections = this.tabsbox.querySelectorAll('section');
        // 小叉叉 的个数和li时对应的
        this.guanbis = this.tabsbox.querySelectorAll('.icon-guanbi');
        // 文字点击元素
        this.spans = this.tabsbox.querySelectorAll('.firstnav li span:first-child');
    }

    // 1、切换
    toggleTab(that) {
        // lis[i] 是函数的调用者，所以也是this的指向者
        // 排他思想
        that.clearClass();
        this.className = 'liactive';

        that.sections[this.index].className = 'conactive';
    }

    // 清除样式
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
    }

    // 2、添加
    addTab(that) {
        // 清除样式
        that.clearClass();
        // 2.1 创建li元素和section元素
        let li = '<li class="liactive"><span>新的选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        let section = '<section class="conactive">新的内容</section>';
        // 2.2 将元素追加到对应的父元素里
        that.ul.insertAdjacentHTML('beforeend', li);
        that.tabscon.insertAdjacentHTML('beforeend', section);
        // 创建了新的元素以后，重新获取所有的小li和section 并且 绑定点击事件
        that.init();
    }

    // 3. 删除
    removeTab(that, e) {
        // 阻止冒泡，防止触发li的切换点击事件
        e.stopPropagation();
        let index = this.parentNode.index;
        that.lis[index].remove();
        that.sections[index].remove();
        // 更新 元素和绑定
        that.init();
        // 当我们删除的不是选中状态的li的时候，原来选中状态li保持不变
        if (document.querySelector('.liactive')) return;
        // 当我们删除了选中状态的这个li的时候，让他前一个li处于选定状态
        index--;
        // 当删除最后一个的时候会报错，所以判断下
        that.lis[index] && that.lis[index].click();
    }

    // 4. 修改
    editTab() {
        let str = this.innerHTML; // this = span
        // 双击禁止选定文字
        window.getSelection() ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = '<input type="text"/>';
        // 此时input是span的第一个孩子
        let input = this.children[0];
        input.value = str;
        input.select(); // 让文本框里面的文字处于选中状态

        // 当我们离开文本框就把文本框里面的值给span
        input.onblur = function () {
            this.parentNode.innerHTML = this.value;
        };
        // 回车键赋值
        input.onkeyup = function (e) {
            if (e.keyCode === 13) {
                // 手动调用表单失去焦点事件 不需要鼠标离开操作
                this.blur();
            }
        }
    }
}

new Tab('#tab');