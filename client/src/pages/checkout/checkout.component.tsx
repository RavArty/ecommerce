import React from 'react';
import { connect } from 'react-redux';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import { ITypeData } from '../../components/collection-item/collection-item.component';
import { AppState } from '../../redux/root-reducer';
import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selectors';

interface ICheckoutPageProps {
  cartItems: ITypeData[];
  total: number;
}

const CheckoutPage = ({ cartItems, total }: ICheckoutPageProps) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">TOTAL: ${total}</div>
    <div className="test-warning">
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = (state: AppState) => ({
  cartItems: selectCartItems(state),
  total: selectCartTotal(state)
});

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems,
//   total: selectCartTotal
// });

export default connect(mapStateToProps)(CheckoutPage);
