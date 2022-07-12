import styled from "styled-components";
import banana from "../assets/images/banana.svg";

// background: ${(props) => props.theme.colors.secondary};

const NavigationMenu = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3%;
  background: ${(props) => props.theme.colors.primary};
`;

const Logo = styled.div`
  cursor: pointer;
  display: inline-block;
  img {
    margin-right: 1rem;
    width: 3rem;
    vertical-align: middle;
  }
`;

const NavLinks = styled.div`
  li {
    display: inline-block;
    padding: 0 2rem;
    a {
      transition: all 0.3 ease 0s;
      &:hover {
        color: ${(props) => props.theme.colors.secondary};
      }
    }
  }
`;

const Contato = styled.button`
  padding: 0.9rem 2.5rem;
  border: none;
  border-radius: 5rem;
  cursor: pointer;
  transition: all 0.3s ease 0s;
`;

export function Header() {
  return (
    <>
      <NavigationMenu>
        <Logo>
          <img src={banana} alt="logo" />
          <a href="/">Banana Store</a>
        </Logo>
        <nav>
          <NavLinks>
            <li>
              <a href=""> Masculino </a>
            </li>
            <li>
              <a href=""> Feminino </a>
            </li>
            <li>
              <a href=""> Pods </a>
            </li>
            <li>
              <a href=""> Outros </a>
            </li>
          </NavLinks>
        </nav>
        <Contato>
          <a href=""> Contato </a>
        </Contato>
      </NavigationMenu>
    </>
  );
}
