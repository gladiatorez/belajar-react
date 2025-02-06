const phoneData = [
  { name: "iPhone Z", price: 10000000, discount: 50 },
  { name: "Oppo Find X", price: 14000000, discount: 30 },
  { name: "Redmi Note X", price: 5000000, discount: 42 },
  { name: "Vivo XYZ", price: 10000000, discount: 0 },
];

// membuat komponen dengan props name, price, dan discount
function Product({ name, price, discount = 0 }) {
  return (
    <div>
      <h2>{name}</h2>
      {discount > 0 && <p>
        <s>Rp {price}</s> ({discount}%)
      </p>}
      <p>
        <b>
          Rp {parseInt(price) - parseInt(price) * (parseInt(discount) / 100)}
        </b>
      </p>
      <hr />
    </div>
  );
}

// menggunakan component di dalam App()
function App() {
  return (
    <div>
      {phoneData.map((phone, id) => (
        <Product
          key={id}
          name={phone.name}
          price={phone.price}
          discount={phone.discount}
        ></Product>
      ))}
    </div>
  );
}

export default App;