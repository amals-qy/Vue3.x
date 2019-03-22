<template>
    <div>
        <quill-editor
                v-model="editMsg"
                :options="editorOption"
                ref="myQuill"
                @change="onEditorChange($event)">
        </quill-editor>

        <el-upload
                class="avatar-uploader"
                :action="serverUrl"
                :headers="header"
                :show-file-list="false"
                :on-success="uploadSuccess"
                :on-error="uploadError"
                :before-upload="beforeUpload">
        </el-upload>
    </div>
</template>

<style scoped lang="scss">
    @import "editor.css";
</style>

<script>
    import editor from './editor'

    export default editor
</script>