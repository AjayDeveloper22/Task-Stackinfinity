import { Link } from "react-router-dom";
import DummyData from "./DummyData";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, incrementQty, decrementQty } from "./reduxdata/CartSlice";
import ItemQty from "./ItemQty";

export default function Cart() {

    var dispatch = useDispatch()
    var carts = useSelector(state => state.carts.value)

    var finalAmount = carts.reduce((x, ob) => {
        var product = DummyData.find(p => p.pid == ob.pid)
        var amt = product.price * ob.qty;
        return amt + x
    }, 0)

    var delItem = (pid) => {
        dispatch(deleteItem(pid))

    }
    return <>
        <div className="row-mt-3">
            <div className="col-lg-10 col-md-10  text-center">

                <h1 className="alert-warning text-center"> Cart Item</h1>
            </div>
            <div className="col-lg-2 col-md-2  text-center ">
                <h3> <Link className="alert-info" to="/">Home</Link></h3>
            </div>

        </div>
        <hr />
        <h3 className="text-danger">Final Amount:{finalAmount}</h3>
        <table className="table" style={{ fontWeight: 'bold' }}>
            <hr />

            <thead>
                <tr>
                    <th>S.NO</th>
                    <th>Image</th>
                    <th>Item Name(Company Name)</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                    <th>Operation</th>
                </tr>
            </thead>
            <tbody>
                {carts.map((cart, index) => {
                    var product = DummyData.find(p => p.pid == cart.pid)
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td><img src={product.image} height={100} width={100} /></td>
                        <td>{product.pname}({product.company})</td>
                        <td>Rs {product.price}</td>
                        <td>
                            <ItemQty cart={cart} />
                        </td>
                        <td>{product.price * cart.qty}</td>
                        <td>
                            <button className="btn btn-warning" onClick={() => delItem(cart.pid)}>Remove to cart
                            </button>
                        </td>
                    </tr>
                })}
            </tbody>

        </table>
        <hr />
    </>
}