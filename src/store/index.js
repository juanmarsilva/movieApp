import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk)), // redux thunk nos permite en nuestras acciones poder utilizar funciones. Utilizando funciones podemos realizar pedidos asincronos dentro de nuestras acciones. 
);
  
export default store;

