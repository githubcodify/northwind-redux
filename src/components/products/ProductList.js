import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as productActions from "../../redux/actions/productActions"
import * as cartActions from "../../redux/actions/cartActions"
import { Button, Table } from 'reactstrap'
import alertify from "alertifyjs"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }

  addToCart = (product) => {
    this.props.actions.addToCart({ quantity: 1, product });
    alertify.success(product.productName + " added to cart!", 2)
  }

  render() {
    return (
      <div>
        <h3>Products - {this.props.currentCategory.categoryName} ({this.props.products.length} items listed)</h3>
        <Table hover striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Category Id</th>
              <th>Product Name</th>
              <th>Quantity per Unit</th>
              <th>Unit Price</th>
              <th>Units in Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.categoryId}</td>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td>
                  <Button color='info' onClick={() => this.addToCart(product)}>
                    add
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart: bindActionCreators(cartActions.addToCart, dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)