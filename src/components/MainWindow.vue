<template>
    <el-container direction="vertical">
      <el-row>
        <el-col :span="8">
          <el-input
            class="input-textarea"
            rows="24"
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
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
          </el-upload>
        </el-col>
        <el-col :span="8" class="button-column">
          <el-button @click="handleClick1">情感分析</el-button>
          <el-button @click="handleClick2">财报分析</el-button>
          <el-button @click="handleClick3">文本总结</el-button>
          <!-- 添加更多按钮 -->
        </el-col>
        <el-col :span="8">
          <el-input
            class="output-textarea"
            rows="24"
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
  import axiosInstance from '../api/index.js'
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
      submitUpload() {
        console.log('submitUpload');
      },
      handlePreview(file) {
        console.log('File preview:', file);
      },
      handleRemove(file, fileList) {
        console.log('Remove uploaded file:', file, fileList);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${file.name, fileList}？`);
      },
      async handleClick1() {
        await axiosInstance.post('/llms/analyze_sentiment', {
          text: this.message,
          name: "test",
          description: "情感分析"
        })
          .then((response) => {
            console.log(response);
            this.output = response.sentiment_score;
          });
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
  
  .output-textarea {
  height: 75vh;
  }

  .input-textarea {
  height: 75vh;
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
  