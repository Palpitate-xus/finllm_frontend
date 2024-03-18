<template>
  <div class="app-container">
    <el-table :data="userData" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="80"></el-table-column>
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="role" label="角色"></el-table-column>
      <el-table-column prop="disabled" label="状态" width="124">
        <template slot-scope="{ row }">
          <el-tag>{{ row.disabled ? '已禁用' : '正常' }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column prop="timestamp" label="操作" width="180">
        <template slot-scope="{ row }">
          <el-button @click="deleteUser(row)" type="danger" size="small">删除</el-button>
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
      userData: []
    };
  },
  mounted() {
    this.fetchUsers();
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
          this.userData = response.users;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async deleteUser(row) {
      await axiosInstance.post('/users/delete_user', { params: { id: row.id } })
        .then((response) => {
          console.log(response);
          this.$notify({
            title: '提示',
            message: '删除成功',
            type: 'success'
          });
          this.fetchUsers();
        })
        .catch((error) => {
          console.log(error);
      })
    },
  }
}
</script>

<style scoped>
</style>