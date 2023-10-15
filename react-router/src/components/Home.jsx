import { useNavigate } from "react-router-dom"


const Home = () => {
    const navigator = useNavigate()
  return (
    <div>
      Home Page
      <br />
      <button onClick={() => navigator("/order-summary", {replace:true})}>Order Summary</button>
    </div>
  )
}

export default Home
