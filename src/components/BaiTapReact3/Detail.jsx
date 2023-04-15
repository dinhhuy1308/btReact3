import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        const {producDetail, addCart } = this.props
        return (
            <div className="modal fade" id="modelIdDetail" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content" style={{ width: '600px', left: '105px' }}>
                        <div className="modal-header">
                            <h5 className="modal-title">Shoe Detail</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <h4>{producDetail.name}</h4>
                            <p>Price: {producDetail.price}$</p>
                            <p className='px-5'>{producDetail.description}</p>
                            <img src={producDetail.image} alt={producDetail.description} width={400} />;
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-success" onClick={() => { addCart(producDetail) }}>
                                <i className="fa fa-cart-plus mr-2"></i>
                                Add to carts
                            </button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
