import styled from "styled-components";

interface ContainerProps {
  showCart: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: sticky;
  top: 0;
  right: ${(props) => (props.showCart ? "0" : "-340px")};
  width: 340px;
  max-height: 100vh;
  background-color: white;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
  transition: right 0.6s;
  overflow-y: auto; 
`;

export const Title = styled.h1``;

export const CartProductsList = styled.ul`
  padding: 2rem 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const CartProductItem = styled.li`
  background-color: #efefef;
  padding: 0.4rem;
  border-radius: 5px;
`;

export const CartTotal = styled.div`
  background-color: aliceblue;
  border-radius: 5px;
  padding: 0.8rem;
  width: 100%;
  font-weight: 600;
`;

export const ButtonRemoveProduct = styled.button`
  margin: 0 0.5rem;
  border: none;
  border-radius: 5px;
  height: 20px;
  width: 20px;
  background-color: #991629;
  color: white;
  font-size: 0.68rem;
  font-weight: 500;
`;

export const WrapperHeaderCart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CartProductTitle = styled.strong``;

export const CartButtonClose = styled.button`
  border: none;
  background-color: white;

  :hover {
      transform: scale(1.02);
  }

  :active{
      background-color:#bfbfbf ;
      border-radius: 5px;
   
    }
  svg {
    font-size: 2.2rem; 
  }
`;

export const WrapperCartButtonCheckout = styled.div`
  :hover {
    transform: scale(1.02);
  }
  :active {
    transform: scale(1);
  }
`;

export const CartButtonCheckout = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  margin-top: 0.5rem;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  background-color: #411;
  color: white;
  font-size: 1rem;
  svg {
    font-size: 1.3rem;
  }
`;
