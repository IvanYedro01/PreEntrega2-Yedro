import { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import FormCheckout from "./FormCheckout";
import db from "../../db/db";
import { addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
  });

  const [idOrder, setIdOrder] = useState(null);
  const { cart, totalPrice, deleteCart } = useContext(CartContext);

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();

    // Validación simple de los campos
    if (!dataForm.fullname || !dataForm.phone || !dataForm.email) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      date: new Date(),
      total: totalPrice(),
    };

    uploadOrder(order);
  };

  const uploadOrder = (newOrder) => {
    const ordersRef = collection(db, "orders");
    addDoc(ordersRef, newOrder)
      .then((response) => {
        setIdOrder(response.id); // Guarda el id de la orden
      })
      .finally(() => deleteCart());
  };

  return (
    <div>
      {idOrder === null ? (
        <FormCheckout
          dataForm={dataForm}
          handleChangeInput={handleChangeInput}
          handleSubmitForm={handleSubmitForm}
        />
      ) : (
        <div>
          <h2>Su orden se cargó correctamente</h2>
          <p>Guarde su número de seguimiento: {idOrder}</p>
          <Link to="/">Volver al inicio</Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
