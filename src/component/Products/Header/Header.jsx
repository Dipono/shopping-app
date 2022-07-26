
import cartImg from '../../assets/cart-shopping-solid.svg';
import PopUp from '../PopUp/PopUp'
import './Header.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, amountDecrement } from '../../features/counter';
import { removeToCard } from '../../features/products'

import { useState } from 'react';

function Header() {
    const dispatch = useDispatch();
    const { coin, total } = useSelector((state) => state.counter);
    const { cartItems } = useSelector((state) => state.product)
    const [PopUpButton, setPopUpButton] = useState(false);

    function cancel_item(item) {
        dispatch(removeToCard(item))
        dispatch(decrement())
        dispatch(amountDecrement(item.price))

    }

    let cartPopup = (
        <div className='cartpopup'>

            <label className='totalPrice'><b>Total Price is R {total}</b></label>
            <div className="cart">
                {cartItems.map((item, xid) => (
                    <div className="product-item" key={xid}>
                        <div className="cart-img">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div className="cart-name">
                            <p className="product-name"><b>{item.name}</b></p>
                            <p className="product-price"><b>R {item.price}</b></p>
                        </div>
                        <div className="cancel-item">
                            <label onClick={() => cancel_item(item)}>x</label>
                        </div>
                    </div>
                ))}
            </div>
            <button className="btn btn-primary">Check-Out</button>
        </div>
    )
    return (
        <div className="head">

            <div className="head-content">
                <div className="added-to-cart">
                    <label onClick={() => setPopUpButton(true)}><img src={cartImg} alt='cart' /><span className="count-items" >{coin}</span></label>
                </div>
                <div className="product-head">
                    <h2>GADGETS STORE</h2>
                </div>
            </div>
            <PopUp trigger={PopUpButton} setTrigger={setPopUpButton}>
                {cartPopup}
            </PopUp>
            {/* <button onClick={() => dispatch(decrement())}>Decrement</button> */}

        </div>
    )
}

export default Header;