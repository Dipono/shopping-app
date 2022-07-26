
import { useSelector, useDispatch } from 'react-redux';
import productData from '../../data/productData'
import { displayProduct,addedToCard } from '../../features/products';
import {increment,decrement,amountDecrement,amountIncrement} from '../../features/counter'

import './Product.css';
import Header from '../Header/Header';

function Product() {

	const product = useSelector((state) => state.product.products);
	//const cartItem = useSelector((state) => state.product.cartItems);
	const dispatch = useDispatch()
	dispatch(displayProduct(productData))

	function add_to_cart(data){
		dispatch(increment())
		dispatch(amountIncrement(data.price))
		dispatch(addedToCard(data));
	}
	return (
		<div className="product">
			<Header></Header>
			{/* <div className="product-head">
				<h2>GADGETS STORE</h2>
			</div> */}
			<div className="product-body">
				<div className="gadgets">
					{product.map((prod, xid) => (
						<div className="gardet-item" key={xid}>
							<div className="gadget-name">
								<label id="gadget-name"><b>{prod.name}</b></label>
								<label id="gadget-price"><b>R {prod.price}</b></label>
							</div>
							<div className="gadget-image">
								<img src={prod.image} alt={prod.name} />
							</div>
							<div className="add-to-card">
								<button className="btn-add" onClick={() =>add_to_cart(prod)}>Add to card<i>cart-image</i></button>
							</div>
							<div className="gadget-description">
								<label><b>Description :-</b></label>
								<label id="gadget-description">{prod.description}</label>
							</div>
							
						</div>
					))}

				</div>
			</div>
		</div>
	)

}

export default Product;