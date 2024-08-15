import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    productData: [],
    userInfo: null,
};

export const crispSlice = createSlice({
    name: "crisp",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = state.productData.find(
                (item) => item.id === action.payload.id
            );
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.productData.push(action.payload);
            }
        },
        deleteItem:(state,action)=>{
          state.productData = state.productData.filter((item)=>item.id !== action.payload
)},

        resetCart:(state)=>{
          state.productData =[]
        },
            increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
  },
  removeUser: (state) => {
      state.userInfo = null; // Set userInfo to null to indicate no user is logged in
  }
    },
});

export const {

  deleteItem,
  resetCart,
  increamentQuantity,
  decrementQuantity,
  addUser,
  removeUser,
} = crispSlice.actions;
export const { addToCart } = crispSlice.actions;
export default crispSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// const initialState = {
//   productData: [],
//   userInfo: null,
// };


// export const crispSlice = createSlice({
//   name: "crisp",
//   initialState,
//   reducer: {
//     addToCart: (state, action) => {
//       const item = state.productData.find(
//         (item) => item.id === action.payload.id
//       );

//       if (item) {
//         item.quantity += action.payload.quantity;
//       } else {
//         state.productData.push(action.payload);
//       }
//     },

//     deleteItem: (state, action) => {
//       state.productData = state.productData.filter(
//         (item) => item.id !== action.payload
//       );
//     },
//     resetCart: (state) => {
//       state.productData = [];
//     },
//     // =============== User Start here ==============
//     addUser: (state, action) => {
//       state.userInfo = action.payload;
//     },
//     removeUser: (state) => {
//       state.userInfo = null;
//     },
//     // =============== User End here ================
//   },
// });



// export default crispSlice.reducer;