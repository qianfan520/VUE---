import createPersistedState from 'vuex-persistedstate'
export default({store})=>{
    window.onNuxtReady(()=>{
        createPersistedState({
            key:'store'  //读取本地储存的数据到store
        })('store')
    })
}