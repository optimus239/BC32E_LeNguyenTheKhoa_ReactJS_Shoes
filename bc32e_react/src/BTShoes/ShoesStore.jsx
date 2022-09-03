import React, { Component } from "react";
import Modal from "./Modal";
import ProductList from "./ProductList";
import products from "./data.json";

export default class ShoesStore extends Component {
  state = {
    productDetail: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };

  setStateModal = (shoe) => {
    this.setState({
      productDetail: shoe,
    });
    console.log(shoe);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div style={{ marginTop: "250px" }}>
              <p className="border border-left-0 border-primary">Home</p>
              <p>Shop</p>
            </div>
          </div>
          <div className="col-9 border border-primary">
            <p className="text-center" style={{ fontSize: "30px" }}>
              Shoes shop
            </p>
            <ProductList
              productsData={products}
              setStateModal={this.setStateModal}
            ></ProductList>
            <Modal content={this.state.productDetail}></Modal>
          </div>
        </div>
      </div>
    );
  }
}
