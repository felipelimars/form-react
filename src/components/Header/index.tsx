import Logo from "../../assets/Cox-Automotive.webp";
import { Container, LogoStyle } from './styled';

const Header = () => {

  return (
    <Container>
      <div>
        <LogoStyle
          src={Logo}
          alt="Logotipo"
        />
      </div>
    </Container>
  );
}

export default Header;

