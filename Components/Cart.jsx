import { useLocation } from 'react-router-dom'

function Cart() {
    let location = useLocation();
    console.log(location.state);
  return (
    <div>Cart</div>
  )
}

export default Cart