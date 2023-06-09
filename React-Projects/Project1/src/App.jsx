import { useState } from "react"
import Wrapper from "./components/UI/Wrapper"
import AddUser from "./components/User/AddUser"
import UserList from "./components/User/UserList"

function App() {
  const [usersList , setUsersList] = useState([])
  const addUserHandler = (uName,uAge,uGender)=>{
    setUsersList((previousUsers) => {
      return [...previousUsers , {name: uName , age: uAge , gender:uGender}]
    }
    )
  }
  return (
    <Wrapper>
      <AddUser  onAddUser={addUserHandler}/>
      <UserList  users={usersList}/>
    </Wrapper>
  )
}

export default App
