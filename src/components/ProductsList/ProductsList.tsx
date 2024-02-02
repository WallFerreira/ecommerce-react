import { products } from '../../data/product';
import { ProductCard } from '../ProductCard/ProductCard';
import * as S from './styles';


export const ProductsList: React.FC = () => {


  // const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   async function loadProducts() {
  //     try {
  //       const response = await axios.get('https://fakestoreapi.com/products');
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   }

  //   loadProducts();
  // }, []);



  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  )
}