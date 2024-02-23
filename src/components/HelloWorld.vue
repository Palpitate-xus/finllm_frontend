<template>
  <div class="home">
    <h1 class="title">站点基本情况</h1>
    <!-- 公告栏 -->
    <el-card class="mt-20">
      <div slot="header" class="clearfix">
        <span class="card-title">公告</span>
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
            <span class="card-title">数据列表示例</span>
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
            <span class="card-title">文件列表示例</span>
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
        { name: '数据1', type: '类型1', size: '100KB' },
        { name: '数据2', type: '类型2', size: '200KB' },
        { name: '数据3', type: '类型3', size: '300KB' }
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
  }
};
</script>

<style scoped>
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
  background-color: #f5f7fa;
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
