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
          <!-- <el-button @click="deleteUser(row)" type="danger" size="small">删除</el-button> -->
          <el-button @click="disableUser(row)" type="danger" size="small" v-if="!row.disabled">禁用</el-button>
          <el-button @click="enableUser(row)" type="primary" size="small" v-if="row.disabled">启用</el-button>
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
  name: 'UserManagement',
  data() {
    return {
      userData: [],
      currentPage: 4,
      pagesize: 25,
      total: 0,
    };
  },
  mounted() {
    this.fetchUsers();
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
    async fetchUsers() {
      await axiosInstance.get('/users/get_user_list')
        .then((response) => {
          console.log(response);
          this.userData = response.users;
          this.total = response.length;
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
    async disableUser(row) {
      await axiosInstance.post('/users/disable_user', row)
        .then((response) => {
          console.log(response);
          this.$notify({
            title: '提示',
            message: '禁用成功',
            type: 'success'
          });
          this.fetchUsers();
        })
        .catch((error) => {
          console.log(error);
          this.$notify({
            title: error.message,
            message: error.response.data.detail,
            type: 'error'
          });
      })
    },
    async enableUser(row) {
      await axiosInstance.post('/users/enable_user', row)
        .then((response) => {
          console.log(response);
          this.$notify({
            title: '提示',
            message: '启用成功',
            type: 'success'
          });
          this.fetchUsers();
        })
        .catch((error) => {
          console.log(error);
          this.$notify({
            title: error.message,
            message: error.response.data.detail,
            type: 'error'
          });
      })
    },
  }
}
</script>

<style scoped>
.app-container {
  padding: 10px;
  margin: 10px;
}
</style>