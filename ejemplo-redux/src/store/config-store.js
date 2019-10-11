import { createStore, combineReducers, applyMiddleware } from 'redux';
import tareas from './tareas';
import thunk from 'redux-thunk';

export default function configStore() {
  const appReducer = combineReducers({tareas})

  return createStore(appReducer, applyMiddleware(thunk));
  // return createStore(tareas);
}