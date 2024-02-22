<template>
  <div id="app">
    <Header />
    <main class="container">
      <section class="sidebar">
        <h1 class="sidebar-title">Поиск сотрудников</h1>
        <input class="sidebar-search" type="search" v-model="querySearch" @change="searchHandler"
          placeholder="Введите Id или имя">
        <h2 class="result-title">Результаты</h2>
        <p class="sidepar-search-text" v-if="$store.getters.isNewQuery">начните поиск</p>
        <Loader />
        <p class="sidepar-search-text" v-if="$store.getters.isNothingValue">ничего не найдено</p>
        <PreviewCard v-for="user in allUsers" :key="user.id" :user="user" @openCard="openCard" />
      </section>
      <section class="main-content">
        <MainCard :user="currentUser" :main-card-visible="mainCardVisible" />
        <h3 class="main-content-text" v-if="!mainCardVisible">Выберите сотрудника, чтобы посмотреть его профиль</h3>
      </section>

    </main>
  </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex'
import PreviewCard from './components/PreviewCard.vue'
import MainCard from './components/MainCard.vue'
import Header from './components/Header.vue'
import Loader from './components/Loader.vue'

export default {

  name: 'App',
  components: {
    PreviewCard,
    MainCard,
    Header,
    Loader,
  },
  data() {
    return {
      querySearch: '',
      currentUser: {},
      mainCardVisible: false,
    }
  },
  mounted() {
    this.allUsers
    this.$store.commit('showIsNew')
    this.$store.commit('hideIsNothing')
  },

  methods: {
    ...mapActions(['getUsersId', 'getMoreUsersId']),
    searchHandler() {
      if (this.querySearch.length == 0) {
        this.$store.commit('hideIsNothing')
        this.$store.commit('showIsNew')
      }
      this.getMoreUsersId(this.querySearch.split(','))
      this.mainCardVisible = false
      return this.allUsers
    },
    openCard(user) {
      this.currentUser = user
      this.mainCardVisible = true
      this.isActive = true
    }
  },
  computed: {
    ...mapGetters(["allUsers"]),

  },

}
</script>

<style lang="scss" scoped>
#app {
  font-family: Montserrat;
  font-weight: 400;
  color: rgba(51, 51, 51, 1);
}

.container {
  width: 1266px;
  margin: 0 auto;
}

main {
  display: flex;
  background: rgba(253, 253, 253, 1);
  min-height: 589px;
  border: 0px, 10px, 10px, 0px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
}

.sidebar {
  display: flex;
  flex-direction: column;
  gap: 22px;
  min-width: 276px;
  margin-left: 20px;
  margin-right: 30px;
  padding-top: 27px;

  .sidebar-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }

  .sidebar-search {
    border: 1px solid rgba(233, 236, 239, 1);
    border-radius: 8px;
    padding: 16px;
    background: white;
    width: 240px;
    font-size: 14px;
    line-height: 17px;

    &::placeholder {
      font-size: 14px;
      line-height: 17px;
      text-align: left;
      color: rgba(118, 120, 125, 1);
    }

    &:focus,
    &:active {
      outline: 1px solid rgba(233, 236, 239, 1);
      font-size: 14px;
      line-height: 17px;
      color: rgba(118, 120, 125, 1);
    }
  }

  .result-title {
    font-size: 16px;
    font-weight: 600;
    line-height: 22px;
  }

  .sidepar-search-text {
    font-size: 14px;
    line-height: 17px;
    margin-top: -12px;
    color: rgba(118, 120, 125, 1);
    ;
  }
}

.main-content-text {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 17px;
  font-weight: 400;
  color: rgba(118, 120, 125, 1);

}
</style>
