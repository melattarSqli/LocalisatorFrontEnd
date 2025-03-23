import * as C from './styles'
import sqliLogo from '../../sqliLogo.png';
export const Footer = () => {
    return(
        <C.Container>
            <div className="footer-section">
            <img src={sqliLogo} className="App-logo" alt="sqliLogo" />
            <p><strong>Powered By SQLI</strong></p>
            </div>
            <div className="footer-left">
            <p><strong>Mohamed El attar @</strong></p>
            </div>
        </C.Container>
    )
}