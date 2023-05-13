import '../styles/products.css'
import { AddToCartIcon } from './Icons'

function List({ items }) {
  return (
    <ul >
      {
        items.slice(0, 10).map(({ title, id, thumbnail, price }) => {
          return (
            <li key={id}>
              <img src={thumbnail}
                width="100%"
                alt={title} />
              <div>
                <h3>{title} - ${price}</h3>
              </div>
              <div>
                <button>
                  <AddToCartIcon />
                </button>
              </div>
            </li>)
        })
      }
    </ul>
  )
}
export function Products({ products }) {
  const hasProducts = products?.length > 0
  return (
    <main>

      <div className='products'>
        {
          hasProducts
            ? <List items={products} />
            : <p>There are no productos available</p>
        }
      </div>
    </main>
  )

}