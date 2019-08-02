<template>
  <div id="app">
    <Search placeholder="Search by name"></Search>
    <SearchTag placeholder="Search by tag"></SearchTag>
    <transition-group name="animated" enter-active-class="animated zoomInUp" leave-active-class="animated rollOut">
      <template v-for="item in studentsList">
          <StudentsList :key="item.id" :data="item"></StudentsList>
      </template>
    </transition-group>
  </div>
</template>

<script>
import StudentsList from './components/StudentsList';
import Search from './components/Search';
import SearchTag from './components/SearchTag';

export default {
  name: 'app',
  components: {
    StudentsList,
    Search,
    SearchTag,
  },
  computed: {
    studentsList() {
      return this.$store.getters.getStudentsList
    }
  },
  beforeMount() {
    this.$store.dispatch('addStudentsData');
  },
};
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 310px;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    #app {
      width: 700px;
    }
  }
</style>
