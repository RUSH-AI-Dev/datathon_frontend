<template>
  <v-app>
    <v-container>
      <h1 style="text-align:center">คุณอยากได้งบแบบไหน?</h1>
      <v-row class="justify-center">
        <v-col cols="25">
          <v-card class="mx-20 pa-5" outlined>
            <v-form @submit.prevent="submit">
              <h1 style="font-size:15px;">การจัดบริการสาธารณะด้านการศึกษา</h1>
              <v-slider
                v-model="Budget.A"
                v-on:change="signalChange"
                min="0"
                :max="Budget.ALL"
                thumb-label
              ></v-slider>

              <h1 style="font-size:15px;">การจัดบริการสาธารณะด้านโครงสร้างพื้นฐาน</h1>
              <v-slider
                v-model="Budget.B"
                v-on:change="signalChange"
                min="0"
                :max="Budget.ALL"
                thumb-label
              ></v-slider>

              <h1 style="font-size:15px;">การจัดบริการสาธารณะด้านสังคม</h1>
              <v-slider
                v-model="Budget.C"
                v-on:change="signalChange"
                min="0"
                :max="Budget.ALL"
                thumb-label
              ></v-slider>

              <h1 style="font-size:15px;">การจัดบริการสาธารณะด้านสิ่งแวดล้อม</h1>
              <v-slider
                v-model="Budget.D"
                v-on:change="signalChange"
                min="0"
                :max="Budget.ALL"
                thumb-label
              ></v-slider>
              <v-spacer></v-spacer>
              <center>
                <v-btn class="mr-4" @click="cancel">ยกเลิก</v-btn>
                <v-btn color="success" type="submit">ส่งด่วน</v-btn>
              </center>
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
  name: "Budget-create",
  data: () => ({
    Budget: {
      ALL: 100,
      A: 0,
      B: 0,
      C: 0,
      D: 0
    }
  }),
  methods: {
    signalChange() {
      if (this.Budget.ALL >= 0 && this.Budget.ALL <= 100) {
        this.Budget.ALL =
          100 - this.Budget.A - this.Budget.B - this.Budget.C - this.Budget.D;
        console.log(this.Budget.ALL);
        console.log("***********************************");
        console.log(this.Budget.A);
        console.log(this.Budget.B);
        console.log(this.Budget.C);
        console.log(this.Budget.D);
        console.log("***********************************");
      }
    },
    cancel() {
      this.$router.back();
    },
    async submit() {
      let formData = new FormData();
      formData.append("A", this.Budget.A);
      formData.append("B", this.Budget.B);
      formData.append("C", this.Budget.C);
      formData.append("D", this.Budget.D);
      await api.addBudget(formData);
      this.$router.back();
    }
  }
};
</script>

<style>
</style>