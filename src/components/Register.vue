<template>
    <div></div>
</template>

<script>
export default {
    name: 'RegisterComponent',
    data () {
        return {
            message: '',
            output: '',
            fileList: [],
            methods: {
                submitUpload() {
                    console.log('submitUpload');
                },
                handlePreview(file) {
                    console.log('File preview:', file);
                },
                handleRemove(file, fileList) {
                    console.log('Remove uploaded file:', file, fileList);
                }
            }
        }
    }
}
</script>