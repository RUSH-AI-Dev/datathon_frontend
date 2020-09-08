<template>
  <v-app>
    <v-container>
      <h1 style="text-align:center">แจ้งปัญหาทั่ว กทม.</h1>
      <v-row class="justify-center">
        <v-col cols="25">
          <v-card class="mx-20 pa-5" outlined>
            <v-form @submit.prevent="submit">
              <v-text-field v-model="report.name" :counter="10" label="หัวข้อ" required></v-text-field>
              <v-textarea v-model="report.detial" :counter="100" label="รายละเอียด" required></v-textarea>
              <input @change="onFileSelected" type="file" name="" id=""  />
              <br />
              <v-img v-if="imageURL" :src="imageURL" height="200" width="200" class="mt-3"></v-img>
              <br />
              <br />
              <v-row>
                <v-spacer></v-spacer>
                <v-btn class="mr-4" @click="cancel">ยกเลิก</v-btn>

                <v-btn color="success" type="submit">ส่งด่วน</v-btn>
              </v-row>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
import api from "@/services/api";
export default {
  name: "Report-create",
  data: () => ({
    lat: "",
    lon: "",
    report: {
      name: "",
      detial: "",
      image: null
    },
    imageURL: null
  }),
  methods: {
    myFunction: function() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        this.error = "Geolocation is not supported.";
      }
    },
    showPosition: function(position) {
      this.lat = position.coords.latitude;
      this.lon = position.coords.longitude;
    },
    cancel() {
      this.$router.back();
    },
    onFileSelected(event) {
      const reader = new FileReader();
      reader.onload = event => {
        // for preview
        this.imageURL = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);

      // for upload
      this.report.image = event.target.files[0];
    },
    async submit() {
      let formData = new FormData();
      const { name, detial } = this.report;
      formData.append("name", name);
      formData.append("detial", detial);
      formData.append("image", this.report.image);
      formData.append("lat", this.lat);
      formData.append("long", this.lon);
      await api.addBangkok(formData);
      this.$router.back();
    }
  },
  async mounted() {
    this.myFunction();
    this.showPosition;
  }
};
</script>

<style>
</style>