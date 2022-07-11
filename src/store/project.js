import { fixedPages } from '@/config/project'
import { getProject, settingProject } from '@/utils/auth'
export default {
  state: {
    project: getProject(),
    fixedPages,             // 静态页面集合
    curPage: null,          // 当前页面
    curComponent: null,     // 当前物料
    dragComponent: null,    // 拖拽物料
    dragStatus: false,      // 拖拽入页面状态
  },
  getters: {
    project: state => state.project,
    fixedPages: state => state.fixedPages,
    curPage: state => state.curPage || state.project?.pages?.find(page => page.home) || null,
    curComponent: state => state.curComponent,
    dragComponent: state => state.dragComponent,
    dragStatus: state => state.dragStatus,
  },
  mutations: {
    // 初始化重置项目
    setProject (state, project) {
      state.project = project
      settingProject(state.project)
      state.curPage = state.project.pages.find(page => page.home)
    },

    // 设置首页为当前页
    setHomePage (state, page) {
      state.curPage = state.project.pages.find(page => page.home)
    }
  }
}