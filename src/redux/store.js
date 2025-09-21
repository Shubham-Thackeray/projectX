import { applyMiddleware, compose, combineReducers, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authReducer";
import userData from "./userData/userDataReducer";

const rootReducer = combineReducers({
    auth: authReducer,
    userData,
});

// Use a fallback for Redux DevTools if it's not available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

store.subscriber = () => {
    console.log("State:", store.getState());
};

