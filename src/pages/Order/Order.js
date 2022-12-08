import OrderList from "./Orderlist";
import NavbarMenu from "../../components/layout/Navbar";
import TotalPrice from "./TotalPrice";
import { OrderContext } from "../../context/OrderContext";
import AppFooter from "../../components/layout/AppFooter";

import { useState, useEffect, useContext } from "react";

const Order = () => {
  const { orderDetails } = useContext(OrderContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (orderDetails.length > 0) {
      const totalPrice = orderDetails.reduce(
        (acc, curr) => acc + curr.price,
        0
      );
      setTotal(totalPrice);
    } else {
      setTotal(0);
    }
  }, [orderDetails]);

  return (
    <div className="orderpage">
      <div className="order-nav-background">
        <NavbarMenu />
      </div>
      <div className="container-xl order-page">
        <div className="table-responsive">
          <div className="table-wrapper">
            <OrderList orderDetails={orderDetails} />
            <TotalPrice total={total} />
          </div>
        </div>
      </div>
      <AppFooter />
    </div>
  );
};

export default Order;
