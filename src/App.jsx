import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { UserActions } from './redux/actions';

const authSelector = (state) => state.users.auth
const nameSelector = (state) => state.users.name

function App() {

  const isAuth = useSelector(authSelector)
  const userName = useSelector(nameSelector)

  const dispatch = useDispatch()

  const handleClic = () => {
    console.log("handleClic");
    if (isAuth) {
      dispatch(UserActions.LOGOUT_ACTION)
    } else {
      dispatch(UserActions.LOGIN_ACTION)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(UserActions.SET_NAME_ACTION(e.target.name.value))
  }


  return (
    <div className="App">
      <header className="App-header" onClick={handleClic}>
        <h2>{userName} is auth?: {String(isAuth)}</h2>
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Login!</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
