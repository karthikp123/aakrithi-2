import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
  return (
    <div className='search-bar d-flex w-100'>
      <input type="text" className="search-input" />
      <span className="pointer">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>
    </div>
  )
}

export default SearchBar