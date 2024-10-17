
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Screen from "./Screen";
import Breadcrumb from "./Breadcrumb";
import CartItem from "./CartItem";
import CartTotals from "./CartTotal";
import EmptyCart from "./EmptyCart";
import Button from "./Button";


import { useCartContext } from "./cart_context";

const CartPage = () => {
  const { cart, clearCart } = useCartContext();

  if (cart.length < 1) {
    return <EmptyCart />;
  }
  return (
    <main>
      <Breadcrumb title='Cart' />
      <Wrapper className='page'>
        <div className='cart-content'>
          <div className='cart__items'>
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
              
            ))}
          </div>
          <div className='cart__links'>
            <Button variant='primary'>
              <Link to='/'>Buy more</Link>
            </Button>
            <Button
              variant='secondary'
              className='clear-btn'
              onClick={clearCart}
            >
              Clear cart
            </Button>
          </div>
        </div>
        <CartTotals />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  background: #f0f0f0;
  ${Screen.lg`
    grid-template-columns: 1fr 1fr 1fr;
    `}

  .cart-content {
    display: grid;
    gap: 1rem;
    ${Screen.lg`
    grid-column: 1/3;
    `}
  }

  .cart__items {
    padding: 1rem;
  }

  .cart__links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }
  
  .clear-btn {
    padding: 0.75rem 1.5rem;
  }
`;
export default CartPage;
