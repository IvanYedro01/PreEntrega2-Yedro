import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div style={{display: "flex", padding:"20px", margin: "20px", justifyContent:"space-evenly", flexWrap: "wrap", alignItems: "baseline"}}>
      {
        products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      }
    </div>
  )
}
export default ItemList