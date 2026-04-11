import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Button from '../ui/Button';

function PricingCard({ heading, text, price, features, btntext, className }) {
  return (
    <div className={`relative p-6 border-2 border-muted/10 rounded-2xl text-left ${className}`}>
      {heading === 'Pro' && <div className="absolute -top-4 left-[35%] popular">Most Popular</div>}
      <h3 className={`text-2xl font-bold  mb-2 ${heading !== 'Pro' ? 'text-heading-dark' : ''}`}>
        {heading}
      </h3>
      <p className="text-base font-normal  mb-6">{text}</p>
      <h2 className={`text-4xl font-bold  mb-6 ${heading !== 'Pro' ? 'text-heading-dark' : ''}`}>
        ${price}
        <span className=" text-xl font-normal">/Month</span>
      </h2>
      <ul className="flex flex-col gap-2 text-base font-medium  min-h-[200px] mb-6">
        {features.map((item, id) => (
          <li key={id} className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faCheck}
              className={`text-green-500 ${heading === 'Pro' ? 'text-white' : ''}`}
            />
            {item}
          </li>
        ))}
      </ul>
      <div className="text-center">
        <Button
          className={`w-full ${heading === 'Pro' ? 'bg-white text-primary text-base font-semibold px-4 py-3  rounded-3xl cursor-pointer hover:opacity-90' : 'btn-primary'}`}
        >
          {btntext}
        </Button>
      </div>
    </div>
  );
}

export default PricingCard;
