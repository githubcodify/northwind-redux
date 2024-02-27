import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import alertify from 'alertifyjs';
import * as cartActions from "../../redux/actions/cartActions"
import { Button, Container, Table, Row } from 'reactstrap'
import './CartDetail.css'

class CartDetail extends Component {
    removeFromCart(cartItem) {
        this.props.actions.removeFromCart(cartItem);
        alertify.error(cartItem.productName + " removed from cart!", 2)
    }

    countOfItems() {
        if (this.props.cart.length > 1) {
            return ("items listed")
        } else {
            return ("item listed")
        }
    }

    renderEmpty() {
        return (
            <>
                <h3>Cart Detail</h3>
                <Table hover striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            {/* <th>Category Id</th> */}
                            <th>Product Name</th>
                            <th>Quantity per Unit</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((cartItem) => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                {/* <td>{cartItem.product.categoryId}</td> */}
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.quantityPerUnit}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color='danger' onClick={() => this.removeFromCart(cartItem.product)}>
                                        delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Container>
                    <Row className='d-flex justify-content-center align-items-center no-pruduct-desc'>
                        There are no products added.
                    </Row>
                </Container>
            </>
        )
    }

    renderSummary() {
        return (
            <>
                <h3>Cart Detail ({this.props.cart.length} {this.countOfItems()})</h3>
                <Table hover striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            {/* <th>Category Id</th> */}
                            <th>Product Name</th>
                            <th>Quantity per Unit</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.cart.map((cartItem) => (
                            <tr key={cartItem.product.id}>
                                <th scope="row">{cartItem.product.id}</th>
                                {/* <td>{cartItem.product.categoryId}</td> */}
                                <td>{cartItem.product.productName}</td>
                                <td>{cartItem.product.quantityPerUnit}</td>
                                <td>{cartItem.product.unitPrice}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color='danger' onClick={() => this.removeFromCart(cartItem.product)}>
                                        delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </>
        )
    }

    render() {
        return (
            <div>
                {(this.props.cart.length > 0) ? this.renderSummary() : this.renderEmpty()}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return { cart: state.cartReducer }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail)