<template>
  <v-app>
      <Header />
      <Menu v-if="$store.state.Hide_Menu" />
      <Content />
  </v-app>
</template>

<script>
import Header from "@/components/core/Header";
import Menu from "@/components/core/Menu";
import Content from "@/components/core/Content";
export default {
  name: "App",
  components: {
    Header,
    Menu,
    Content
  }
  };
</script>

<style>
</style>