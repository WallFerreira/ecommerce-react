import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import * as S from './styles'
import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { login, logout } from '../../redux/User/user-slice';
import { fecharCarrinho } from '../../redux/Cart/cart-slice';

export const Header: React.FC = () => {

  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer)

  const dispatch = useDispatch()

  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handlerUserAuth() {
    //se o usuário não está logado
    if (user === null) {
      // despachar a action de login

      dispatch(login({
        name: 'wallace Ferreira',
        email: 'wallace@email.com',
      }))

    } else {
      dispatch(logout({}))
    }
  }

  function handleCartClose() {
    setShowCart(false);
    dispatch(fecharCarrinho()); // Despacha a action para fechar o carrinho no estado global
  }

  return (

    <S.StyledHeader>
      <S.Wrapper>

        <S.HeaderTitle>MyShop.com</S.HeaderTitle>

        <S.ButtonsWrapper>

          <S.AuthButton isLogged={isLogged} onClick={handlerUserAuth}>
            {isLogged ? "LogOut" : "LogIn"}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>

          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>

      <Cart showCart={showCart} onClose={handleCartClose} />
    </S.StyledHeader>
  )
}

