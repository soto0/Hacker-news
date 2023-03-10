import React, { FC, useEffect } from 'react';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import Preloader from '../Preloader/Preloader';
import s from './Main.module.css';
import MainNew from './MainNew/MainNew';

const Main: FC = () => {
    const { getNews } = useActions();
    const { News } = useTypedSelector(state => state.Main);

    const sortedPosts = News?.sort((a: any, b: any) => b.data.time - a.data.time);

    const updatePosts = () => {
        getNews();
    };

    useEffect(() => {
        getNews();

        setInterval(() => {
            getNews()
        }, 60000);
    }, []);

    return (
        <div className={s.news}>
            <button className={s.update__posts} onClick={updatePosts}>Update posts</button>
            {
                News.length === 0 ?
                    <Preloader /> :
                    sortedPosts?.map((post: any) => {
                        return (
                            <MainNew id={post.data.id} author={post.data.by} key={post.data.id} score={post.data.score} time={post.data.time} title={post.data.title} />
                        )
                    })
            }
        </div>
    );
};

export default Main;