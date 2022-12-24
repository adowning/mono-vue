import axios from "axios";
import { wrapper } from 'axios-cookiejar-support';
import { CookieJar } from 'tough-cookie';

const jar = new CookieJar();
export const localService = wrapper(axios.create({ jar, baseURL: '/api', withCredentials: true,maxRedirects: 0},));
// export const localService = axios.create({jar},{
//   // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
//   baseURL: '/api',
//   withCredentials: true,
//   maxRedirects: 0,
// });

// intercept local service requests
localService.interceptors.request.use((config) => {
  return config;
});

// intercept local service responses
localService.interceptors.response.use((response) => {
  const cookieHeaders = response.headers['Set-Cookie'];
console.log(cookieHeaders)
  return response;
});
