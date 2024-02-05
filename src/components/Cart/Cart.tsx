import { useDispatch } from 'react-redux';
import * as S from './styles';
import { removeProduct } from '../../redux/Cart/cart-slice';
import { FaArrowRight } from 'react-icons/fa6';
import { MdPayment } from 'react-icons/md';
import { FiShoppingCart } from 'react-icons/fi';
import { Product } from '../../data/product';

interface CartProps {
  showCart: boolean;
  onClose: () => void; // Adicione a propriedade onClose ao componente
  cart: Product[]
}

export const Cart: React.FC<CartProps> = ({ showCart, onClose, cart }) => {
  const dispatch = useDispatch();


  const total = cart.reduce((totalCart, product) => {
    return totalCart + product.price;
  }, 0);

  return (
    <S.Container showCart={showCart}>
      <S.WrapperHeaderCart>
        <S.CartButtonClose onClick={onClose}>
          <FaArrowRight />
        </S.CartButtonClose>
        <S.Title>Meu carrinho <FiShoppingCart /></S.Title>
      </S.WrapperHeaderCart>

      <S.CartProductsList>
        {cart.map((product) => (
          <S.CartProductItem key={product.id}>
            <S.ButtonRemoveProduct onClick={() => dispatch(removeProduct(product))}>
              X
            </S.ButtonRemoveProduct>
            <S.CartProductTitle>
              {product.title}
            </S.CartProductTitle>
            ${product.price}
          </S.CartProductItem>
        ))}
      </S.CartProductsList>

      <S.CartTotal data-testid='total' >
        Total: ${total.toFixed(2)}
      </S.CartTotal>
      <S.WrapperCartButtonCheckout>
        <S.CartButtonCheckout>Checkout<MdPayment /></S.CartButtonCheckout>
      </S.WrapperCartButtonCheckout>
    </S.Container>
  );
};
