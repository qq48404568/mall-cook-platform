import request from '@/utils/request'

/**
 * 新增项目
 */
export const addProject = async data =>
  request({ url: 'project/add', method: 'POST', data })