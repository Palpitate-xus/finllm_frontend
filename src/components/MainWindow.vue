<template>
    <el-container direction="vertical">
      <el-row>
        <el-col :span="8">
          <el-input
            type="textarea"
            placeholder="请输入内容"
            v-model="message"
          ></el-input>
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            on-preview="handlePreview"
            on-remove="handleRemove"
            before-remove="beforeRemove"
            :file-list="fileList"
          >
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success">上传到服务器</el-button>
          </el-upload>
        </el-col>
        <el-col :span="8" class="button-column">
          <el-button @click="handleClick1">功能1</el-button>
          <el-button @click="handleClick2">功能2</el-button>
          <!-- 添加更多按钮 -->
        </el-col>
        <el-col :span="8">
          <el-input
            type="textarea"
            placeholder="输出内容"
            v-model="output"
            :readonly="true"
          ></el-input>
        </el-col>
      </el-row>
    </el-container>
  </template>
  
  <script>
  export default {
    name: 'MainWindow',
    data() {
      return {
        message: '',
        output: '',
        fileList: [],
      };
    },
    methods: {
      handlePreview(file) {
        console.log('File preview:', file);
      },
      handleRemove(file, fileList) {
        console.log('Remove uploaded file:', file, fileList);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name, fileList}？`);
      },
      handleClick1() {
        // 实现功能1
      },
      handleClick2() {
        // 实现功能2
      },
    },
  };
  </script>
  
  <style scoped>
  .el-row {
    height: 100vh;
  }
  
  .button-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .button-column .el-button {
    margin-bottom: 10px;
  }
  </style>
  