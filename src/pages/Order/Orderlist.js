import { useState, useEffect } from "react";
import { FaLongArrowAltDown } from "react-icons/fa";
import { Button, Modal } from "react-bootstrap";

import OrderTable from "./OrderTable";
import AddOrderForm from "./AddOrder";

const OrderList = ({ orderDetails }) => {
  const [show, setShow] = useState(false);

  const toggleModalShow = () => {
    setShow((prevState) => !prevState);
  };

  useEffect(() => {
    return () => {
      setShow(false);
    };
  }, []);

  return (
    <>
      <div className="table-title table">
        <div className="row">
          <div className="col-sm-6 text-center">
            <h2>Sifarişlərim</h2>
          </div>
          <div className="col-sm-6">
            <Button
              onClick={toggleModalShow}
              className="text-white addOrderbtn"
              data-toggle="modal"
            >
              Sifariş Et
            </Button>
          </div>
        </div>
      </div>
      <table className="table striped">
        <thead>
          <tr>
            <th className="table-one-row">
              SS <FaLongArrowAltDown />
            </th>
            <th>Mehsul adi</th>
            <th>Mıqdar</th>
            <th>Məbləğ</th>
            <th className="order-time-time">Sifariş saati</th>
            <th>Status</th>
            <th>Geri</th>
          </tr>
        </thead>
        <tbody>
          <OrderTable orderDetails={orderDetails} />
        </tbody>
      </table>
      <Modal show={show} onHide={toggleModalShow}>
        <Modal.Header className="modal-header" closeButton>
          <Modal.Title className="modal-title">Add Order</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <AddOrderForm handleCloseModal={toggleModalShow} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default OrderList;
