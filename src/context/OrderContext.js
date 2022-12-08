import { useState, useEffect, createContext } from "react";

export const OrderContext = createContext();

const AddOrderProvider = (props) => {
  const [orderDetails, setOrderDetails] = useState([]);

  useEffect(() => {
    const orderDetails = localStorage.getItem("orderDetails");
    setOrderDetails(JSON.parse(orderDetails));
  }, []);

  useEffect(() => {
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
  }, [orderDetails]);

  const addNewOrder = (order) => {
    setOrderDetails((prevState) => {
      return [...prevState, order];
    });
  };

  const deleteOrder = (id) => {
    setOrderDetails(orderDetails.filter((order) => order.id !== id));
  };

  const clearOrders = () => {
    setOrderDetails([]);
  };

  return (
    <OrderContext.Provider
      value={{ orderDetails, addNewOrder, deleteOrder, clearOrders }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

export default AddOrderProvider;
