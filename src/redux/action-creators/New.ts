import { NewTypes } from './../../types/New';
import axios from "axios";
import { Dispatch } from "react";
import { NewAction } from "../../types/New";


export const getNew = (newId: string) => {
    return async (dispatch: Dispatch<NewAction>) => {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newId}.json?print=pretty`);
        dispatch({ type: NewTypes.GET_NEW, new: response.data });
    }
};

export const getNewComments = (newId: string) => {
    return async (dispatch: Dispatch<NewAction>) => {
        const response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${newId}/kids.json`);
        const commentIds = response.data;

        const commentPromises = commentIds ? commentIds.map(async (commentId: number) => {
            const commentResponse = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${commentId}.json`);
            return commentResponse.data;
        }) : [];
          

        const commentData = await Promise.all(commentPromises);
        dispatch({ type: NewTypes.GET_NEW_COMMENTS, newComments: commentData });
    };
};

export const getChildrenComments = (commentIds: []) => {
    return async (dispatch: Dispatch<NewAction>) => {
        const requests = commentIds.map(id =>
            axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        );

        const responses = await Promise.all(requests);

        const childrenComments = responses.map(response => response.data);
        dispatch({ type: NewTypes.GET_CHILDREN_COMMENTS, childrenComments });
    };
};
