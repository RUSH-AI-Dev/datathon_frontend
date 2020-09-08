import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import LongdoMap from "longdo-map-vue";
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';
import L from 'leaflet';
import { imageUrl } from "@/services/constants";
import Vue2Filters from "vue2-filters";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);
Vue.component('l-popup', LPopup);
// import VueLeaflet from '@vdcrea/vue-leaflet'

Vue.use(L)

Vue.use(LongdoMap, {
  load: {
    apiKey: "8e3fbfe840663d611ed921cc571ace13",
  },
});

Vue.use(Vue2Filters);

Vue.filter("imageUrl", function(image) {
  return `${imageUrl}/${image}?timestamp=${Date.now()}`;
});

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  LongdoMap,
  render: (h) => h(App),
}).$mount("#app");
