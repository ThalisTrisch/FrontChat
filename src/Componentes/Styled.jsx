import Styled from 'styled-components';

export const Topbar = Styled.div`
   top:0px;width:100%;height:8vh;background-color:white;display:flex;justify-content:space-between;
   align-items: center;
   p{
        font-size:20px;margin-left:2%;margin-right:2%;
   }
`

export const EstruturaContato = Styled.div`
    width:98.6%;height:60px;display:flex;justify-content: space-between;align-items: center;
    background-color:#C0DBF5;margin:0.8%;border-radius:4px;margin-top:1%;
`

export const Foto = Styled.div`
    display:flex;margin-left:4%;
    img{ width:50px;height:50px;border-radius:50px;border:1px black solid;}
`

export const Infos = Styled.div`
    margin-right:4%;
    p{white-space: nowrap}
`

export const MensagemMinha = Styled.div`
    float:right;background-color:#0099cc;max-width:70%;height:auto;padding:20px;
    padding-bottom:8px;padding-top:4px;border-radius:6px;border:0px transparent;margin-right:2%;
`

export const MensagemRecebida = Styled(MensagemMinha)`
    float:left;background-color:lightgrey;margin-left:2%;
`

export const Chat = Styled.div`
    width:100%;height:auto;margin-bottom:5px;
`