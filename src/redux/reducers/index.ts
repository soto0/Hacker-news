import { combineReducers } from 'redux';
import { MainReducer } from './Main';
import { NewReducer } from './New';


export const rootReducer = combineReducers({
    Main: MainReducer,
    New: NewReducer
});

export type RootState = ReturnType<typeof rootReducer>