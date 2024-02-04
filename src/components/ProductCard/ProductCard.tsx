import React from 'react';
import * as S from './styles';
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../data/product';
import { RootReducer } from '../../redux/root-reducer';
import { addProduct, removeProduct } from '../../redux/Cart/cart-slice';

interface ProductCardsProp {
  product: Product
}

export const ProductCard: React.FC<ProductCardsProp> = ({ product }) => {

  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
  const dispatch = useDispatch()

  const isProductOnCart = cart.find((productOnCart) => product.id === productOnCart.id) !== undefined;


  function handleAddProductToCart() {
    dispatch(addProduct(product));
  }

  function handleRemoveProductFromCart() {
    dispatch(removeProduct(product));
  }

  return (
    <>
      <S.Card >
        <S.ProductImage src={product.image} alt={product.description} />
        <S.ProductTitle>{product.title}</S.ProductTitle>
        <S.WrapRatingButton>
          <S.ReviewPriceContainer>
            <S.RatingWrapper>
              <S.RatingStars>
                {Array.from({ length: 5 }).map((_, index) => index < Math.round(product.rating.rate) ? <AiFillStar key={index} /> : <AiOutlineStar key={index} />)}
              </S.RatingStars>
              <S.Rate>
                {product.rating.rate}
              </S.Rate>
              ({product.rating.count})
            </S.RatingWrapper>
            <S.Price> ${product.price} </S.Price>
          </S.ReviewPriceContainer>
          <S.AddToCardButtonWrapper>
            {isProductOnCart ?
              <S.RemoveFromCardButton onClick={handleRemoveProductFromCart}>
                Remover do carrinho
                <FiShoppingCart />
              </S.RemoveFromCardButton> :
              <S.AddToCardButton onClick={handleAddProductToCart}>
                Adicionar ao carrinho <FiShoppingCart />
              </S.AddToCardButton>}
          </S.AddToCardButtonWrapper>
        </S.WrapRatingButton>
      </S.Card>
    </>
  );
};

