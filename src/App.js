import Navbar from './Pages/Products/Navbar/Navbar';
import Products from './Pages/Products/Products';
import Cart from './Pages/Cart/Cart';
import {commerce} from './lib/commerce'
import { useEffect, useState } from 'react';
function App() {
  const [products,setProducts] = useState([]);
  const [cart,setCart] = useState({});


  const fetchProducts = async () => {
    const {data} = await commerce.products.list()
    setProducts(data);
  }
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  }

  
const handleCart = async (productId,quantity ) =>{
  const item = await commerce.cart.add(productId,quantity)
  setCart(item.cart);

};

  useEffect(()=> {
    fetchProducts();
    fetchCart();
  },[])
  console.log(cart)
  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
{      <Products products={products} handleCart={handleCart}/>}    
      <Cart cart={cart}/>
    </div>
  );
}

export default App;
