<template>
  <el-dialog :visible.sync="show"
             width="40%"
             top="300px">
    <div class="flex-column col-center">
      <el-form :model="form"
               ref="form"
               label-width="80px"
               style="width:300px">
        <el-form-item label="名称"
                      prop="name"
                      verify>
          <el-input type="text"
                    v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="类型"
                      verify
                      class="form-item-none">
          <el-radio label="mall"
                    v-model="form.type">电商模板</el-radio>
          <el-radio label="model"
                    v-model="form.type">商城模板</el-radio>
        </el-form-item>

        <el-form-item label="行业"
                      verify
                      prop="name">
          <el-select placeholder="请选择行业"
                     v-model="form.industry">
            <el-option v-for="item in mallIndustryList"
                       :key="item.value"
                       :label="item.label"
                       :value="item.value"></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <!-- submit -->
      <div slot="footer"
           class="dialog-footer flex-center">
        <el-button type="primary"
                   round
                   style="width:140px"
                   @click="submit('form')">保存</el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
// import {cloneDeep} from 'lodash'
import { addProject } from '@/api/project'
import { mapGetters, mapMutations } from 'vuex'
import { rojectModel } from '@/config/project'
import { mallIndustryList, mallTypeList } from '@/config/mall'
export default {
  name: 'CreateDialog',
  data () {
    return {
      mallIndustryList,
      show: false,
      form: {
        type: 'mall',
      }
    };
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    ...mapMutations(['setProject']),

    open () {
      this.show = true
    },

    submit (form) {
      this.$refs["form"].validate((valid) => {
        console.log(valid);
        if (valid) {
          this.create();
        }
      });
    },

    // 创建商城
    async create () {
      console.log('创建商城');
      let map = new Map()
      mallTypeList.map((item) => map.set(item.type, item.logo))

      let project = {
        ...this._.cloneDeep(rojectModel),
        ...this.form,
        ...{ userId: this.userInfo.userId, logo: map.get(this.form.type) },
      }

      let { status, id } = await addProject(project);

      if (status == '10000') {
        project.id = id;
        this.setProject(project)
        this.$router.push({ name: "mall" });
      }
    }
  }
}
</script>


<style lang="scss" scoped>
input {
  border: 0;
  margin-bottom: 5px;
}

::v-deep .el-form-item {
  padding-bottom: 5px;
  border-bottom: solid 1px #e3e3e3;

  .el-form-item__label {
    text-align: left;
  }

  .el-form-item__error {
    top: 47px;
    left: -80px;
  }
}

::v-deep .el-button--primary {
  background: $color-theme !important;
}

::v-deep .el-select {
  width: 100%;

  input {
    padding-left: 0;
    border: 0;
  }
}

::v-deep .el-input__inner {
  border: 0px;
  margin: 0px;
  padding: 0px;
}

.form-item-none {
  border-color: transparent;
}
</style>