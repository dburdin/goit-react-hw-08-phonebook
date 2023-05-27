import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/selectors';

import { FilterField } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterField = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <FilterField
      type="text"
      name="filter"
      placeholder="Find contacts by name"
      onChange={handleFilterField}
      value={filter}
    />
  );
};
