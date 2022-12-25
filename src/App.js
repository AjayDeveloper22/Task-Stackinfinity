import { Route, Link, Routes} from 'react-router-dom';
import Home from "./Home"
import Cart from './Cart';
import Menu from "./Menu"
 

function App(){
    

    return<>
    <div className="container">
        <Menu/>
        <hr className="bg-danger"/> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>

    </div>
    </>
}
export default App;

 