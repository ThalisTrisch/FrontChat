import { useNavigate } from 'react-router-dom';
import {GoogleLogin} from 'react-google-login';
import axios from 'axios';
const client_id = '1036770685697-b7u7gpedqt5kcl245eiglvp895rhr7ta.apps.googleusercontent.com';

function Login(){
    const navigate = useNavigate();
    
    const onSuccess = (res) => {
        console.log("Sucesso no login, ", res.profileObj)
        axios.post("http://localhost:3001/logar",{
            email:res.profileObj.email,
            nome:res.profileObj.name,
            id:res.profileObj.googleId,
            foto:res.profileObj.imageUrl
        })
        const logado = JSON.stringify(true)
        localStorage.setItem('logado',logado)
        localStorage.setItem('useremail',res.profileObj.email)
        localStorage.setItem('usernome',res.profileObj.name)
        navigate('/principal')
    }

    const onFailure = (res) => {
        console.log("Falha no login, resposta:", res)
    }
    
    return(
        <>
            <GoogleLogin
                clientId={client_id}
                buttonText='Google Login'
                onSuccess={onSuccess}
                onFailure={onFailure}
            />
        </>
    );
}

export default Login;