var api = require('@/api');

module.exports = {
  namespaced: true,
  state: {
    mail: 'asdasd',
    telephone: 'qwe',
    fullName: 'vccv',

    failedToGetInfo: false,
    isGettingInfo: false,

    failedToSetInfo: false,
    isSettingInfo: false,
  },
  getters: {
    'mail': function (state) {
      return state.mail;
    },
    'telephone': function (state) {
      return state.telephone;
    },
    'fullName': function (state) {
      return state.fullName;
    },
    'failedToGetInfo': function (state) {
      return state.failedToGetInfo;
    },
    'isGettingInfo': function (state) {
      return state.isGettingInfo;
    },
    'failedToSetInfo': function (state) {
      return state.failedToSetInfo;
    },
    'isSettingInfo': function (state) {
      return state.isSettingInfo;
    },
  },
  mutations: {
    'getInfo-failed': function (state) {
      state.failedToGetInfo = true;
      state.isGettingInfo = false;
    },
    'getInfo-succeeded': function (state, {info}) {
      state.failedToGetInfo = false;
      state.isGettingInfo = false;
      state.info = info;
    },
    'getInfo-started': function (state) {
      state.isGettingInfo = true;
    },
    'setInfo-failed': function (state) {
      state.failedToSetInfo = true;
      state.isSettingInfo = false;
    },
    'setInfo-succeeded': function (state, {info}) {
      state.failedToSetInfo = false;
      state.isSettingInfo = false;
      state.info = info;
    },
    'setInfo-started': function (state) {
      state.isSettingInfo = true;
    },
  },
  actions: {
    'getInfo': function (context) {
      context.commit('getInfo-started');
      return api.post('/v1/adminInfo/getInfo')
        .then(response => {
          context.commit('getInfo-succeeded', {info: response.data.result});
          return response;
        })
        .catch(err => {
          context.commit('getInfo-failed');
          throw err;
        })
    },
    'setInfo': function (context, info) {
      context.commit('setInfo-started');
      return api.post('/v1/adminInfo/setInfo', info)
        .then(response => {
          context.commit('setInfo-succeeded', {info: response.data.result});
          return response;
        })
        .catch(err => {
          context.commit('setInfo-failed');
          throw err;
        })
    }
  },
};


