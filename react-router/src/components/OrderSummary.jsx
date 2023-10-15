import { useNavigate } from "react-router-dom"


const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <div>
      Order Summary Page
      <br />
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  )
}

export default OrderSummary
