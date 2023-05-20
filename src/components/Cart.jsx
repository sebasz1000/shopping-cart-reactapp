import '../styles/cart.css'

import { useId, useEffect, useRef } from "react";
import { useCart } from '../hooks';
import { AddToCartIcon, ClearCartIcon, RemoveFromCartIcon, CartIcon } from "./Icons";

function CartItem({ item, addToCart }) {
  const { thumbnail, title, price, quantity } = item
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>
          {title}
        </strong> - ${price}
      </div>
      <footer>
        <small>
          {quantity}
        </small>
        <button onClick={addToCart}>
          +
        </button>
      </footer>
    </li>
  )
}

export function Cart() {
  const cartCheckboxId = useId()
  const { cart, clearCart, setShowCart, showCart, addToCart } = useCart()
  const isFirstTime = useRef(true)

  useEffect(() => {
    const cartIsEmpty = cart.length === 0
    if (isFirstTime.current) {
      isFirstTime.current = cartIsEmpty
      !cartIsEmpty && setShowCart(true)
    }
  }, [cart])

  const handleShowCart = (e) => setShowCart(prevState => !prevState)

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId} >
        <CartIcon />
      </label>
      <input id={cartCheckboxId}
        type="checkbox"
        checked={showCart}
        onChange={handleShowCart}
        hidden />
      <aside className="cart">
        <ul>
          {
            cart.map(item =>
              <CartItem item={item}
                key={item.id}
                addToCart={() => addToCart(item)} />
            )
          }
        </ul>
        <button onClick={() => clearCart()}>
          <ClearCartIcon />
        </button>
      </aside>
    </>
  )
}