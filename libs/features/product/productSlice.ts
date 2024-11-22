import { createSlice } from '@reduxjs/toolkit';
import { Product } from '@/types/product';
import * as action from './asyncAction'
interface ProductState {
  list: {
    limit: number;
    products: Product[];
    skip: number;
    total: number;
},
  loading: boolean;
  error: string | null;
  hasMore: boolean;
}

const initialState: ProductState = {
  list: {
    limit: 20, 
    products: [],
    skip: 0, 
    total: 0,
  },
  loading: false,
  error: null,
  hasMore: true,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(action.getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(action.getProducts.fulfilled, (state, action) => {
        state.loading = false;
        const { products, total } = action.payload;
        state.list.products = [...state.list.products, ...products];
        state.list.skip += state.list.limit; 
        state.list.total = total; 
        state.hasMore = state.list.products.length < total;
      })
      .addCase(action.getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string; 
      });
  },
});

export default productSlice.reducer;
