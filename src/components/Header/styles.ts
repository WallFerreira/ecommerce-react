import styled from "styled-components"

export const StyledHeader = styled.header`
  background-color: #111;
`;

export const Wrapper = styled.div`

  display: flex;
  justify-content: space-between;
  align-items: center;

  max-width: 1240px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 65px;
`;

export const HeaderTitle = styled.h1`
  color: white;
  font-size: 1.5rem;

`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;


  :hover{

    transform: scale(1.05);
   }
   :active{
    transform: scale(1);
   }
`;

interface AuthButtonProp {
  isLogged: boolean
}

export const AuthButton = styled.button<AuthButtonProp>`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: ${(props) => props.isLogged ? '#399959' : '#669663'};
  color: white;
  font-size: 0.78rem;
  font-weight: 500;

  
    svg{
      font-size: 0.8rem;
   }
`;

export const CartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding: 0 1rem;
  background-color: #411;
  color: white;
  font-size: 0.78rem;
  font-weight: 500;


    svg{
      font-size: 0.8rem;
   }
`;