import { useContext } from "react";
import { OrderContext } from "../../context/OrderContext";

const OrderTable = ({ orderDetails }) => {
  const { deleteOrder } = useContext(OrderContext);

  if (orderDetails?.length <= 0) {
    return <td className="text-center">Sifaris yoxdur</td>;
  }

  return (
    <>
      {orderDetails.length &&
        orderDetails.map((order) => (
          <tr key={order.id}>
            <td>{order.id}</td>
            <td>{order.foodName}</td>
            <td>{order.count}</td>
            <td>{order.price}</td>
            <td>{order.date}</td>

            <td>
              <a
                href="#editEmployeeModal"
                data-toggle="modal"
                className="order-status"
              >
                Verildi
              </a>
            </td>
            <td>
              <button
                className="delete"
                data-toggle="modal"
                onClick={() => deleteOrder(order.id)}
              >
                Geri al
              </button>
            </td>
          </tr>
        ))}
    </>
  );
};

export default OrderTable;
