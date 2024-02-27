import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import CategoryList from '../categories/CategoryList'
import ProductList from '../products/ProductList'

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <Row className='gy-3'>
          <Col xs="12" md="3"><CategoryList /></Col>
          <Col xs="12" md="9"><ProductList /></Col>
        </Row>
      </div>
    )
  }
}
