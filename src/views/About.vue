<template>
  <v-container>
    <div>
      <center>
        <h1 style="font-size:10px;">HELLO THERE</h1>
        <h1 style="color:#c41230;">กรุงเทพในฝัน</h1>
        <hr style="width:15%;" />
      </center>
    </div>
    <!-- Summary section -->
    <center>
      <h1>Developer</h1>
    </center>
    <v-row>
      <v-col lg="3" md="6" sm="12" cols="12">
        <AboutCard
          url="https://www.linkedin.com/in/ratchaphon-khaemphukhiao-a51a12118/"
          title="Ratchaphon K."
          subtitle="Research Assistant"
          avatar_bg="#00a65a"
          avatar_ic="https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/118649323_1520577998129673_5840051331023659476_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_eui2=AeGKboT0Vj9uKvwSBSjv8waftzNYA5nbvpe3M1gDmdu-lzdPTVwRA1D3vALE1_PtrHasdFmPZdndkUe3xa6vlGbN&_nc_ohc=j8CbG0MaLUEAX9f4Wrr&_nc_ht=scontent.fbkk2-8.fna&oh=85ad85eaf4019b8589d85b3b5fd3d242&oe=5F72B13D"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <AboutCard
          url="https://www.linkedin.com/in/chayanan-tantasirin-a3831b1b6/"
          title="Chayanan T."
          subtitle="Research Assistant"
          avatar_bg="#00a65a"
          avatar_ic="https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/118614219_1520578018129671_1007126938908139422_o.jpg?_nc_cat=106&_nc_sid=730e14&_nc_eui2=AeG619Y5BZYgigmYENJpDLLCAJ6n8lujC-kAnqfyW6ML6dvpX9Sdja_-rjJaHBo5fuMX3ccOiyphaXsGR7r9E6Us&_nc_ohc=AC9WZXtMhWsAX_vZSfh&_nc_ht=scontent.fbkk2-7.fna&oh=acbbd6138f4c4b264ed158367b30e3a4&oe=5F7318BC"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <AboutCard
          url="https://www.linkedin.com/in/narate-vongserewattana-bba0391b2/"
          title="Narate V."
          subtitle="Research Assistant"
          avatar_bg="#00a65a"
          avatar_ic="https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/118595104_1520578028129670_5879187595779103135_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_eui2=AeHvoW9ukudxX7Hx2XALtTSSZA3Nf-5rZe5kDc1_7mtl7pAw8gSCVoWbVcJi_41cFFZp_nLuJpJ3Uk5oblqGWUzr&_nc_ohc=IyUmWwPjsC0AX-ZzDRx&_nc_ht=scontent.fbkk2-7.fna&oh=d87b1ad0a0072ee79349ab42a4ea028d&oe=5F7450F3"
        />
      </v-col>

      <v-col lg="3" md="6" sm="12" cols="12">
        <AboutCard
          url="https://www.linkedin.com/in/chavis-rujichan-867bb219b/"
          title="Chavis R."
          subtitle="Research Assistant"
          avatar_bg="#00a65a"
          avatar_ic="https://scontent.fbkk2-7.fna.fbcdn.net/v/t1.0-9/118519690_1520578014796338_994663011942394454_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_eui2=AeGkJSXwDbPi-_dOQmT0r4vt6mI5fFaeBufqYjl8Vp4G55N6HeILBKSjvFd_iMQH3bT7Fe7uFpXZ1v5Z1uQXMmMH&_nc_ohc=v3v6zvf602IAX_1PWv_&_nc_ht=scontent.fbkk2-7.fna&oh=ee6f392cfb689a4ce3e31e8a36c9d547&oe=5F7473E8"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import AboutCard from "@/components/cards/AboutCard";
export default {
  components: {
    AboutCard
  }
};
</script>

<style>
</style>