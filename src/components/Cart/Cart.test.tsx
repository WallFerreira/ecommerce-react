/* eslint-disable testing-library/no-debugging-utils */
import { render, screen } from "@testing-library/react"
import { Cart } from "./Cart"
import { products } from "../../data/product";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";

const cart = products.slice(0, 2) // obtendo somente os 2 primeiros produtos do Array

const mockDispactch = jest.fn()

jest.mock('react-redux', () => {
  return {
    useDispatch: () => {
      return mockDispactch
    }
  }
})


describe('Cart > Unit Tests', () => {

  it('should render an empty cart correctly', () => {
    render(<Cart showCart={true} cart={[]} onClose={() => false} />)

    const titleElement = screen.getByRole('heading', { level: 1 })
    const totalElement = screen.getByTestId('total')
    const cartListElement = screen.getByRole('list')  //tag ul = list

    screen.debug(totalElement)

    expect(titleElement).toHaveTextContent('Meu carrinho')
    expect(totalElement).toHaveTextContent('$0')
    expect(cartListElement).toBeEmptyDOMElement()

  });

  it('should render a cart with two products', () => {
    render(<Cart showCart={true} cart={cart} onClose={() => false} />)


    const productsItemElements = screen.getAllByRole('listitem') //tag li = listitem

    const firstProductTitleElement = screen.getByText(cart[0].title)
    const secondProductTitleElement = screen.getByText(cart[1].title)

    screen.debug(firstProductTitleElement)
    screen.debug(secondProductTitleElement)


    expect(productsItemElements.length).toBe(2)

    expect(firstProductTitleElement).toBeInTheDocument()
    expect(secondProductTitleElement).toBeInTheDocument()
  });

  it('should remove product when remove buttin is clicked', () => {

    render(<Cart showCart={true} cart={[products[0]]} onClose={() => false} />)

    const removeProductButton = screen.getByRole('button', { name: 'X' })

    userEvent.click(removeProductButton)

    expect(mockDispactch).toHaveBeenCalled()
    expect(mockDispactch).toHaveBeenCalledWith(removeProduct(products[0]))


  })

});