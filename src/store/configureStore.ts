import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers";

export function configureStore(initialState?: any) {
    const store = createStore(rootReducer, initialState);
    return store;
}

export default configureStore;