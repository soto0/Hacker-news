export interface MainState {
    News: any[]
};

export enum MainTypes {
    GET_NEWS = 'GET_NEWS'
};

interface getNews {
    type: MainTypes.GET_NEWS;
    news: any[]
};

export type MainAction = getNews;