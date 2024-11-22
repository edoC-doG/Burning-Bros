import axiosClient from './axiosClient';

const productApi = {
  getAll: (params: { limit: number; skip: number })=> {
    return axiosClient.get('/products', { params });
  },
  search: (query: string) => {
    return axiosClient.get(`/products/search`, { params: { q: query } });
  },
};

export default productApi;
