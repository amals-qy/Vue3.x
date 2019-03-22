
export default {
    custom: {
        key: 13,
        handler: function(range, context) {
            this.quill.insertText(range.index, '\n ');
            setTimeout(() => {
                let nowRange = this.quill.getSelection().index - 1
                this.quill.setSelection(nowRange)
            }, 0)
        }
    },
}