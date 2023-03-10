import React, { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DateFormatter } from '../../DateFormatter/DateFormatter';
import s from './MainNew.module.css';

interface NewProps {
    id: number,
    author: string,
    score: number,
    time: number,
    title: string,
}

const New: FC<NewProps> = (props) => {
    const [ time, setTime ] = useState<string>();

    useEffect(() => {
        setTime(DateFormatter(props.time));
    }, [props.time]);
    
    return (
        <Link to={`New/${props.id}`} className={s.new}>
            <div className={s.new__left}>
                <h2 className={s.title}>{props.title}</h2>
                <div className={s.new__down}>
                    <p className={s.author__name}>By:  {props.author}</p>
                    <p className={s.rating}>Rating: {props.score}</p>
                </div>
            </div>
            <div className={s.new__right}>
                <p className={s.date}>{time}</p>
            </div>
        </Link>
    );
};

export default New;