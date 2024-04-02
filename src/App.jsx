import { Link } from "react-router-dom"


function App() {
  return (

    <div className='main'>
      <div className="login">
        <h1>Lama Chat</h1>
        <input type="text"  placeholder='User Name'/><br /><br />
        <Link to={"/chat"} className='btn'>Sign in</Link>
        </div>
    </div>
  )
}

export default App