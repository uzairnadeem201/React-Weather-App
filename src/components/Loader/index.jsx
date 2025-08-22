import './styles.css'
import { Loader2 } from 'lucide-react'

const Loader = () => {
  return (
    <div className="loader">
      <Loader2 className="animate-spin w-20 h-20" />
      <span className="ml-2">Loading...</span>
    </div>
  )
}

export default Loader;
