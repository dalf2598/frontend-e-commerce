import { useContext } from 'react';
import { SearchContext } from '../../../contexts/SearchContext'
import './SortFilter.css'

function SortFilter () {
    const { sortProductsByNameOrPrice } = useContext(SearchContext);

    return (
        <div className='SortFilterContainer'>
            <select name="order" id="order" onChange={(e) => sortProductsByNameOrPrice(e.target.value)}>
                <option value="alphabetically">Name</option>
                <option value="ascending">Price: Low to High</option>
                <option value="descending">Price: High to Low</option>
            </select>
        </div>
    )
}

export { SortFilter }
