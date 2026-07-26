import logo from '../assets/logo.png';
import { HeaderStyled } from './HeaderStyled';

export default function Header() {
  return (
    // <header>
    <HeaderStyled>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      {/* </header> */}
    </HeaderStyled>
  );
}
