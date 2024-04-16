const Cart = ({ selectedItems, clearCart }) => {
  return (
    <>
      <div className='cart'>
        Your Cart:
        <ul>
          {selectedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {selectedItems.length > 0 && <button onClick={clearCart}>CLEAR</button>}
      </div>
    </>
  );
};
export default Cart;
