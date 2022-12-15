import products from './data/products.json'
import './ProductTable.css'

function ProductTable2() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>picture</th>
            <th>name</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((value, index) => {
            return (
              <tr key={value.id}>
                <td>{value.id}</td>
                <td>
                  <img src={value.picture} alt="" />
                </td>
                <td>{value.name}</td>
                <td>{value.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default ProductTable2
