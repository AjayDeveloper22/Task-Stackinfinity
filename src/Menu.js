import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
export default function Menu() {

    const carts = useSelector(state => state.carts.value)
    return <>
        <div className="row mt-5">
            <div className="col-lg-10 col-md-10">
                <h1 className=" alert alert-success text-center"> APNA STORE</h1>
            </div>
            <div className="col-lg-2 col-md-2">
                <Link to="/Cart">
                    <div>
                        <img src="image/card1.png" height={50} width={50} />
                        <b className="cart-counter">{carts.length}</b>
                    </div>
                </Link>
            </div>

        </div><hr className="bg-danger"/>

    </>
}