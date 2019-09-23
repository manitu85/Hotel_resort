import React, { useContext } from 'react';
import { RoomContext } from '../context';
import Title from './Title';

// get all unique values -- helper function
const getUniqueValue = (items, value) => {
  return [...new Set(items.map(item => item[value]))]
}


const RoomFilter = ({rooms}) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  
  // get unique types
  let types = getUniqueValue(rooms, 'type')
  types = ['all', ...types]
  types = types.map((item, idx) => {
    return <option key={idx} value={item}>{item}</option>
  })




  return (
    <section className='filter-container'>
      <Title title='search rooms' />
      <form className='filter-form'>
        {/* select type */}
        <div className='form-group'>
          <label htmlFor='type'></label>
          <select 
            name='type' 
            id='type' 
            value={type} 
            className='form-control'
            onChange={handleChange}
          >
            { types }
          </select>
        </div>
        {/* end select type */}
      </form>
    </section>
  );
};

export default RoomFilter;
