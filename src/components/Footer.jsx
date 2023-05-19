import '../styles/footer.css'
import { IS_DEV } from '../config'
import { useFilters, useCart } from '../hooks';


export function Footer() {
  const { filters } = useFilters();
  const { cart } = useCart()
  return (
    <footer className="footer">
      {
        IS_DEV ? JSON.stringify(filters, null, 2) : null
      }
      <br />
      {
        IS_DEV ? JSON.stringify(cart.map(item => `${item.title} X ${item.quantity}`), null, 2) : null
      }
    </footer>
  )
}