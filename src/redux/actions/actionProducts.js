import { addDoc, collection, deleteDoc, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import { typesProductos } from "../types/types";
 
export const editAsync = (nombre, producto) => {
    console.log(nombre, producto);
    return async (dispatch) => {
        const collectionTraer = collection(db, "productosDB");
        const q = query(collectionTraer, where("nombre","==", 'codigo' ));
        const traerDatosQ = await getDocs(q);
        let id;
        traerDatosQ.forEach( async (docu) => {
            id = docu.id
        })
        console.log(id);
        const documRef = doc(db, "productosDB", id)
        await updateDoc(documRef, producto)
            .then(resp => {
                dispatch(listAsync());
                console.log(resp);
            })
            .catch((err) => console.log(err));
            dispatch(editSync(producto));
    }
} 

export const editSync = (producto) => {
    return {
        type: typesProductos.editSync,
        payload: producto
    }
}

//-------------------delete--------------------//
export const deleteAsync = (nombre) => {
    return async (dispatch) => {
        const collectionTraer = collection(db, "productosDB");
        const q = query(collectionTraer, where("nombre", "==", nombre));
        const traerDatosQ = await getDocs(q);
        traerDatosQ.forEach((docum => {
            deleteDoc(doc(db, "productosDB", docum.id))
        }))
        dispatch(deleteSync(nombre));
        dispatch(listAsync());
    }
}

export const deleteSync = (producto) => {
    return {
        type: typesProductos.delete,
        payload: producto
    }
}

//---------------listar----------------//
export const listAsync = () => {
    return async (dispatch) => {
        const collectionTraer = await getDocs(collection(db, "productosDB"));
        const productos = [];
        collectionTraer.forEach((doc) => {
            productos.push({
                ...doc.data()
            })
        })
        console.log(productos);
        dispatch(listSync(productos));
    }
}

export const listSync = (productos) => {
    return {
        type: typesProductos.list,
        payload: productos
    }
}

//-------------agregar---------------//
export const addAsync = (producto) => {
    return (dispatch) => {
        addDoc(collection(db, "productosDB"), producto)
            .then(resp => {
                dispatch(addSync(producto));
                // dispatch(listAsync())
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addSync = (producto) => {
    return {
        type: typesProductos.add,
        payload: producto
    }
}

// ------- Agregar desde formik ------- //
export const addFormikAsync = (user) => {
    return (dispatch) => {
        addDoc(collection(db, 'User'), user)
            .then(resp => {
                console.log(resp);
                dispatch(addFormikSync(user))
            })
            .catch(error => {
                console.warn(error);
            })
    }
}

export const addFormikSync = (user) => {
    return {
        type: typesProductos.addFormik,
        payload: user
    }
}