import Styled from 'styled-components';

export const Page = Styled.div`
    display:flex;height:92vh;width:100%;
`

export const Contatos = Styled.div`
    width:30%;min-height:100%;background-color:#2F95B9;
    @media screen and (max-width:600px) and (min-width:0px){
        width:100%;
    }
`

export const Conversas = Styled.div`
    width:70%;height:auto;min-height:100%;background-color:#505050;display:flex;
    flex-direction: column;justify-content: space-between;
    @media screen and (max-width:600px) and (min-width:0px){
        display:none;
    }
`

export const Mensagens = Styled.div`
    min-height:80%;min-width:100%;display:flex;justify-content: flex-end;flex-direction: column;
    overflow:hidden;background-color:#155971;
`

export const Escrever = Styled.div`
    display:flex;min-height:8%;background-color:#141414;
    input{
        width:90%;margin:4px;
    }
    button{
        width:10%;margin:4px;background-color:#7BDC6E;border:none;border-radius:4px;
    }
`

export const NoMensagem = Styled.div`
    display:flex;min-height:92%;width:70%;justify-content: center;align-items: center;
    @media screen and (max-width:600px) and (min-width:0px){
        display:none;
    }
    p{font-size:24px;color:lightgrey;}
`

export const InfoMensagens = Styled.div`
    height:12%;width:100%;background-color:grey;display:flex;align-items: center;
    justify-content: space-between;align-items: center;background-color:#0b78a0;
`

export const InfoUser = Styled.div`
    display:flex;justify-content: space-between;align-items: center;margin-left:4%;
    img{ width:50px;height:50px;border-radius:50px;border:1px black solid}
    p{margin-left:20px;}
`

export const Config = Styled.div`
    margin-right:4%;display:flex;
    button{border-radius:10px;background-color:transparent;border:none;background-color:#2F95B9}
    svg{font-size:30px;margin-right:4px;}
`