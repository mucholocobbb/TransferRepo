const state = {
  mainArr: [],
  filteredArr: [],
  actualPage: 1,
  itemCountList: 15,
};
const getters = {
  getMainArr: (state: any): any => state.mainArr,
  getFilteredArr: (state: any): any => state.filteredArr,
  getActualPage: (state: any): any => state.actualPage,
  getItemCount: (state: any): any => +state.itemCountList,
};
const mutations = {
  setMainArr(state: any, data: any) {
    Object.assign(state.mainArr, data);
    state.mainArr = [...state.mainArr];
  },
  setfilteredArr(state: any, data: any) {
    state.filteredArr = [...data];
  },
  setActualPage(state: any, data: any) {
    state.actualPage = data;
  },
  setItemCount(state: any, data: any) {
    state.itemCountList = data;
  },
};
const actions = {};

export default {
  state,
  mutations,
  getters,
  actions,
};
