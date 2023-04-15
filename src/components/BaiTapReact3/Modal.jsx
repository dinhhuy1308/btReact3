import React, { Component } from 'react'
import './style.css'

export default class Modal extends Component {
	renderCart = () => {
		const { content,deleteCart,changeValue} = this.props

		return content.map((item, index) => {
			return (
				<tr key={index}>
					<td>{item.id}</td>
					<td className='pt-0'><img src={item.image} alt={item.description} width={60} height={60}/> </td>
					<td>{item.name}</td>
					<td className='px-0'>
						<button className="btn btn-success mr-1" onClick={()=>{changeValue(item.id,+1)}}>+</button>
						{item.quantity}
						<button className="btn btn-success ml-1" onClick={()=>{changeValue(item.id,-1)}}>-</button>
					</td>
					<td>{item.price.toLocaleString()}$</td>
					<td>{(item.quantity * item.price).toLocaleString()}$</td>
					<td>
						<button className="btn btn-danger" onClick={() => {deleteCart(item.id)}}>Xóa</button>
					</td>
				</tr>
			)
		})

	}


	render() {
		return (
			<div>
				<div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
					<div class="modal-dialog" role="document">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title">Giỏ hàng</h5>
								<button type="button" class="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<table className="table">
									<thead>
										<tr>
											<th>Mã SP</th>
											<th>Hình ảnh</th>
											<th>Tên SP</th>
											<th>Số lượng</th>
											<th>Đơn giá</th>
											<th>Thành tiền</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										{this.renderCart()}
									</tbody>
									<tfoot>
										<tr>
											<td colSpan={4}></td>
											<th>Tổng tiền</th>
											<td>

												{this.props.content.reduce((sumMoney,sp) => {
													return sumMoney += sp.quantity * sp.price
												},0).toLocaleString()}$
											</td>
										</tr>
									</tfoot>
								</table>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-success" onClick={() => {this.props.buyProduct()}}>Buy</button>
								<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
							</div>
						</div>
					</div>

				</div>
			</div>
		)
	}
}
