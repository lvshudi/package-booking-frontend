import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    packageList: [
            
    ]
  },
  mutations: {
    initList(state, data) {
      state.packageList = data;
    }
  },
  getters: {
    packageLists: function (state) {
      let filteredTodoList = [];
      for (let i = 0; i < state.packageList.length; i++) {
          if (state.currentFilter === 'all' || state.currentFilter === state.packageList[i].status) {
              filteredTodoList.push(state.packageList[i])
          }
      }
      return filteredTodoList;
  }
  },
  actions: {
    addPackageInfo(context, packageInfo) {
      const url = "http://localhost:8082/packInfos";
      axios.post(url, packageInfo).then(function (response) {
        console.log(response.data);

      }).catch(function () {
        console.log('error');
      })
    },
    getPackageList(context) {
      const url = "http://localhost:8082/packInfos";
      axios.get(url).then(function (response) {
        console.log(response.data);
        context.commit('initList', response.data);
      }).catch(function () {
        console.log('error');
      })
    },
  }
})
