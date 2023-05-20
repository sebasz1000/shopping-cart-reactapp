import { useFilters, useCart } from '../hooks';
import '../styles/products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'

function List({ items }) {

  const { checkProductInCart, removeProductFromCart, addToCart, getQuantityProductInCart } = useCart()

  const getBtnSet = (item) => {
    return checkProductInCart(item)
      ? (<button onClick={() => removeProductFromCart(item)} style={{ backgroundColor: 'red' }}>
        <RemoveFromCartIcon />
      </button>)
      : (<button onClick={() => addToCart(item)} style={{ backgroundColor: 'green' }}>
        <AddToCartIcon />
      </button>)
  }

  const getQuantityBadge = (item) => {
    return checkProductInCart(item)
      ? <span className='item-quantity-badge'>{getQuantityProductInCart(item)}</span>
      : null
  }

  return (
    <ul >
      {
        items.slice(0, 10).map((item) => {
          const { title, id, thumbnail, price } = item
          return (
            <li key={id} className='item'>
              {getQuantityBadge(item)}
              <img src={thumbnail}
                width="100%"
                alt={title} />
              <div>
                <h3>{title} - ${price}</h3>
              </div>
              <div className='item-btn-set'>
                {getBtnSet(item)}
              </div>
            </li>)
        })
      }
    </ul>
  )
}
export function Products() {
  const { filteredProducts } = useFilters();
  const hasProducts = filteredProducts?.length > 0
  return (
    <main>

      <div className='products'>
        {
          hasProducts
            ? <List items={filteredProducts} />
            : <p>There are no productos available</p>
        }
      </div>
    </main>
  )

}