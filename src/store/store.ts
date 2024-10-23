import  cartSlice  from "./reducers/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./reducers/bookSlice";

export const bookStore = () => {
  return configureStore({
    reducer: {
      booking: bookSlice,
      cart:cartSlice
    },
  });
};

export type AppStore = ReturnType<typeof bookStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
