import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Navigation from './components/navigation';
import Products from './Pages/products';
import Cart from './Pages/cart'

const App = () => {
    return (
        <>
            <Router>
            <Navigation/>
                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/products' element={<Products/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                </Routes>
            </Router>
        </>
    )
   
}


export default App;