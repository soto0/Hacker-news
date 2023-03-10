import React, { FC, useEffect, useState } from 'react';
import s from './New.module.css';
import arrow from './../../assets/arrow.svg';
import { useNewActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useNavigate } from "react-router-dom";
import { DateFormatter } from '../DateFormatter/DateFormatter';

const New: FC = () => {
    const [time, setTime] = useState<string>();
    const { getNew, getNewComments, getChildrenComments } = useNewActions();
    const { New, NewComments, ChildrenComments } = useTypedSelector(state => state.New)
    const newId = window.location.pathname.slice(5);
    const navigate = useNavigate();

    useEffect(() => {
        getNew(newId);
        getNewComments(newId);
        setTime(DateFormatter(New.time));
    }, [New.time, newId]);

    const UpdateComments = () => {
        getNewComments(newId);
    };

    const NavigateToMain = () => {
        navigate('/');
    };

    return (
        <div className={s.new}>
            <img src={arrow} alt="arrow" className={s.back} onClick={NavigateToMain} />
            <div className={s.new__top}>
                <p className={s.date}>{time === 'undefined, NaN.NaN' ? undefined : time}</p>
                <p className={s.comments_count}>{New?.descendants ? New?.descendants : 0}</p>
            </div>
            <div className={s.new__center}>
                <h2 className={s.new__title}>{New?.title}</h2>
                <p className={s.link}><p>Link:</p> <a href={New?.url}>{New?.url}</a></p>
                <p className={s.author}>By: <span>{New?.by}</span></p>
            </div>
            <div className={s.new__down}>
                <div className={s.comments}>
                    {!NewComments ? <button className={s.update__comments} onClick={UpdateComments}>Update comments</button> : undefined}
                    {
                        NewComments.map((comment: any) => {
                            return (
                                <div className={s.comment}>
                                    <div className={s.comment__top}>
                                        <p className={s.author}>By: <span>{comment.by}</span></p>
                                    </div>
                                    <div className={s.comment__center}>
                                        <p className={s.comment__text}>{comment.text}</p>
                                        <button className={s.show_children_comment} onClick={() => {
                                            getChildrenComments(comment.kids);
                                        }} >
                                        {comment.kids ? 'show comments' : undefined}</button>
                                    </div>
                                    {
                                        ChildrenComments?.map((childrenComment: any) => {
                                            return (
                                                childrenComment.parent !== comment.id ? undefined :
                                                    <div className={s.comment__bottom}>
                                                        <div className={s.sub__comment}>
                                                            <div className={s.comment__top}>
                                                                <p className={s.author}>By: <span>{childrenComment.by}</span></p>
                                                            </div>
                                                            <div className={s.comment__center}>
                                                                <p className={s.comment__text}>{childrenComment.text}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default New;