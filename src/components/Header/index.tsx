import { useNavigate } from 'react-router-dom';
import Logo from "../../assets/Cox-Automotive.webp";
import { ButtonBack, Container, LogoStyle } from './styled';

const Header = () => {
  const navigate = useNavigate();
  const handleGoToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      {location.pathname === '/listpage' && (
        <ButtonBack onClick={handleGoToHome}>
        ❮ Voltar
        </ButtonBack>
      )}
      <div>
        <LogoStyle src={Logo} alt="Logotipo" />
      </div>
    </Container>
  );
}

export default Header;
