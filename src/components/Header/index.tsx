import * as C from './styles'
import nessLogo from '../../logo.png';
export const Header = () => {
    return(
        <C.Container>
            <img src={nessLogo} className="App-logo" alt="nessLogo" />
            <p><strong>Localisator Application</strong></p>
        </C.Container>
    )
}