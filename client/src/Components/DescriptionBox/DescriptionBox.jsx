import React from 'react'
import './DescriptionBox.css'  // Component-specific styling

// DescriptionBox component
const DescriptionBox = () => {       
  return (
    <div className="Descriptionbox">
      {/* ── Tab-style header: Description | Reviews ── */}
        <div className="descriptionbox-navigator">
      <div className="descriptionbox-nav-box">Description</div>
      <div className="descriptionbox-nav-box fade">Reviews(122)</div>
         {/* "fade" class could dim/grey out the inactive tab */}
    </div>
        {/* ── Main description content ── */}
    <div className="Descriptionbox-description">
        <p>A good website description for an online shopping experience
             should clearly communicate what your e-commerce site offers
              and why shoppers should choose it. A concise and engaging paragraph
               can highlight your unique selling points, such as a wide selection 
               of products, competitive prices, excellent customer service,
                or a user-friendly shopping experience. It should also address
                 the key questions a customer might have, like what kind of
                  products you sell, how you ensure a safe and secure shopping 
                  experience, and what makes you stand out from the competition. 
        </p>
        <p> 
                E-commerce websites typically include features for product display,
                 shopping carts, secure payment processing, and order management.                 

</p>
    </div>
    </div>

  )
}

export default DescriptionBox; // Export so it can be used in other components
