import axiosClient from './axiosClient';

const productApi = {
  getAll: (params: { limit: number; skip: number })=> {
    return axiosClient.get('/products', { params });
  },
};

export default productApi;
