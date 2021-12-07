import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import DataFormReduser from './DataForm/reducer'
import FormReduser from './Form/reducer'

const reducers = combineReducers({ DataFormReduser, FormReduser });

export const store = createStore(
  reducers,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);