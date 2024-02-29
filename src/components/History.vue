<template>
  <div class="history-page">
    <el-table :data="historyData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="action" label="操作"></el-table-column>
      <el-table-column prop="timestamp" label="时间" width="180">
        <template slot-scope="{ row }">
          <span>{{ formatTimestamp(row.timestamp) }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'HistoryComponent',
  data() {
    return {
      historyData: [
        { id: 1, action: '登录', timestamp: '2024-02-19 10:00:00' },
        { id: 2, action: '修改资料', timestamp: '2024-02-19 10:30:00' },
        { id: 3, action: '上传文件', timestamp: '2024-02-19 11:00:00' },
        { id: 4, action: '退出登录', timestamp: '2024-02-19 12:00:00' },
        // 可根据实际需求添加更多历史记录数据
      ]
    };
  },
  methods: {
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    }
  }
};
</script>

<style scoped>
.history-page {
  padding: 20px;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
