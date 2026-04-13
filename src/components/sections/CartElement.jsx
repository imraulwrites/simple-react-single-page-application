import { toast } from 'react-toastify';
import DesignTool from '../../assets/products/design-tool.png';

function CartElement({ item, removeFromCart }) {
  return (
    <div className="flex justify-between items-center bg-[#f9fafcFF] rounded-2xl p-5">
      <div className="flex items-center gap-4 ">
        <div>
          <img src={DesignTool} alt="" />
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-semibold text-heading-dark">{item.name}</h5>
          <p className="text-base font-medium text-muted">${item.price}</p>
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            removeFromCart(item);
            toast.warning('Item Removed from Cart');
          }}
          className="text-[#ff3980FF] font-bold cursor-pointer "
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartElement;
