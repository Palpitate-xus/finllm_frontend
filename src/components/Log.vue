<template>
  <div class="history-page">
    <el-table :data="historyData" v-loading="loading" stripe style="width: 100%">
      <el-table-column prop="id" label="ID"></el-table-column>
      <el-table-column prop="user_id" label="用户ID"></el-table-column>
      <el-table-column prop="action" label="操作"></el-table-column>
      <!-- <el-table-column prop="prompt" label="内容" :show-overflow-tooltip='true'></el-table-column> -->
      <!-- <el-table-column prop="content" label="文件">
        <template slot-scope="{ row }">
          <span>{{ row.content!='None' ? row.content : '无' }}</span>
        </template>
      </el-table-column> -->
      <el-table-column prop="timestamp" label="时间" width="180">
        <template slot-scope="{ row }">
          <span>{{ formatTimestamp(row.timestamp) }}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[25, 50, 100, 200]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import axiosInstance from '@/api';
export default {
  name: 'LogComponent',
  data() {
    return {
      historyData: [],
      currentPage: 1,
      pagesize: 25,
      total: 0,
      loading: true,
    };
  },
  mounted() {
    this.fetchHistory();
  },
  methods: {
    handleSizeChange(val) {
      this.pagesize = val;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
    async fetchHistory() {
      await axiosInstance.get('/users/user_log')
        .then((response) => {
          console.log(response);
          this.historyData = response.history;
          this.total = response.length;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
        });
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
