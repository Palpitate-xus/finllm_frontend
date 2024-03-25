<template>
  <div class="home">
    <!-- <el-card class="el-card">
      <div slot="header" class="clearfix">
        <span class="card-title">热点新闻</span>
      </div>
      <div class="notice-list">
        <ul>
          <li v-for="(item, index) in news" :key="index" :title="item.abstract">
            <a :href="item.source" target="_blank">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </el-card> -->


    <!-- <el-row :gutter="20"> -->
      <!-- <el-col :span="4" v-for="(item, index) in basicInfo" :key="index"> -->
        <!-- <el-card class="info-card"> -->
          <!-- <el-statistic
            group-separator=","
            :precision="2"
            :value="item.new"
            :title="item.name"
          ></el-statistic> -->
          <!-- <div slot="header" class="card-header">
            <span class="card-title">{{ item.name }}</span>
          </div>
          <div class="card-content">{{ item.new }}</div>
        </el-card> -->
      <!-- </el-col>
    </el-row> -->

    <!-- <el-row :gutter="20" class="mt-20">
      <el-col :span="4" v-for="(item, index) in financeInfo" :key="index">
        <el-card class="info-card">
          <div slot="header" class="card-header">
            <span class="card-title">{{ item.name }}</span>
          </div>
          <div class="card-content">{{ item.new }}</div>
        </el-card>
      </el-col>
    </el-row> -->
    

    <el-container>
      <el-header>
        <el-carousel indicator-position="none" arrow="never" direction="vertical" :interval="2500">
          <el-carousel-item v-for="(item, index) in news" :key="index" class="notice_item">
            <!-- <img src="" alt=""> -->
            <el-link href="item.source" type="primary">最新新闻: {{ item.title }}</el-link>
          </el-carousel-item>
        </el-carousel>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-card class="el-card">
            <div slot="header" class="clearfix">
              <span class="card-title">股票热度</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="getStocks">刷新</el-button>
            </div>
            <div>
              <el-table
                v-loading="loading"
                :data="stocks"
                style="width: 100%">
                <el-table-column
                  prop="code"
                  label="代码"
                >
                </el-table-column>
                <el-table-column
                  prop="name"
                  label="名称"
                >
                </el-table-column>
                <el-table-column
                  prop="focus_count"
                  label="热度"
                >
                </el-table-column>
                <el-table-column
                  prop="price"
                  label="当前股价"
                >
                </el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-aside>
        <el-container>
          <el-main>

            <!-- <el-card class="el-card">
              <div slot="header" class="clearfix">
                <span class="card-title">热点新闻</span>
                <el-button style="float: right; padding: 3px 0" type="text" @click="getNews">刷新</el-button>
              </div>
              <div class="notice-list" v-loading="news_loading">
                <ul>
                  <li v-for="(item, index) in news" :key="index" :title="item.abstract">
                    <a :href="item.source" target="_blank">{{ item.title }}</a>
                  </li>
                </ul>
              </div>
            </el-card> -->

          </el-main>
          <el-footer>
            <el-row :gutter="20">
              <el-col :span="4" v-for="(item, index) in basicInfo" :key="index">
                <!-- <el-card class="info-card"> -->
                  <el-statistic
                    group-separator=","
                    :precision="2"
                    :value="item.new"
                    :title="item.name"
                  >
                    <template slot="suffix">
                      <i class="el-icon-s-flag" :style="item.de > 0 ? 'color: red' : 'color: blue'"></i>
                    </template>
                  </el-statistic>
                  <!-- <div slot="header" class="card-header">
                    <span class="card-title">{{ item.name }}</span>
                  </div>
                  <div class="card-content">{{ item.new }}</div>
                </el-card> -->
              </el-col>
            </el-row>
          </el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import axiosInstance from '@/api';
export default {
  name: 'HelloWorld',
  data() {
    return {
      news: [],
      stocks: [],
      loading: true,
      news_loading: true,
      basicInfo: [],
      financeInfo: [],
    };
  },
  mounted() {
    this.getNews();
    this.getStocks();
    this.getBasicInfo();
  },
  methods: {
    async getNews() {
      await axiosInstance.get('/index/easymoney_news')
        .then((response) => {
          console.log(response);
          this.news = response.news;
          this.news_loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.$notify({
            title: '错误',
            message: '获取首页信息失败',
            type: 'error'
          });
        });
    },
    async getStocks() {
      await axiosInstance.get('/index/xueqiu_hot')
        .then((response) => {
          console.log(response);
          this.stocks = response.stocks;
          this.loading = false;
        })
        .catch((error) => {
          console.log(error);
          this.$notify({
            title: '错误',
            message: '获取股票信息失败',
            type: 'error'
          });
      })
    },
    async getBasicInfo() {
      await axiosInstance.get('/index/index_data')
        .then((response) => {
          console.log(response.data);
          this.basicInfo = response.index.slice(0, 6);
          // this.financeInfo = response.index.slice(6, 12);
        })
        .catch((error) => {
          console.log(error);
          this.$notify({
            title: '错误',
            message: '获取首页信息失败',
            type: 'error'
          });
        });
    }
  },
};
</script>

<style scoped>
a {
  color: #292626;
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
