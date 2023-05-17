import '../styles/footer.css'
import { IS_DEV } from '../config'
import { useFilters } from '../hooks/useFilters';


export function Footer() {
  const { filters } = useFilters();
  return (
    <footer className="footer">
      {
        IS_DEV ? JSON.stringify(filters, null, 2) : null
      }
    </footer>
  )
}