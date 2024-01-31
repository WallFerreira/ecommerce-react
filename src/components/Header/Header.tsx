
import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import * as S from './styles'
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";



export const Header: React.FC = () => {

  const [showCart, setShowCart] = useState(false);
  const isLogged = false;


  return (

    <S.StyledHeader>
      <S.Wrapper>

        <S.HeaderTitle> MyShop.com</S.HeaderTitle>

        <S.ButtonsWrapper>

          <S.AuthButton isLogged={isLogged}>
            {isLogged ? 'LogOut' : 'LogIn'}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} />
    </S.StyledHeader>
  )
}