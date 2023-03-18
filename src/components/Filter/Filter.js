import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { setFilterAction } from 'redux/filterSlice';
import { selectFilters } from 'redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilters);

  const handleFilterChange = event => {
    dispatch(setFilterAction(event.target.value));
  };

  return (
    <>
      <p className={css.find}>Find contacts by name</p>
      <input
        className={css.filter}
        onChange={handleFilterChange}
        autoComplete="off"
        type="text"
        name="filter"
        value={filter}
        placeholder="search..."
      ></input>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
};
