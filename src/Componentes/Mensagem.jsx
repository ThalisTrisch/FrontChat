import { MensagemMinha, MensagemRecebida, Chat } from './Styled.jsx';

function Mensagem(props){

    return(
        <Chat>
            {props.de == localStorage['useremail']
                ?
                <>
                    <MensagemMinha>
                        <p>{props.mensagem}</p>
                    </MensagemMinha>
                    {/* <p>o usuário logado está mandando mensagem</p> */}
                </>
                :
                <>
                    <MensagemRecebida>
                        <p>{props.mensagem}</p>
                    </MensagemRecebida>
                    {/* <p>mensagem sendo recebida</p> */}
                </>
            }
        </Chat>
    );
}

export default Mensagem;