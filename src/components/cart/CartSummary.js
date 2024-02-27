import React, { Component } from 'react'
import * as cartActions from "../../redux/actions/cartActions"
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import alertify from 'alertifyjs';
import { Link } from 'react-router-dom';

class CartSummary extends Component {
    removeFromCart(cartItem) {
        this.props.actions.removeFromCart(cartItem.product);
        alertify.error(cartItem.product.productName + " removed from cart!", 2)
    }

    renderEmpty() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Empty cart
                </DropdownToggle>
                <DropdownMenu end>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    renderSummary() {
        return (
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    Cart
                </DropdownToggle>
                <DropdownMenu end>
                    {
                        this.props.cart.map((cartItem) => (
                            <DropdownItem key={cartItem.product.id} onClick={() => { this.removeFromCart(cartItem) }}>
                                🗑 {cartItem.product.productName}{" "}
                                <Badge color='success'>
                                    {cartItem.quantity}
                                </Badge>
                            </DropdownItem>
                        ))
                    }
                    <DropdownItem divider />
                    <DropdownItem><Link style={{ textDecoration: "none" }} to="/cart">Cart detail</Link></DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        )
    }

    render() {
        return (
            <>
                {(this.props.cart.length > 0) ? this.renderSummary() : this.renderEmpty()}
            </>
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

export default connect(mapStateToProps, mapDispatchToProps)(CartSummary)