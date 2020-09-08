<template>
    <v-app-bar app dense>
      <v-app-bar-nav-icon @click="HideClickMenu"></v-app-bar-nav-icon>

      <v-toolbar-title>กรุงเทพในฝัน</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-app-bar>
</template>


<script>
export default {
  methods: {
    HideClickMenu() {
      if (this.$store.state.Hide_Menu == false) {
        this.$store.state.Hide_Menu = true;
      } else {
        this.$store.state.Hide_Menu = false;
      }
    }
  }
};
</script>