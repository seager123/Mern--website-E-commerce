import p10_img from './p10_img.jpg';
import p5_img from './p5_img.jpg';
import product_3 from './product_3.jpg';
import product_4 from './product_4.jpg';

const data_product = [
     {
        id: 10,
        name: "Women's denim crop top",
        category: "womens",
        image: p10_img,
        new_price: 399.0,
        old_price: 599.0,
         rating: 4.3 // ⭐ Add karo
      },
    {
     id: 5,
     name: "KLOSIA Women's Viscose Kurta Set with Dapatta",
     category: "womens",
     image: p5_img,
     new_price: 399.0,
     old_price: 699.0,
      rating: 4.4 // ⭐ Add karo
   },
       { id: 3,
        name: "Striped Flutter Sleeve Overlap Collar Peplum Hem  Blouse",
        image: product_3,
        new_price: 499.00,
        old_price: 699.00,
         rating: 4.5// ⭐ Add karo
    },
    {
        id: 4,
        name: "Striped Flutter Sleeve Overlap Collar Peplum Hem  Blouse",
        image: product_4,
        new_price: 280.15,
        old_price: 299.00,
         rating: 4.2 // ⭐ Add karo
    },
];

export default data_product;
