import { MainState, MainAction, MainTypes } from './../../types/Main';

const initialState: MainState = {
    News: []
};

export const MainReducer = (state = initialState, action: MainAction): MainState => {
    switch (action.type) {
        case MainTypes.GET_NEWS:
            return { ...state, News: action.news }
        default:
            return state
    }
}