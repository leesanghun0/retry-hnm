// import { productActions } from "../reducers/productSlice";
// function getProducts(searchQuery){
//     return async (dispatch, getState)=>{
//         let url = `https://my-json-server.typicode.com/leesanghun0/retry-hnm/products?q=${searchQuery}`;
//         let response = await fetch(url);
//         let data = await response.json();
//         console.log(data);
//         //dispatch({type:"GET_PRODCUT_SUCCESS",payload:{data}});
//         dispatch( productActions.getAllProducts({data}))
//     }
// }

// function getProductDetail(id){
//     return async (dispatch)=>{
//         let url = `https://my-json-server.typicode.com/leesanghun0/retry-hnm/products/${id}`;
//         let response = await fetch(url);
//         let data = await response.json();
//         //dispatch({type:"GET_PRODUCT_DETAIL_SUCCESS",payload:{data}})
//         dispatch(productActions.getSingleProduct({data}))
//     }
// }



// export const productAction={ getProductDetail};