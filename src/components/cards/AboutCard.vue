<template>
  <v-card ripple id="AboutCard" @click="onClick">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline mb-1">{{title}}</v-list-item-title>
        <v-list-item-subtitle class="title">{{subtitle}}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" :color="avatar_bg">
        <v-img
          :src="avatar_ic"
          lazy-src=""
          aspect-ratio="1"
          max-width="100"
          max-height="100"
        ></v-img>
      </v-list-item-avatar>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "AboutCard",
  props: ["title", "subtitle", "avatar_bg", "avatar_ic", "url"],
  methods: {
    onClick() {
      window.open(this.url, '_blank');
    }
  }
};
</script>

<style></style>
