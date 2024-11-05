<template>
  <div>
    <MenuComponent/>
    <router-view class="p-3"></router-view>
  </div>
</template>

<script>
import MenuComponent from './components/MenuComponent.vue';

export default {
  name: 'App',
  components: {
    MenuComponent,
  }
}
</script>

<style>

</style>
