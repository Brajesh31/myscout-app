import axios from "axios";

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig();

  axios.defaults.baseURL = config.public.apiUrl;
  axios.defaults.withCredentials = true;
  axios.defaults.withXSRFToken = true;

  // axios.interceptors.response.use(
  //   function (response) {
  //     return response;
  //   },
  //   function (error) {
  //     const response = error.response;
  //     if (response?.status === 401) {
  //       const router = useRouter();
  //       return router.push({ name: "logout" });
  //     }

  //     return Promise.reject({
  //       message: response?.data?.error.me,
  //       status: response?.status,
  //     });
  //   }
  // );
});
