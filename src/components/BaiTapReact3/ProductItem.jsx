import React, { Component } from 'react'
import './style.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class ProductItem extends Component {
	render() {
		const {item,addCart,showDetail} = this.props

		return (
			<div className="card my-3">
				<img className="card-img-top w-75" src={item.image} alt={item.description} />

				<div className="card-body  text-dark">
					<h5 className="card-title">{item.name}</h5>
					<p className="card-text">Price: {item.price}$</p>
					<button className="btn btn-info mr-3" data-toggle="modal" data-target="#modelIdDetail" onClick={()=>{showDetail(item)}}>Shoe Detail</button>
					<button  className="btn btn-success" onClick={() => {addCart(item)}}>
						<i className="fa fa-cart-plus mr-2"></i>
						Add to carts
					</button>
				</div>
			</div>
		)
	}
}

