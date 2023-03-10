import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { gapi } from 'gapi-script';
import Home from './paginas/Home/Home.jsx';
import Principal from './paginas/Principal/Principal.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import './Routes.css';

const client_id = '471779918661-76uhc6gvjr48l6vf3posfa766jmvnff1.apps.googleusercontent.com';

function App() {
  useEffect(()=>{
    function start(){
      gapi.client.init({
        client_id: client_id,
        scope: ""
      })
    };
    gapi.load('client:auth2',start)
  });
  
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/principal' element={<PrivateRoute><Principal/></PrivateRoute>}/>
      </Routes>
    </Router>
  );
}

export default App;