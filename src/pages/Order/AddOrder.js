import { Button, Form } from "react-bootstrap";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { OrderContext } from "../../context/OrderContext";

const AddOrderForm = ({ handleCloseModal }) => {
  const { addNewOrder, orderDetails } = useContext(OrderContext);
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  const date = `${hrs}:${min}`;

  const [newOrder, setNewOrder] = useState({
    foodName: "",
    count: "",
    servants: "",
    table: "",
    price: "",
    date,
    id: orderDetails? orderDetails.length + 1 : 1,
  });

  const [menu, setMenu] = useState([]);
  const [servants, setServants] = useState([]);
  const [tables, setTables] = useState([]);

  const onInputChange = (e) => {
    setNewOrder({ ...newOrder, [e.target.name]: e.target.value });
  };

  const checkValidation = () => {
    const isValid = Object.values(newOrder).every(
      (val) => val != null && val !== ""
    );

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      addNewOrder(newOrder);
      handleCloseModal();
    } else {
      alert("Please fill all fields");
    }
  };

  const getMenu = async () => {
    const {
      data: { menu },
    } = await axios.get("/db/menu.json");
    setMenu(menu);
  };

  const getServant = async () => {
    const {
      data: { servants },
    } = await axios.get("/db/servants.json");
    setServants(servants);
  };

  const getTable = async () => {
    const {
      data: { table },
    } = await axios.get("/db/table.json");
    setTables(table);
  };

  const handleCountChange = (e) => {
    onInputChange(e);
    const food = menu.find((item) => item.food === newOrder.foodName);
    setNewOrder((prevState) => {
      return {
        ...prevState,
        price: food.price * e.target.value,
      };
    });
  };

  const handleSelect = (e) => {
    onInputChange(e);
    const food = menu.find((item) => item.food === e.target.value);
    setNewOrder((prevState) => {
      return {
        ...prevState,
        price: food.price,
      };
    });
  };

  useEffect(() => {
    getMenu();
    getServant();
    getTable();
  }, []);

  return (
    <>
      <Form onSubmit={handleSubmit} className="form">
        <Form.Select
          required
          className="mb-4 py-2"
          name="foodName"
          prices="60"
          aria-label="Default select example"
          value={newOrder.foodName}
          onChange={(e) => handleSelect(e)}
        >
          <option>Mehsulu seçin</option>
          {menu.length &&
            menu.map((item) => <option value={item.food}>{item.food}</option>)}
        </Form.Select>
        <Form.Control
          className="mb-4 py-2 value"
          name="count"
          type="number"
          placeholder="Miqdar"
          min={1}
          max={20}
          defaultValue={1}
          value={newOrder.count}
          onChange={(e) => handleCountChange(e)}
        />
        <Form.Control
          className="mb-4 py-2 disabled"
          name="price"
          type="number"
          disabled
          value={newOrder.price}
          placeholder="Qiymət"
          onChange={(e) => onInputChange(e)}
        />

        <Form.Select
          className="mb-4 py-2"
          name="table"
          value={newOrder.table}
          onChange={(e) => onInputChange(e)}
          aria-label="Default select example"
        >
          <option>Zəhmət olmasa masanı nömrəsi seçin</option>
          {tables.length &&
            tables.map((item) => (
              <option value={item.table}>{item.table}</option>
            ))}
        </Form.Select>
        <Form.Select
          className="mb-4 py-2"
          name="servants"
          aria-label="Default select example"
          value={newOrder.servants}
          onChange={(e) => onInputChange(e)}
        >
          <option>Sizə qulluq edəcək əməkdaşımızı seçin</option>
          {servants.length &&
            servants.map((item) => (
              <option key={item.id} value={item.name}>
                {item.name}
              </option>
            ))}
        </Form.Select>
        <Button variant="success" type="submit" block className="my-3">
          Əlavə et
        </Button>
      </Form>
    </>
  );
};

export default AddOrderForm;
