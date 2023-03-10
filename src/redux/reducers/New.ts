import { NewState, NewAction, NewTypes } from './../../types/New';

const initialState: NewState = {
    New: [],
    NewComments: [],
    ChildrenComments: []
};

export const NewReducer = (state = initialState, action: NewAction): NewState => {
    switch (action.type) {
        case NewTypes.GET_NEW:
            return { ...state, New: action.new }
        case NewTypes.GET_NEW_COMMENTS:
            return { ...state, NewComments: action.newComments }
        case NewTypes.GET_CHILDREN_COMMENTS:
            return { ...state, ChildrenComments: action.childrenComments }
        default:
            return state
    };
};