//这个文件主要用来管理数据
// 用户管理 state 代表数据
export const state = () => ({
  // 采用接口返回的数据结构
  userInfo: {
      token: "",
      user: {},
  },
}) 

//  mutations  同步修改state数据
export const mutations = {
  // 设置用户参数,mutations下的方法第一个参数固定是state
  // data参数不是必要的,是调用方法时候传入的参数
  setUserInfo(state,data){
    // data是后台返回的用户信息
    state.userInfo =data;
  }
};

//  actions 异步修改state数据
export const actions = {};
