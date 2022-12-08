import Order from "./pages/Order/Order";
import AddOrderProvider from "./context/OrderContext";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <AddOrderProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/neworder" element={<Order />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AddOrderProvider>
  );
}

export default App;
