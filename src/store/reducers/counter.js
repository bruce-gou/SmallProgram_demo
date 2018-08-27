import { handleActions } from 'redux-actions'
import { REFRESh } from '../types/counter'

// export default handleActions({
//   [REFRESh] (state) {
//     console.log(state)
//     return {
//       ...state,
//       flg: true
//     }
//   }
// }, {
//   flg: false
// })
const initState = {  // 默认仓库数据
  flg: false
}
const Reducer = (state = initState, action) => {  // userdeux 规则
  switch (action.type) {
    case REFRESh:
      return {...state, flg: action.data}
    default:
      return state
  }
}
export default Reducer