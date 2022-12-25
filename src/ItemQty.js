
import { useDispatch } from "react-redux"
import { incrementQty, decrementQty } from './reduxdata/CartSlice';

export default function ItemQty(props) {
    var dispatch = useDispatch()


    return <>

        <button onClick={() => dispatch(decrementQty(props.cart.pid))} className="btn-sm btn-success">-</button>
        &nbsp; &nbsp;

        {props.cart.qty}

        &nbsp;&nbsp;
        <button onClick={() => dispatch(incrementQty(props.cart.pid))} className="btn-sm btn-success">+</button>
    </>


}