import axios from "axios";
import { Dispatch } from "react";
import { MainAction, MainTypes } from "../../types/Main";

export const getNews = () => {
    return async (dispatch: Dispatch<MainAction>) => {
        const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json').then(response => {
            const topStoriesIds = response.data.slice(300, 400);
            const requests = topStoriesIds.map((id: number) =>  axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));
            return Promise.all(requests);
        });
        
        dispatch({ type: MainTypes.GET_NEWS, news: response });
    };
};
