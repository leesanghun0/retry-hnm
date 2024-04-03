import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState= {
    productList: [],
    selectedItem: null,
    isLoading: false,
    error: null
};

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery,thunkApi)=>{
    try{
        let url = `https://my-json-server.typicode.com/leesanghun0/retry-hnm/products?q=${searchQuery}`;
        let response = await fetch(url);
        return await response.json();
    }catch(error){
        thunkApi.rejectWithValue(error.message);
    }
})

export const fetchProductDetail = createAsyncThunk('product/fetchProductDetail', async(id,thunkApi)=>{
    try{
        let url = `https://my-json-server.typicode.com/leesanghun0/retry-hnm/products/${id}`;
        let response = await fetch(url);
        return await response.json();
    }catch(error){
        thunkApi.rejectWithValue(error.message);
    }
   
});



// function productReducer(state=initialState,action){
//     let {type,payload} = action;

//     switch(type){
//         case "GET_PRODCUT_SUCCESS":
//             return {...state, productList:payload.data}
//         case "GET_PRODUCT_DETAIL_SUCCESS":
//             return {...state, selectedItem:payload.data}
//         default:
//             return {...state}
//     }
// }
// export default productReducer;

const productSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{ //데이터가 오는중
            state.isLoading = true;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{ //데이터가 성공적으로 도착함.
            state.isLoading = false;
            state.productList = action.payload;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{ //에러일경우
            state.isLoading = false;
            state.error = action.payload;
        })
    },
})

const ProductDetailSlice = createSlice({
    name:"ProductDetail",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProductDetail.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(fetchProductDetail.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.selectedItem = action.payload;
        })
        .addCase(fetchProductDetail.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload;
        })
    }
})


console.log("pppp",productSlice)

export const productActions= productSlice.actions
export const ProductDetailAction = ProductDetailSlice.actions;
export default productSlice.reducer
