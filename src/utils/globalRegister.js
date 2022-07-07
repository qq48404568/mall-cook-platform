import Vue from 'vue'

// 注册所有全局组件
register(require.context('@/components/global', true, /.vue/))
