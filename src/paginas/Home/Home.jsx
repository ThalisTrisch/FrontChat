import axios from 'axios';
import {useEffect} from 'react'
import { LoginBack, Glass } from './Styled'
import Login from '../../Componentes/login'
import {gapi} from 'gapi-script'
const client_id = '1036770685697-b7u7gpedqt5kcl245eiglvp895rhr7ta.apps.googleusercontent.com';

function Home(){

    useEffect(()=>{
        function Start(){
            gapi.client.init({
                clientId: client_id,
                scope: ""
            })
        }
        gapi.load('client:auth2',Start)
    },[])

    return(
        <LoginBack>
            <Glass>
                <h2>Bem vindo ao ChatTT</h2>
                <Login></Login>
                <p>para entrar, faça login com o google</p>
            </Glass>
        </LoginBack>
    )
}

export default Home;