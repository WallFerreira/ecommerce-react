import styled from "styled-components"

export const Card = styled.article`
  background-color: white;
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
`;

export const ProductImage = styled.img`
  width: 250px;
  height: 400px;
  object-fit: contain;
`;

export const ProductInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 3rem;

`

export const ProductTitle = styled.h2`
  font-weight: 500;
  font-size: 1.2rem;
  height: 4rem;
  margin-top: 0.8rem;
  text-align: center;
 
  /* overflow: hidden; */
  line-height: 1.2em;
  max-height: 7em; /* aqui vc controla a altura da caixa de texto */
  text-align: center;
  margin-right: -1em;
  padding-right: 1em;

  width: 100%;

`;

export const ReviewPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-top: 2rem;

`;

export const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap:0.2rem;
`;

export const Review = styled.span`
`;

export const RatingStars = styled.div`
  display: flex;
  svg{
    font-size: 1.2rem;
    color: goldenrod;
  }
`

export const Rate = styled.div`
  font-weight: 600;
  font-size: 1rem;
`

export const Price = styled.strong``;



export const WrapRatingButton = styled.div`
  width: 100%; 
  margin-top: 1rem; 
`;



export const AddToCardButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 1rem;

  
  &
   :hover{
    transform: scale(1.02);
    position:  static;
   }
   :active{
    transform: scale(1);
   }
  
  
`;


export const AddToCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  background-color: #111;
  color: white;
  font-size: 0.8rem;

    svg{
      font-size: 1.2rem;
   }

  

`;

export const RemoveFromCardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;

  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  background-color: #411;
  color: white;
  font-size: 0.8rem;

    svg{
      font-size: 1.2rem;
   }

`
