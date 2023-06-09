import InfoContainer from "./components/UI/UserInfo"
import Wrapper from "./components/UI/Wrapper"
import AddUser from "./components/User/AddUser"

function App() {
  const info = "Rameesha (31 years old)"
  return (
    <Wrapper>
      <AddUser />
      <InfoContainer>
        {info}
      </InfoContainer>
    </Wrapper>
  )
}

export default App
