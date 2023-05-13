import '../styles/footer.css'
import { IS_DEV } from '../config'
export function Footer({ currentFilters }) {
  return (
    <footer className="footer">
      {
        IS_DEV ? JSON.stringify(currentFilters, null, 2) : null
      }
    </footer>
  )
}