import './App.css';
import itemData from './components/DataItem';
import {Item} from './components/Item';
import {Cart} from './components/Cart';
import {CartHook} from './components/CartHook';

function App() {

  const cartElement = CartHook();

  return (
    <div className="wrapper">
      <div className="shop">
        <h2>Меню</h2>
        {
          itemData.map(item => (<Item key = {item.id} item={item} cartE={cartElement}/>)
          )
          
        }
        
      </div>

      <div className="cart">
          <h2>Заказ</h2>
          <Cart cartE = {cartElement}></Cart>
      </div>
    </div>
  );
}

export default App;
