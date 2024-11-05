<template>
  <div>
    <MenuComponent/>
    <HomeComponent/>
    <router-view></router-view>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue';
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent,
    HomeComponent
  }
}
</script>

<style>

</style>
