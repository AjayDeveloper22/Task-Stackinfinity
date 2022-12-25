import DummyData from "./DummyData";
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './reduxdata/CartSlice';
import ItemQty from "./ItemQty";

export default function Home() {
    const dispatch = useDispatch()
    const add = (pid) => {
        dispatch(addItem(pid))
    }
    var carts = useSelector(state => state.carts.value);
     

    return <>
        <div className="row mt-5">
            {DummyData.map(ob => {
                var cart = carts.find(ct => ct.pid == ob.pid)
                return <>
                    <div className="col-lg-4 col-md-4 text-center container">
                        <img src={ob.image} height={180} width={160} />
                        <br />
                        <b className="mt-2">{ob.pname}({ob.company})</b>
                        <br />
                        <b className=""> {ob.desc}</b>
                        <br />
                        <b className="alert-success">Rs : {ob.price}</b>
                        <br />
                        {cart == undefined ? <button
                            className="btn btn-info" onClick={() => add(ob.pid)}>Add To Card</button> : <ItemQty cart={cart} />}
                        <br />
                        <hr className="bg-danger"/>
                    </div>
                </>
            })}
        </div>
    </>
}