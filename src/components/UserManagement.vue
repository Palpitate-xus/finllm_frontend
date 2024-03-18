<template>
  <div class="app-container">
    <el-table :data="historyData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="action" label="操作"></el-table-column>
      <el-table-column prop="prompt" label="内容"></el-table-column>
      <el-table-column prop="result" label="结果"></el-table-column>
      <el-table-column prop="timestamp" label="时间" width="180">
        <template slot-scope="{ row }">
          <span>{{ formatTimestamp(row.timestamp) }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axiosInstance from '@/api';
export default {
  name: 'UserManagement',
  data() {
    return {
      historyData: [
        { id: 1, action: '登录', timestamp: '2024-02-19 10:00:00' },
      ]
    };
  },
  methods: {
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
    async fetchHistory() {
      await axiosInstance.get('/users/get_history')
        .then((response) => {
          console.log(response);
          this.historyData = response.data.history;
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
</script>

<style scoped>
</style>