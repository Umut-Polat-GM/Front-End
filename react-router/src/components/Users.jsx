import { Outlet, useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUsers = searchParams.get("activeUsers") === "true"
  return (
    <div>
      <h2>Users and Details</h2>
      <Outlet/>
        <br />
        <button onClick={() => setSearchParams({activeUsers: !showActiveUsers})}>
            {showActiveUsers ? "Show All Users" : "Show Active Users"}
        </button>
        {showActiveUsers ? <h3>Active Users</h3> : <h3>All Users</h3>}
    </div>
  )
}

export default Users
