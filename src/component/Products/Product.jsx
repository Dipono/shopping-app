
import { useSelector, useDispatch } from 'react-redux';
import productData from '../data/productData'
import { displayProduct } from '../features/products';
import './Product.css'

function Product() {

	const product = useSelector((state) => state.product.value);
	const dispatch = useDispatch()
	dispatch(displayProduct(productData))
	console.log(product)
	return (
		<div class="product">
			<div class="product-head">
				<h2>GADGETS STORE</h2>
			</div>
			<div class="product-body">
				<div class="gadgets">
					{product.map((prod, xid) => (
						<div class="gardet-item" key={xid}>
							<div class="gadget-name">
								<label id="gadget-name"><b>{prod.name}</b></label>
								<label id="gadget-price"><b>R {prod.price}</b></label>
							</div>
							<div class="gadget-image">
								<img src={prod.image} alt={prod.name} />
							</div>
							<div class="add-to-card">
								<button class="btn-add">Add to card<i>cart-image</i></button>
							</div>
							<div class="gadget-description">
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