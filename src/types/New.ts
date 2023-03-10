export interface NewState {
    New: any,
    NewComments: any[],
    ChildrenComments: any[]
};

export enum NewTypes {
    GET_NEW = 'GET_NEW',
    GET_NEW_COMMENTS = 'GET_NEW_COMMENTS',
    GET_CHILDREN_COMMENTS = 'GET_CHILDREN_COMMENTS'
};

interface getNew {
    type: NewTypes.GET_NEW;
    new: any[]
};

interface getNewComments {
    type: NewTypes.GET_NEW_COMMENTS,
    newComments: any[]
}

interface getChildrenComments {
    type: NewTypes.GET_CHILDREN_COMMENTS,
    childrenComments: any[]
}


export type NewAction = getNew | getNewComments | getChildrenComments;