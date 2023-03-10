import {Topbar} from "./Styled.jsx"

function Bar(){

    return(
        <Topbar>
            <p>
                Logo
            </p>
            <p>
                {localStorage['usernome']}
            </p>
        </Topbar>
    )
}

export default Bar;