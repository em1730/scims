import { boot } from "quasar/wrappers";
import axios from "axios";

// const api = axios.create({ baseURL: 'https://api.example.com' })
const api = axios.create({
  baseURL:
    "https://13.229.45.28/plesk-site-preview/scims.online/https/172.26.12.98/",
});
//"https://13.229.45.28/plesk-site-preview/scims.online/https/172.26.12.98/"
//"http://127.0.0.1:8000"
export default boot(({ app }) => {
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };
