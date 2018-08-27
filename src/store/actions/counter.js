import { REFRESh } from '../types/counter'
import { createAction } from 'redux-actions'

// export const Refresh = createAction(REFRESh, () => {
//   return new Promise(resolve => {
//     resolve(true)
//   })
// })
// 刷新聊天记录页面
export const Refresh = (data) => ({type: REFRESh, data})