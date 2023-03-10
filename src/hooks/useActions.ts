import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as MainActionCreators from './../redux/action-creators/Main';
import * as NewActionCreators from './../redux/action-creators/New';

export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(MainActionCreators, dispatch);
};

export const useNewActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(NewActionCreators, dispatch);
};