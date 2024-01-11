import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
let instance: AxiosInstance;
export function getApiInstance(config?: CreateAxiosDefaults) {
  console.log(process.env.NEXT_PUBLIC_APP_API_KEY);
  if (!instance) createApiInstance();
  return instance;
}
function createApiInstance(config?: CreateAxiosDefaults) {
  instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_API_URL,
    headers: {
      common: {
        'Content-Type': 'application/json',
      },
      'x-api-key': process.env.NEXT_PUBLIC_APP_API_KEY,
      // Authorization: process.env.NEXT_PUBLIC_APP_API_KEY,
    },
    ...config,
  });
}
