<template>
  <div class="manage">
    <!-- 头部菜单 -->
    <div class="manage-head">
      <div class="manage-head-content">
        <git-control></git-control>
        <el-button size="small f-white bg-theme"
                   @click="create">立即创建</el-button>
        <el-button size="small">退出</el-button>
      </div>
    </div>
    <!-- 内容 -->
    <div v-for="(type,index) in list"
         :key="index"
         class="manage-body">
      <h2 class="manage-body-title">

      </h2>
    </div>
    <!-- 页尾 -->
    <div class="footer">

    </div>

    <!-- 弹框 -->
    <create-dialog ref="create"></create-dialog>
  </div>

</template>

<script>
import GitControl from '@/components/global/GitControl.vue'
import { mallTypeList } from '@/config/mall'
import CreateDialog from '@/components/CreateDialog'
export default {
  name: 'mall-managet',
  data () {
    return {
      list: []
    }
  },
  components: {
    GitControl,
    CreateDialog
  },
  created () {
    this.getMallList()
  },
  methods: {
    // 获取商城列表
    getMallList () {
      // let map = new Map()
      // let temp = mallTypeList
      // console.log(temp);
      // mallTypeList.map((item) => {
      //   item.list = []
      //   map.set(item.type.item.list)
      // })
    },

    // 创建商城
    create () {
      this.$refs['create'].open()
    }
  },
}
</script>

<style lang="scss" scoped>
.manage {
  position: relative;
  .manage-head {
    position: fixed;
    top: 0;
    left: 0;
    height: 50px;
    width: 100%;
    background: #fff;
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
    z-index: 10;
  }
  .manage-head-content {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 970px;
    height: 100%;
    margin: 0 auto;
    line-height: 50px;
    text-align: right;
  }
}
</style>