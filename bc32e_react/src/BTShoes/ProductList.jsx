import React, { Component } from "react";
import Modal from "./Modal";
import ProductItem from "./ProductItem";

export default class extends Component {
  render() {
    const { productsData, setStateModal } = this.props;
    return (
      <div className="container">
        <div className="row">
          {productsData.map((product) => {
            return (
              <div className="col-4" key={product.id}>
                <ProductItem
                  item={product}
                  setStateModal={setStateModal}
                ></ProductItem>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
