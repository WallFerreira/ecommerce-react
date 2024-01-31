import * as S from './styles';
import { FiShoppingCart } from 'react-icons/fi';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
  image: string;
  rating: { rate: number; count: number; };
  price: number;
}

export const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    }

    loadProducts();
  }, []);

  return (
    <>
      {products.map((product) => (
        <S.Card key={product.id}>
          <S.ProductImage src={product.image} alt={product.title} />
          {/* <S.ProductInfosWrapper > */}
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
              <S.AddToCardButton>
                Adicionar ao carrinho <FiShoppingCart />
              </S.AddToCardButton>
            </S.AddToCardButtonWrapper>
          </S.WrapRatingButton>
        </S.Card>
      ))}
    </>
  );
};