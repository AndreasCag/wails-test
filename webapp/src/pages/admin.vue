<template>
  <div class="admin-color-container">
    <div class="container admin-container" method="post">
      <h1>Изменение данных администратора</h1>

      <form action="">
        <div class="field">
          <label class="label">fullName</label>
          <p class="control">
            <input class="input" type="text" placeholder="Text input" v-model="fullName">
          </p>
        </div>

        <div class="field">
          <label class="label">telephone</label>
          <p class="control">
            <input class="input is-success" type="text" placeholder="Text input" v-model="telephone">
          </p>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <p class="control">
            <input class="input is-danger" type="text" placeholder="Email input" v-model="mail">
          </p>
        </div>

        <div class="field">
          <p class="control">
            <button class="button is-primary">Submit</button>
          </p>
        </div>
      </form>

    </div>
    <p>failedToGetInfo : {{failedToGetInfo}}</p>
    <p>isGettingInfo : {{isGettingInfo}}</p>
    <p>failedToSetInfo : {{failedToSetInfo}}</p>
    <p>isSettingInfo : {{isSettingInfo}}</p>
    <p>getTelephone : {{getTelephone}}</p>
    <p>getMail : {{getMail}}</p>
    <p>getFull Name : {{getFullName}}</p>
    <p>telephone : {{telephone}}</p>
    <p>fullName : {{fullName}}</p>
    <button @click.prevent="submitGetInfo">s1</button>
    <button @click.prevent="submitSetInfo">s2</button>
  </div>
</template>

<script>
  var utils = require('@/utils');

  module.exports = {

    name: 'Admin',

    route: {
      meta: {
        crumb: 'Admin',
      },
    },

    data: function () {
      return {
        mail: '',
        telephone: '',
        fullName: '',
      }
    },

    computed: utils.merge([
      Vuex.mapGetters('admin', {
        failedToGetInfo: 'failedToGetInfo',
        isGettingInfo: 'isGettingInfo',
        failedToSetInfo: 'failedToSetInfo',
        isSettingInfo: 'isSettingInfo',
        getMail: 'mail',
        getTelephone: 'telephone',
        getFullName: 'fullName',
      }),
    ]),

    methods: utils.merge([
      Vuex.mapActions('admin', {
        doGetInfo: 'getInfo',
        doSetInfo: 'setInfo',
      }),
      {
        submitGetInfo: function () {
          this.doGetInfo()
            .catch(console.warn);
        },
        submitSetInfo: function () {
          this.doSetInfo({mail:this.mail, telephone: this.telephone, fullName: this.fullName})
            .catch(console.warn);
        },
      },
    ]),
  }
</script>

<style lang="scss" scoped>
  $sm: 768px;
  $md: 992px;
  $lg: 1200px;

  @mixin font-sizer($size) {
    font-size: $size;

    @media (max-width: $lg) {
      font-size: $size*0.8;
    }
    @media (max-width: $md) {
      font-size: $size*0.7;
    }
    @media (max-width: $sm) {
      font-size: $size*0.6;
    }
  }

  .attention {
    background-color: #ffaaaa;
  }

  .admin-color-container {
    background-color: #fdf0d5;
    flex-grow: 1;
    .admin-container {
      max-width: 500px !important;
      h1 {
        @include font-sizer(2.5em);
      }
    }
  }
</style>
