import { ORDER_SUBMIT_START, ORDER_SUBMIT_SUCCESS, ORDER_SUBMIT_FAIL } from './actionType';

import axiosOrder from '../../axios-orders';

export const orderSubmitSuccess = (order, id) => {
    return {
        type: ORDER_SUBMIT_SUCCESS,
        id: id,
        order: order
    }
}

export const orderSubmitFail = (error) => {
    return {
        type: ORDER_SUBMIT_FAIL,
        error: error
    }
}

export const orderSubmitStart = () => {
    return {
        type: ORDER_SUBMIT_START
    }
}

export const submitOrder = (data) => {

    return dispatch => {
        dispatch(orderSubmitStart())
        axiosOrder.post("/orders.json", data).then(
            res => {
                // console.log(this.alive)
                //this.setState({ loading: false });
                //this.props.history.push('/burger');
                console.log(res);
                dispatch(orderSubmitSuccess(data, res.data.name, ))
            },
            err => {
                //this.setState({ loading: false});
                dispatch(orderSubmitFail(err))
            }
        );
    }

}