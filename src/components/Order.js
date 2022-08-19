import React, { useEffect, useState } from "react";

const Order = ({ orders, products, users }) => {
  return (
    <div>
      <h1 className="text-center m-6 text-2xl font-extrabold">Order</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>order_id</th>
              <th>product_id</th>
              <th>quantity</th>
              <th>user_id</th>
              <th>order_date</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders.map((order) => (
              <tr key={order.order_id}>
                <th>{order.order_id}</th>
                <td>{order.product_id}</td>
                <td>{order.quantity}</td>
                <td>{order.user_id}</td>
                <td>{order.order_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
