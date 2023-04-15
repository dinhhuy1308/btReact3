import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
    renderShoes = () => {
        const {productsData, showDetail, addCart} = this.props

        return productsData.map((product,index) => {
            return (
                <div className="col-4" key={index}>
                    <ProductItem item={product} showDetail={showDetail} addCart={addCart}/>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='container'>
                <div className="row">
                    {this.renderShoes()}
                </div>
            </div>
        )
    }
}
