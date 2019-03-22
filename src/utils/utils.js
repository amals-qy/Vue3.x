
let utils = {}

utils.install = function (Vue) {
    Vue.mixin({
        methods: {
            outRoom() {
                this.$router.push({path: '/signIn'})
                this.$message.success('退出房间成功 !')
            },
            isIE() {
                return (!!window.ActiveXObject || "ActiveXObject" in window) ? true : false
            },
            MobileFormat: function (phone) {
                return !(/^1(3|4|5|7|8)\d{9}$/.test(phone)) ? false : true;
            },
            pwdFormat: function (pwd) {
                return !(/^\w{6,18}$/).test(pwd) ? false : true
            },
            nameFormat: function (name){
                return !(/^[A-Za-z0-9_\u4E00-\u9FA5]{1,15}$/).test(name) ? false : true
            },
            mailBox(mail) {
                var myReg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
                var bChk = myReg.test(mail);
                return bChk;
            },
            jsonEdit: function (obj) {
                var isjson = typeof(obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
                return !isjson ? JSON.parse(obj) : obj;
            },
            datefilter: function(type, time) {
                if(time == 'null' || time == '' || time == 0 || time=='undefinde' || isNaN(parseInt(time)))return time;
                if(time)time = time.toString();
                if(time)time.length == 13?time = +time :time.length == 19?time = time / 1000000:time = (time * 1000);
                var date = new Date(time);
                var Y = date.getFullYear();
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1);
                var D = date.getDate();
                var h = date.getHours();
                var m = date.getMinutes();
                var s = date.getSeconds();
                D = D.toString();
                h = h.toString();
                m = m.toString();
                s = s.toString();
                D.length == 1 ? D = '0'+D : D = D;
                h.length == 1 ? h = '0'+h : h = h;
                m.length == 1 ? m = '0'+m : m = m;
                s.length == 1 ? s = '0'+s : s = s;
                if(type == 1){
                    return Y + '.' + M + '.' + D + ' ' + h + ':' + m;
                }else if(type == 2) {
                    return M + '月' + D + '日'
                }else if(type == 3){
                    return h + ':' + m
                }else {
                    return Y + '-' + M + '-' + D + ' ' + h + ':' + m + ':' + s;
                }
            }
        }
    })
}

export default utils