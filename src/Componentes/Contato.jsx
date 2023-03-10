import { EstruturaContato, Foto, Infos } from './Styled.jsx';

function Contato(props){

    return(
        <EstruturaContato onClick={()=> props.funcionalidade(props.email)}>
            <Foto>
                <img src={props.foto}></img>
            </Foto>
            <Infos>
                <p>{props.nome}</p>
            </Infos>
        </EstruturaContato>
    );
}

export default Contato;