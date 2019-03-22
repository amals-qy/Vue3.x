
export default {
    name: 'sign_in',
    data() {
        return {
            phe: '',
            pwd: '',
            err: false,
            errormsg: ''

        };
    },
    methods: {
        signIn() {
            this.err = false;
            if (!this.phe || !this.pwd) {
                this.errormsg = '帐号或密码不能为空，请重新输入';
                this.err = true;
                return;
            }
            this.$message('正在登录 !');
            this.$router.push({path: '/'})
        }
    }
}
