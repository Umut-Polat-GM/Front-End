import { useParams } from 'react-router-dom'

const UsersDetails = () => {
    const {userId} = useParams()
  return (
    <div>
      <h3>User Details: {userId}</h3>
    </div>
  )
}

export default UsersDetails
