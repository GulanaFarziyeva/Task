import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const TotalPrice = ({ total }) => {
  const { clearOrders } = useContext(OrderContext);

  return (
    <div className="total-price">
      <div className="total-price__text text-center">
        <h5>Cemi Mebleğ:</h5>
        <h5>
          <span>{total}</span> <span>AZN</span>
        </h5>
      </div>
      <button onClick={clearOrders} className="total-price__btn">
        Sonlandır
      </button>
    </div>
  );
};

export default TotalPrice;
