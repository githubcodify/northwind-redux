import { applyMiddleware, createStore } from "redux";
import rootReducer from "./index";
import { thunk } from "redux-thunk";

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(thunk));
}

// const configureStore = () => {
//     const store = createStore(
//         rootReducer,
//     )
//     return store;
// }

// export default configureStore;