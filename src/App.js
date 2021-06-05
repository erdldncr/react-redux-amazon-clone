import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login'
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
function App() {
const [{},dispatch]=useStateValue()
  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log('the user is ',authUser)
      if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
      })
      }else{
        dispatch({
          type:'SET_USER',
          user:null
      })
      }
    })
  },[])
  return (
    <div className="app">
      
    <Switch>
      <Route path='/login' component={Login}/>
      <Route exact path='/' >
      <Header/>
      <Home/>
      </Route>
      <Route path='/checkout'>
      <Header/>
      <Checkout/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;
