import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import ActionCreators from '../action-creators/action-creators'

export const useAction = () => {
    const dispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch)
}