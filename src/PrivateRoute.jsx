import {Navigate , useNavigate} from 'react-router-dom'
import axios from 'axios';

function PrivateRoute({children}){
    const navigate = useNavigate()
    return(true ? children : navigate('/'))
}

export default PrivateRoute;