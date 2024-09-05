import React from 'react';

export interface IProductItemProps {
  id: number;
  name: string;
  price: number;
  src: string;
}

const ProductItem: React.FC<IProductItemProps> = ({ name, price, src }) => {
  return (
      <div className="item">
        <img src={`${process.env.REACT_APP_BACKEND_URL}${src}`} alt={name} />
        <div>{name}</div>
        <div>{price}</div>
      </div>
  );
};

export default ProductItem;