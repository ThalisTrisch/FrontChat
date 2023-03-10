import axios from 'axios';
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { Page, Contatos, Conversas, Mensagens, Escrever, NoMensagem, InfoMensagens, InfoUser,
    Config} from './Styled.jsx'
import Bar from "../../Componentes/Bar.jsx";
import Contato from '../../Componentes/Contato.jsx'
import Mensagem from '../../Componentes/Mensagem.jsx'
import { AiFillCaretLeft } from 'react-icons/ai'

function Principal(){

    const navigate = useNavigate();
    const [usuario,setUsuario] = useState()
    const [mensagem,setMensagem] = useState()
    const [newMensagem,setNewMensagem] = useState('')
    const [conversa,setConversa] = useState(false)
    const [userConversando, setUserConversando] = useState(undefined)
    const now = new Date()

    const escrever = (mensagem) => {setNewMensagem(mensagem.target.value)}
    function fecharConversa(){
        setConversa(false);
        setUserConversando(undefined)
    }
    async function abrirConversa(email){
        axios.get(`http://localhost:3001/getchat/${localStorage['useremail']}/${email}`).then((response)=>{
            console.log(response.data)
            setMensagem(response.data)
        })
        usuario.map((user)=>{
            if(user.email==email){
                console.log(user.foto)
                setUserConversando(user)
            }
        }) 
        setConversa(true);
    }
    function enviarMensagem(){
        const newMsg = [{
            de:localStorage['useremail'],
            para:userConversando.email,
            mensagem:newMensagem,
            createdAt: now
        }]
        axios.post("http://localhost:3001/sendmensagem", {
            de:localStorage['useremail'],
            para:userConversando.email,
            mensagem:newMensagem,
        })
        if(mensagem === undefined){
            console.log('Não há mensagens')  
            setMensagem(newMsg)
        }else{
            console.log('Há mensagens')  
            setMensagem(mensagem.concat(newMsg))
        }      
    }

    useEffect(()=>{
        axios.get(`http://localhost:3001/getusers/${localStorage['useremail']}`).then((response)=>{
            console.log(response.data)
            setUsuario(response.data)
        })
        console.log(window.screen.width)
    },[])

    return(
        <div>
            <Bar></Bar>
            <Page>
                <Contatos>
                    {usuario
                    ?
                        usuario.map((user)=>{
                            return(
                                <Contato
                                    key={user.email}
                                    email={user.email}
                                    nome={user.nome}
                                    foto={user.foto}
                                    funcionalidade={abrirConversa}
                                ></Contato>
                            )
                        })
                    :
                        <p>não há usuários ainda</p>
                    }
                </Contatos>
                {conversa
                    ?
                    <Conversas>
                        <InfoMensagens>
                            <InfoUser>
                                {userConversando
                                ?
                                <>
                                    <img src={userConversando.foto}></img>
                                    <p>{userConversando.nome}</p>
                                </>
                                :
                                <>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/b/b9/Youtube_loading_symbol_1_(wobbly).gif'></img>
                                    <p>Carregando...</p>
                                </>
                                }
                                
                            </InfoUser>
                            <Config>
                                <button onClick={fecharConversa}><AiFillCaretLeft/></button>
                            </Config>
                        </InfoMensagens>
                        <Mensagens>
                            {mensagem &&
                                mensagem.map((envio)=>{
                                    return(
                                        <Mensagem
                                            key={envio.createdAt}
                                            de={envio.de}
                                            para={envio.para}
                                            mensagem={envio.mensagem}
                                        ></Mensagem>
                                    )
                                })
                            }
                        </Mensagens>
                        <Escrever>
                            <input placeholer="Mensagem" name="conteudo" onChange={escrever}></input>
                            <button onClick={enviarMensagem}>Enviar</button>
                        </Escrever>
                    </Conversas>
                    :
                    <NoMensagem>
                        <p>Escolha um contato para conversar! </p>
                    </NoMensagem>
                }
            </Page>
        </div>
    )
}

export default Principal;