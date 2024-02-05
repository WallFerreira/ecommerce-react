import { useState } from 'react';
import { Cart } from '../Cart/Cart';
import * as S from './styles';
import { FiLogIn, FiLogOut, FiShoppingCart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../redux/root-reducer';
import { login, logout } from '../../redux/User/user-slice';
import { fecharCarrinho } from '../../redux/Cart/cart-slice';

export const Header: React.FC = () => {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);

  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer);

  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handlerUserAuth() {
    if (user === null) {
      dispatch(login({
        name: 'wallace Ferreira',
        email: 'wallace@email.com',
      }));
    } else {
      dispatch(logout({}));
    }
  }

  function handleCartClose() {
    setShowCart(false);
    dispatch(fecharCarrinho());
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
        <S.HeaderTitle>MyShop.com</S.HeaderTitle>
        <S.ButtonsWrapper>
          <S.AuthButton isLogged={isLogged} onClick={handlerUserAuth}>
            {isLogged ? 'LogOut' : 'LogIn'}
            {isLogged ? <FiLogOut /> : <FiLogIn />}
          </S.AuthButton>
          <S.CartButton onClick={() => setShowCart(!showCart)}>
            Carrinho
            <FiShoppingCart />
          </S.CartButton>
        </S.ButtonsWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} cart={cart} onClose={handleCartClose} />
    </S.StyledHeader>
  );
};
