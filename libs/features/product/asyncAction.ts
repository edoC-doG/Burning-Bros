import { createAsyncThunk } from '@reduxjs/toolkit';
import productApi from '@/libs/api/productApi';
export const getProducts = createAsyncThunk(
    'product/newProducts',
    async (params: { limit: number; skip: number }, { rejectWithValue }) => {
        const response = await productApi.getAll(params)
        try {
            const response = await productApi.getAll(params);
            return response.data;
          } catch (error: any) {
            return rejectWithValue(error.message);
          }
    }
)