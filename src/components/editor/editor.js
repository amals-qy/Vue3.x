import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import {quillEditor} from 'vue-quill-editor'
import toolBar from './toolBar'
import {Tips, titleConfig, H} from './titleConfig'
import bindings from './bindings'

export default {
    props: {
        value: {
            default: String
        },
        placeholder: {
            default: Tips
        },
        height: {
            default: Number
        },
        state: {
            default: Boolean
        }
    },
    components: {
        quillEditor
    },
    data() {
        return {
            editMsg: this.value,
            editorOption: {
                placeholder: this.placeholder,
                modules: {
                    keyboard: {
                        bindings: bindings
                    },
                    toolbar: {
                        container: toolBar,
                        handlers: {
                            'image': ((value) => {
                                if (value) {
                                    // document.querySelector(".avatar-uploader input").click();
                                    //TODO: 自定义上传图片
                                    alert('自定义上传图片...')
                                } else {
                                    this.quill.format('image', false);
                                }
                            })
                        }
                    }
                }
            },
            serverUrl: "输入上传接口...",
            header: {}
        }
    },
    mounted() {
        this.addQuillTitle()
        this.$refs.myQuill.$refs.editor.style.height = H(this.height)
        this.$refs.myQuill.$refs.editor.children[0].style.height = H(this.height)
    },
    methods: {
        onEditorChange() { this.$emit('input', this.editMsg) },
        addQuillTitle () {
            const oToolBar = document.querySelector('.ql-toolbar'),
                aButton = oToolBar.querySelectorAll('button'),
                aSelect =  oToolBar.querySelectorAll('select');
            aButton.forEach(function(item){
                if(item.className === 'ql-script'){
                    item.value === 'sub' ? item.title = '下标': item.title = '上标';
                }else if(item.className === 'ql-indent'){
                    item.value === '+1' ? item.title ='向右缩进': item.title ='向左缩进';
                }else{
                    item.title = titleConfig[item.classList[0]];
                }
            });
            aSelect.forEach(function(item){
                item.parentNode.title = titleConfig[item.classList[0]];
            });
        },
        beforeUpload() {
            this.$emit('update:state', true)
        },

        uploadSuccess(res, file) {
            let quill = this.$refs.myQuill.quill;
            if (res.data) {
                let length = quill.getSelection().index;
                quill.insertEmbed(length, "image", res.data);
                quill.setSelection(length + 1);
            } else {
                this.$message.error("图片插入失败");
            }
            this.$emit('update:state', false)
        },
        uploadError() {
            this.$emit('update:state', false)
            this.$message.error("图片插入失败");
        }
    }
}