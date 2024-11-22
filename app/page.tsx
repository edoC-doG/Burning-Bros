"use client"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProductList from "@/components/ProductList";
import StoreProvider from "./StoreProvider";
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from "@/libs/store";
export default function Home() {
  return (
    <StoreProvider>
      <PersistGate loading={null} persistor={persistor}>
        <main className="flex flex-col min-h-screen overflow-hidden">
          <Header />
          <ProductList />
          <Footer />
        </main>
      </PersistGate>
    </StoreProvider >
  );
}
