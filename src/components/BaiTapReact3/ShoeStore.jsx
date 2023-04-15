import React, { Component } from 'react'
import ProductList from './ProductList'
import Modal from './Modal'
import Detail from './Detail'
import './style.css'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

export default class ShoeStore extends Component {
	MySwal = withReactContent(Swal)

	products = [
		{
			"id": 1,
			"name": "Adidas Prophere",
			"alias": "adidas-prophere",
			"price": 350,
			"description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			"shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			"quantity": 995,
			"image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
		},
		{
			"id": 2,
			"name": "Adidas Prophere Black White",
			"alias": "adidas-prophere-black-white",
			"price": 450,
			"description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			"shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			"quantity": 990,
			"image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
		},
		{
			"id": 3,
			"name": "Adidas Prophere Customize",
			"alias": "adidas-prophere-customize",
			"price": 375,
			"description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			"shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			"quantity": 415,
			"image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
		},
		{
			"id": 4,
			"name": "Adidas Super Star Red",
			"alias": "adidas-super-star-red",
			"price": 465,
			"description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			"shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			"quantity": 542,
			"image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
		},
		{
			"id": 5,
			"name": "Adidas Swift Run",
			"alias": "adidas-swift-run",
			"price": 550,
			"description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			"shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			"quantity": 674,
			"image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
		},
		{
			"id": 6,
			"name": "Adidas Tenisky Super Star",
			"alias": "adidas-tenisky-super-star",
			"price": 250,
			"description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			"shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			"quantity": 456,
			"image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
		},
		{
			"id": 7,
			"name": "Adidas Ultraboost 4",
			"alias": "adidas-ultraboost-4",
			"price": 450,
			"description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			"shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			"quantity": 854,
			"image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
		},
		{
			"id": 8,
			"name": "Adidas Yeezy 350",
			"alias": "adidas-yeezy-350",
			"price": 750,
			"description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			"shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			"quantity": 524,
			"image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
		},
		{
			"id": 9,
			"name": "Nike Adapt BB",
			"alias": "nike-adapt-bb",
			"price": 630,
			"description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
			"shortDescription": "Paul George is the rare high-percentage shooter",
			"quantity": 599,
			"image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
		},
		{
			"id": 10,
			"name": "Nike Air Max 97",
			"alias": "nike-air-max-97",
			"price": 650,
			"description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
			"shortDescription": "Paul George is the rare high-percentage shooter",
			"quantity": 984,
			"image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
		},
		{
			"id": 11,
			"name": "Nike Air Max 97 Blue",
			"alias": "nike-air-max-97-blue",
			"price": 450,
			"description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
			"shortDescription": "Paul George is the rare high-percentage shooter",
			"quantity": 875,
			"image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
		},
		{
			"id": 12,
			"name": "Nike Air Max 270 React",
			"alias": "nike-air-max-270-react",
			"price": 750,
			"description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
			"shortDescription": "Paul George is the rare high-percentage shooter",
			"quantity": 445,
			"image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
		}
	]

	state = {
		producDetail: {
			"id": 1,
			"name": "Adidas Prophere",
			"alias": "adidas-prophere",
			"price": 350,
			"description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
			"shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
			"quantity": 995,
			"image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
		},
		productModal: []
	}

	showDetail = (producDetail) => {
		this.setState({
			producDetail: producDetail
		})
	}



	addCart = (product) => {
		const productModal = this.state.productModal
		const index = productModal.findIndex(sp => sp.id === product.id);

		if (index !== -1) {
			productModal[index].quantity += 1
		} else {
			product.quantity = 1
			productModal.push(product)
		}

		this.setState({
			productModal: productModal
		})
	}

	deleteCart = (id) => {
		let productModal = this.state.productModal

		Swal.fire({
			title: 'Are you sure?',
			text: "You won't be able to revert this!",
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Yes, delete it!',


		}).then((result) => {
			if (result.isConfirmed) {
				productModal = productModal.filter(sp => sp.id !== id)
				this.setState({
					productModal: productModal
				})
			}
		})

	}

	changeValue = (id, num) => {
		let productModal = this.state.productModal
		const index = productModal.findIndex(sp => sp.id === id);

		const productChange = productModal[index]
		productChange.quantity += num

		if (productChange.quantity < 1) {
			Swal.fire({
				title: 'Are you sure?',
				text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete it!',

			}).then((result) => {
				if (result.isConfirmed) {
					productModal.splice(index, 1)
					this.setState({
						productModal: productModal
					})
				} else {
					productModal[index].quantity = 1
					this.setState({
						productModal: productModal
					})
				}
			})
		}
		this.setState({
			productModal: productModal
		})



		// if (productChange.quantity < 1) {

		// 	if (window.confirm('Do you want to delete this product?')) {
		// 		productModal.splice(index, 1)
		// 	} else {
		// 		productModal[index].quantity = 1
		// 	}
		// }
		// this.setState({
		// 	productModal: productModal
		// })

	}

	buyProduct = () => {
		const productModal = this.state.productModal
		if (productModal.length > 0) {
			Swal.fire({
				title: 'Are you sure?',
				// text: "You won't be able to revert this!",
				icon: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, i will be buy it!'
			  }).then((result) => {
				if (result.isConfirmed) {
				  Swal.fire(
					'You are Order Success.',
					'',
					'success',
					this.setState({
						productModal: []
					})
				  )
				}
			  })
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Something went wrong!',
			  })
		}
	}


	render() {
		const sumQuantily = this.state.productModal.reduce((sumQtily, productCart) => {
			return sumQtily += productCart.quantity
		}, 0)

		return (
			<div className='container'>
				<h2>Shoe Shop</h2>
				<div className='cart' data-toggle="modal" data-target="#modelId">
					<span>{sumQuantily}</span>
					<i className="fa-solid fa-xl fa-shopping-cart"></i>
				</div>
				<ProductList productsData={this.products} showDetail={this.showDetail} addCart={this.addCart} />
				<Modal content={this.state.productModal} deleteCart={this.deleteCart} changeValue={this.changeValue} buyProduct={this.buyProduct} />
				<Detail producDetail={this.state.producDetail} addCart={this.addCart} />
			</div>
		)
	}
}
