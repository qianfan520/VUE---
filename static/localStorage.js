import createPersistedState from 'vuex-persistedstate'

// export default是nuxt的固定格式
// 函数有一个参数,这个参数是nuxt对象
export default ({store}) => {
    window.onNuxtReady(() => {
        createPersistedState({
            key: "store", // 读取本地存储的数据到store
        })(store)
    })
}