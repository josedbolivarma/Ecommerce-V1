import { typesProductos } from "../types/types";

const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case typesProductos.add:
            return {
                products: [action.payload]
            }
            case typesProductos.addFormik: 
                return {
                    products: [action.payload]
                }

            case typesProductos.list: 
                console.log(state);
                return {
                    products: [...action.payload]
                }
            case typesProductos.delete:
                return {
                    products: state.products.filter(p => p.nombre !== action.payload)
                }
                
            default:
                return state;
    }
}