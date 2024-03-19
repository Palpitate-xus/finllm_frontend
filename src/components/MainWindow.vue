<template>
  <div class="main-window">
    <el-container direction="vertical" class="main-container">
      <el-row>
        <el-col :span="8">
          <el-input
            class="input-textarea"
            rows="24"
            type="textarea"
            placeholder="请输入内容"
            v-model="message"
          ></el-input>
        </el-col>
        <el-col :span="6" class="button-column">
          <el-button @click="handleClick1">情感分析</el-button>
          <el-button @click="handleClick2">财报分析</el-button>
          <el-button @click="handleClick3">文本总结</el-button>
          <el-button @click="handleClick4">市场预测</el-button>
          <el-button @click="handleClick5">风险评估</el-button>
          <el-button @click="handleClick6">事件分析</el-button>
          <el-button @click="handleClick7">行业研究</el-button>
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
          </el-upload>
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
  </div>
    
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
        console.log(file);
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
            this.$notify({
              title: '错误',
              message: '情感分析失败，请检查输入内容',
              type: 'error'
            })
          });
      },
      async handleClick2() {
        await axiosInstance.post('/llms/analyze_report', {
          text: this.filepath,
          name: "test",
          description: "财报分析"
        })
          .then((response) => {
            console.log(response);
            this.output = response.finance_score;
          })
          .catch((error) => {
            console.log(error);
            this.$notify({
              title: '错误',
              message: '财报分析失败，请检查输入内容',
              type: 'error'
            })
          });
      },
      async handleClick3() {
        await axiosInstance.post('/llms/summarize', {
          text: this.message,
          name: "test",
          description: "文本总结"
        })
          .then((response) => {
            console.log(response);
            this.output = response.summarize_res;
          })
          .catch((error) => {
            console.log(error);
            this.$notify({
              title: '错误',
              message: '文本总结失败，请检查输入内容',
              type: 'error'
            })
          });
      },
      async handleClick4() {
        await axiosInstance.post('/llms/forecast', {
          text: this.message,
          name: "test",
          description: "市场预测"
        })
          .then((response) => {
            console.log(response);
            this.output = response.forecast_res;
          })
          .catch((error) => {
            console.log(error);
            this.$notify({
              title: '错误',
              message: '市场预测失败，请检查输入内容',
              type: 'error'
            })
          });
      },
      async handleClick5() {
        await axiosInstance.post('/llms/risk_assessment', {
          text: this.message,
          name: "test",
          description: "风险评估"
        })
          .then((response) => {
            console.log(response);
            this.output = response.risk_score;
          })
          .catch((error) => {
            console.log(error);
            this.$notify({
              title: '错误',
              message: '风险评估失败，请检查输入内容',
              type: 'error'
            })
          });
      },
      async handleClick6() {
        await axiosInstance.post('/llms/event_analysis', {
          text: this.message,
          name: "test",
          description: "事件分析"
        })
          .then((response) => {
            console.log(response);
            this.output = response.event_analysis_res;
          })
          .catch((error) => {
            console.log(error);
            this.$notify({
              title: '错误',
              message: '事件分析失败，请检查输入内容',
              type: 'error'
            })
          });
      },
      async handleClick7() {
        await axiosInstance.post('/llms/industry_research', {
          text: this.message,
          name: "test",
          description: "行业研究"
        })
          .then((response) => {
            console.log(response);
            this.output = response.industry_res;
          })
          .catch((error) => {
            console.log(error);
            this.$notify({
              title: '错误',
              message: '行业研究失败，请检查输入内容',
              type: 'error'
            })
          });
      },
    },
  };
  </script>
  
  <style scoped>
  .main-container {
    display: flex;
    margin: auto;
  }

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
    /* display: flex; */
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  
  .button-column .el-button {
    margin-bottom: 10px;
  }
  </style>
  