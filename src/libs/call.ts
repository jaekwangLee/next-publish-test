import axios from 'axios';
const BASE_URL = 'https://reqres.in/api';

export const fetchAddressListByPageAPI = (page: number) => {
  return axios.get(`${BASE_URL}/users?page=${page}`);
};

export const fetchAddressByIdAPI = (id: number) => {
  return axios.get(`${BASE_URL}/users/${id}`);
};

export const updateAddressAPI = (id: number, data: { name: string; job: string }) => {
  return axios.put(`${BASE_URL}/users/${id}`, data);
};
