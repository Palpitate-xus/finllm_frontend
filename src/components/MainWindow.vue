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
            action="http://127.0.0.1:8001/llms/upload/"
            :headers="authorization"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            :on-success="fileUploaded"
            :file-list="fileList"
            :limit="1"
          >
            <el-button slot="trigger" size="small" type="primary">上传文件</el-button>
            <!-- <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button> -->
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
        filepath: '',
        fileList: [],
        authorization: {},
      };
    },
    mounted() {
      this.authorization = { authorization: localStorage.getItem('token')};
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
        console.log(file)
        console.log(fileList)
        return this.$confirm(`确定移除 ${file.name}？`);
      },
      fileUploaded(response, file, fileList) {
        console.log(response);
        console.log(file);
        console.log(fileList);
        this.filepath = response.saved_as;
        console.log("file_path: ", this.filepath);
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
          })
          .catch((error) => {
            console.log(error);
          });
      },
      handleClick2() {
        // 实现功能2
      },
      handleClick3() {
        // 实现功能3
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
  