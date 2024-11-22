import { configureStore } from '@reduxjs/toolkit';
import productReducer from './features/product/productSlice';
import { useDispatch } from 'react-redux';
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import productSlice from './features/product/productSlice';
const commonConfig = {
  storage
}

const productConfig = {
  ...commonConfig,
  key: 'shop/product',
  whitelist: ['productStore']
}

export const store = configureStore({
  reducer: {
    product: persistReducer(productConfig, productSlice),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
