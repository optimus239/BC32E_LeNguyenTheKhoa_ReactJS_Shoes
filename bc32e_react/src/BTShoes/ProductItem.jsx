import React, { Component } from "react";
import Modal from "./Modal";

export default class extends Component {
  render() {
    const { item, setStateModal } = this.props;

    return (
      <div
        className="card mb-4"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => setStateModal(item)}
      >
        <img src={item.image} alt="" />
        <p style={{ margin: "0 0 7px 20px" }}>{item.name}</p>
        <span style={{ marginLeft: "20px" }}>{item.price} $</span>
        <button
          className="btn btn-dark"
          style={{
            width: "140px",
            margin: "0 0 10px 20px",
            borderRadius: "0",
          }}
        >
          add to carts <i className="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    );
  }
}
