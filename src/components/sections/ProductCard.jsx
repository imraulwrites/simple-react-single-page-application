import React, { useMemo } from 'react';
import Button from '../ui/Button';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DesignTool from '../../assets/products/design-tool.png';
import Operation from '../../assets/products/operation.png';
import Portfolio from '../../assets/products/portfolio.png';
import ShoppingCart from '../../assets/products/shopping-cart.png';
import SocialMedia from '../../assets/products/social-media.png';
import Writing from '../../assets/products/writing_2327400 1.png';

const imagesList = {
  0: DesignTool,
  1: Operation,
  2: Portfolio,
  3: SocialMedia,
  4: Writing,
};

const randomImg = () => {
  let value = Math.floor(Math.random() * Object.keys(imagesList).length);
  let image = imagesList[value] ? imagesList[value] : Portfolio;
  return image;
};

function ProductCard({ product, addToCart }) {
  const img = useMemo(() => randomImg(), []);
  return (
    <div className="flex flex-col gap-4 p-6 border-2 border-muted/20 rounded-2xl relative">
      <div
        className={`absolute right-3 top-3 ${product.tag === 'popular' ? 'popular' : product.tag === 'new' ? 'new' : product.tag === 'best seller' ? 'best-seller' : ''}`}
      >
        <p>{product.tag}</p>
      </div>

      <div className="pt-4 w-fit">
        <img className="border-[1px] border-muted/10 rounded-full p-2" src={img} alt="" />
      </div>

      <div>
        <img src="" alt="" />
      </div>

      <h1 className="text-2xl font-bold text-heading-dark capitalize">{product.name}</h1>
      <p className="text-base text-muted">{product.description}</p>
      <h3 className="text-2xl font-bold">
        ${product.price}
        <span className="text-muted text-base">/Mo</span>
      </h3>
      <ul className="">
        {product.features &&
          product.features.map((item, id) => (
            <li key={id} className="flex items-center  gap-2">
              <FontAwesomeIcon icon={faCheck} className="text-green-500" />
              {item}
            </li>
          ))}
      </ul>

      <div onClick={() => addToCart(product)} className="">
        <Button className="btn-primary">Buy Now</Button>
      </div>
    </div>
  );
}

export default ProductCard;
