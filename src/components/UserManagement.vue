<template>
  <div class="app-container">
    <el-table :data="userData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="user_email" label="邮箱"></el-table-column>
      <el-table-column prop="role" label="角色"></el-table-column>
      <el-table-column prop="timestamp" label="操作" width="180">
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
      userData: [
        { id: 1, username: 'palpitate', user_email: 'palpitate@palpitate.com', role: 'admin' , timestamp: '2024-02-19 10:00:00' },
      ]
    };
  },
  methods: {
    formatTimestamp(timestamp) {
      const date = new Date(timestamp);
      return date.toLocaleString();
    },
    async fetchUsers() {
      await axiosInstance.get('/users/get_user_list')
        .then((response) => {
          console.log(response);
          this.historyData = response.data.users;
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