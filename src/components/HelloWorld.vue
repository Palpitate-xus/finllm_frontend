<template>
  <div class="home">
    <!-- 公告栏 -->
    <el-card class="el-card">
      <div slot="header" class="clearfix">
        <span class="card-title">基于大模型的金融数据分析系统</span>
      </div>
      <div class="notice-list">
        <ul>
          <li v-for="(item, index) in notices" :key="index">{{ item }}</li>
        </ul>
      </div>
    </el-card>
    <el-row :gutter="20">
      <!-- 用户数量、数据数量、文件数量卡片 -->
      <el-col :span="8" v-for="(item, index) in basicInfo" :key="index">
        <el-card class="info-card">
          <div slot="header" class="card-header">
            <span class="card-title">{{ item.title }}</span>
          </div>
          <div class="card-content">{{ item.value }}</div>
        </el-card>
      </el-col>
    </el-row>

    <!-- 访问量、收入、支出卡片 -->
    <el-row :gutter="20" class="mt-20">
      <el-col :span="8" v-for="(item, index) in financeInfo" :key="index">
        <el-card class="info-card">
          <div slot="header" class="card-header">
            <span class="card-title">{{ item.title }}</span>
          </div>
          <div class="card-content">{{ item.value }}</div>
        </el-card>
      </el-col>
    </el-row>
    
    <!-- 数据列表示例和文件列表示例 -->
    <el-row :gutter="20" class="mt-20">
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span class="card-title">数据列表</span>
          </div>
          <el-table :data="dataList" stripe class="table">
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="type" label="类型"></el-table-column>
            <el-table-column prop="size" label="大小"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div slot="header" class="clearfix">
            <span class="card-title">文件列表</span>
          </div>
          <el-table :data="fileList" stripe class="table">
            <el-table-column prop="name" label="名称"></el-table-column>
            <el-table-column prop="format" label="格式"></el-table-column>
            <el-table-column prop="size" label="大小"></el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
import axiosInstance from '@/api';
export default {
  name: 'HelloWorld',
  data() {
    return {
      basicInfo: [
        { title: '用户数量', value: 100 },
        { title: '数据数量', value: 500 },
        { title: '文件数量', value: 200 }
      ],
      financeInfo: [
        { title: '访问量', value: 10000 },
        { title: '收入', value: 10000 },
        { title: '支出', value: 5000 }
      ],
      dataList: [
        { name: '股吧数据', type: '社交媒体', size: '100KB' },
        { name: '财经新闻', type: '新闻', size: '200KB' },
        { name: '开源数据', type: '开源数据', size: '300KB' }
      ],
      fileList: [
        { name: '文件1', format: '格式1', size: '100KB' },
        { name: '文件2', format: '格式2', size: '200KB' },
        { name: '文件3', format: '格式3', size: '300KB' }
      ],
      notices: [
        '公告1',
        '公告2',
        '公告3'
      ]
    };
  },
  methods: {
    // 获取首页信息
    async getBasicInfo() {
      await axiosInstance.get('/llms/get_basic_info')
        .then((response) => {
          console.log(response.data);
          this.basicInfo = response.data.basic_info;
          this.financeInfo = response.data.finance_info;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>

.el-card {
  margin: 10px;
  /* padding: 10px; */
}

.home {
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

.info-card {
  height: 100%;
}

.card-header {
  padding: 0 10px;
  text-align: center;
  /* background-color: #f5f7fa; */
}

.card-title {
  font-size: 16px;
  color: #303133;
}

.card-content {
  font-size: 20px;
  text-align: center;
}

.table {
  width: 100%;
}

.notice-list ul {
  list-style: none;
  padding: 0;
}

.notice-list li {
  margin-bottom: 5px;
}
</style>
