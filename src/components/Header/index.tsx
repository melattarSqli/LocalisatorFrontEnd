import * as C from './styles'
import sqliLogo from '../../logo.png';
export const Header = () => {
    return(
        <C.Container>
            <img src={sqliLogo} className="App-logo" alt="sqliLogo" />
            <p><strong>Localisator Application</strong></p>
        </C.Container>
    )
}