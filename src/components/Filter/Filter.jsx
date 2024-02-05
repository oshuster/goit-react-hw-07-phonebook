import { useDispatch } from 'react-redux';
import css from './filter.module.css';
import { setFilter } from '../../redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const saveFilter = e => {
    const key = e.target.value.toLowerCase().trim();
    dispatch(setFilter(key));
  };

  return (
    <input
      className={`form-control me-2 ${css.search}`}
      type="search"
      placeholder="Search"
      aria-label="Search"
      onChange={saveFilter}
    />
  );
};

export default Filter;
