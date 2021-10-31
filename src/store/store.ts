import { combineReducers, createStore} from 'redux'
import {shopReducer} from "./shopReducer";

const rootReducer = combineReducers({
    shopReducer: shopReducer
})
export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>