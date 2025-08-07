import React from 'react';                         // Importing React
import './Breadcrum.css';                          // Importing component-specific CSS
import arrow_icon from '../../Assets/breadcrum_arrow.png'

// Creating the Breadcrum component, receiving 'product' as a prop
const Breadcrum = (props) => {
  const { product } = props;                       // Destructuring product from props

  /*
    The return statement renders the breadcrumb navigation:
    Example output: HOME > SHOP > category > product name
    The arrow icon is used as a separator between breadcrumb items.
  */
  return (
    <div className='breadcrum'>
      HOME 
      <img src={arrow_icon} alt="" />              {/* Arrow between items */}
      SHOP 
      <img src={arrow_icon} alt="" />              {/* Arrow between items */}
      {product.category}                           {/* Displaying dynamic category */}
      <img src={arrow_icon} alt="" />              {/* Arrow between items */}
      {product.name}                               {/* Displaying dynamic product name */}
    </div>
  );
};

export default Breadcrum; // Exporting the component for use in other files
