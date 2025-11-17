import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isOpen: false,
};

export const carritoSlice = createSlice({
  name: "carrito",
  initialState,
  reducers: {
    toggleCarrito: (state) => {
      state.isOpen = !state.isOpen;
    },
    añadirProducto: (state, action) => {
      const productoExistente = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (productoExistente) {
        productoExistente.cantidad++;
      } else {
        state.items.push({ ...action.payload, cantidad: 1 });
      }
    },
    eliminarProducto: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    vaciarCarrito: (state) => {
      state.items = [];
    },
  },
});

export const {
  toggleCarrito,
  añadirProducto,
  eliminarProducto,
  vaciarCarrito,
} = carritoSlice.actions;

export default carritoSlice.reducer;