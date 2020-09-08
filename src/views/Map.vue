<template>
  <v-app>
    <div style="height: 92%; width: 100%">
      <l-map :zoom="zoom" :center="center">
        <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></l-tile-layer>
        <l-marker v-for="(mDataArray, i) in mDataArrays" :key="i" :lat-lng="[mDataArray.lat, mDataArray.long]">
          <l-popup>
            <div @click="innerClick">
              <v-img
                :src="mDataArray.image  | imageUrl"
                aspect-ratio="1.7"
              ></v-img><h1 style="font-size:15px;">{{mDataArray.name}}</h1>
              <p>{{mDataArray.detial}}</p>
            </div>
          </l-popup>
        </l-marker>
      </l-map>
    </div>
  </v-app>
</template>

<script>
import api from "@/services/api";
export default {
  data() {
    return {
      mDataArrays: [],
      now: Date.now(),
      zoom: 10,
      center: L.latLng(13.77634, 100.511158),
      showParagraph: false
    };
  },
  computed: {
    simplePopup() {
      return `เตรียมปิดอีกแล้ว!! “พระราม 2” ตำนานถนนเจ็ดชั่วโคตร กับการก่อสร้างที่ไม่สิ้นสุด ${this.now}`;
    }
  },
  methods: {
    async loadBangkok() {
      let result = await api.getBangkok();
      this.mDataArrays = result.data;
    },
    updateNow() {
      this.now = Date.now();
    },
    innerClick() {
      alert("Click!");
    }
  },
  async mounted() {
    this.loadBangkok();
  }
};
</script>

<style>
</style>