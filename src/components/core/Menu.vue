<template>
  <v-navigation-drawer app permanent absolute>
    <router-link to="/" exact>
      <v-img src="@/assets/logo.jpg" alt width="100%" />
    </router-link>
    <v-list shaped>
      <v-list-item-group v-model="selectedMenu" mandatory color="primary">
        <v-list-item
          class="tile"
          v-for="([icon, title, route], index) in menus"
          :key="index"
          @click="onClickMenu(route)"
        >
          <v-list-item-icon>
            <v-icon color="white">{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  methods: {
    onClickMenu(link) {
      this.$router.push(link).catch(err => {});;
    }
  },
  mounted() {
    this.selectedMenu = this.menus.findIndex(
      menu => menu[2] == this.$route.path
    );
  },
  data() {
    return {
      selectedMenu: 0,
      menus: [
        ["mdi-apps-box", "แจ้งปัญหาทั่ว กทม.", "/Dashboard"],
        ["mdi-apps-box", "งบ กทม.", "/Dashboard"],
        ["mdi-google-maps", "รวมปัญหาทั่ว กทม.", "/Map"],
        ["mdi-file-document-box-check-outline", "About", "/about"]
      ]
    };
  },
  watch: {
    $route(to, from) {
      this.selectedMenu = this.menus.findIndex(menu => menu[2] == to.path);
    }
  }
};
</script>

<style>
</style>
