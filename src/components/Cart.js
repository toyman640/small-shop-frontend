import React from 'react';
import Footer from './Footer';

const Cart = () => (
  <div className="CartPage">
    <div className="CartSetion">
      <h4 className="CartTitle">Cart Contents</h4>
      <table className="Table">
        <thead>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price P/Q</th>
          <th>Price</th>
        </thead>
        <tbody>
          <tr>
            <td>Iphone 12</td>
            <td>1</td>
            <td>$400</td>
            <td>$400</td>
          </tr>
          <tr>
            <td colSpan="4" aria-label="Separator" className="CartHr">
              &nbsp;
              <hr />
            </td>
          </tr>
          <tr>
            <td>Alien Ware</td>
            <td>1</td>
            <td>$1200</td>
            <td>$1200</td>
          </tr>
          <tr>
            <td colSpan="4" aria-label="Separator" className="CartHr">
              &nbsp;
              <hr />
            </td>
          </tr>
          <tr>
            <td>Spy pen 3</td>
            <td>1</td>
            <td>$85</td>
            <td>$85</td>
          </tr>
        </tbody>
      </table>
    </div>
    <Footer />
  </div>
);

export default Cart;
