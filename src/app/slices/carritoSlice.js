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
    aumentarCantidad: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.cantidad++;
      }
    },
    disminuirCantidad: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        if (item.cantidad === 1) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        } else {
          item.cantidad--;
        }
      }
    },
  },
});

export const {
  toggleCarrito,
  añadirProducto,
  eliminarProducto,
  vaciarCarrito,
  aumentarCantidad,
  disminuirCantidad,
} = carritoSlice.actions;

export default carritoSlice.reducer;