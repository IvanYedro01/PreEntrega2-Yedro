import { setDoc, doc, collection } from "firebase/firestore";
import db from "../db/db.js";  // Asegúrate de que la conexión a Firebase sea correcta

const products = [
    {
        id: "br563",
        name: "Navaja de afeitar",
        description: "",
        stock: 10,
        price: 3500,
        image: "/img/navajaAfeitar.jpg",
        category: "products"
    },
    {
        id: "br564",
        name: "Cera",
        description: "",
        stock: 2,
        price: 1000,
        image: "/img/cera.jpg",
        category: "products"
    },
    {
        id: "br565",
        name: "Shampoo",
        description: "",
        stock: 5,
        price: 2000,
        image: "/img/shampoo.jpg",
        category: "products"
    },
    {
        id: "br566",
        name: "Low fade",
        description: "",
        stock: 1,
        price: 5000,
        image: "/img/lowFade.jpg",
        category: "services"
    },
    {
        id: "br567",
        name: "Mid fade",
        description: "",
        stock: 1,
        price: 5000,
        image: "/img/midFade.jpg",
        category: "services"
    },
    {
        id: "br569",
        name: "Mullet fade",
        description: "",
        stock: 5,
        price: 2000,
        image: "/img/mulletFade.jpg",
        category: "services"
    },
    {
        id: "br570",
        name: "Diseño nexus",
        description: "",
        stock: 500,
        price: 1200,
        image: "/img/diseñoNexus.jpg",
        category: "designs"
    },
    {
        id: "br571",
        name: "Diseño alien",
        description: "",
        stock: 500,
        price: 1200,
        image: "/img/diseñoAllien.jpg",
        category: "designs"
    },
    {
        id: "br572",
        name: "Diseño night",
        description: "",
        stock: 500,
        price: 1500,
        image: "/img/diseñoNight.jpg",
        category: "designs"
    }
];

const seedProducts = () => {
    const productsRef = collection(db, "products");
    products.forEach(({ id, ...dataProduct }) => {
        const docRef = doc(productsRef, id); // Usamos el 'id' manual para asignarlo al documento
        setDoc(docRef, dataProduct)
            .then(() => console.log(`Producto ${id} subido correctamente`))
            .catch((error) => console.error("Error al subir el producto: ", error));
    });

    console.log("productos subidos");
};

seedProducts();
