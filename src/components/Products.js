import React, { useEffect, useState } from "react";

const Products = ({ products }) => {
  return (
    <div>
      <h1 className="text-center m-6 text-2xl font-extrabold">Products</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>product_id</th>
              <th>Name</th>
              <th>Stock</th>
              <th>selling_price</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {products.map((products) => (
              <tr key={products.product_id}>
                <th>{products.product_id}</th>
                <td>{products.name}</td>
                <td>{products.stock}</td>
                <td>{products.selling_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
