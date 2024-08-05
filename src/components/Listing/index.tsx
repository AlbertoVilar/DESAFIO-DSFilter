import { ProductDTO } from "../../model/Products";
import "./style.css";

type Props = {
  products: ProductDTO[];
};

export default function Listing({ products = [] }: Props) { // Define um valor padrão vazio
  return (
    <div className="nav-container section-listing">
      {products.length === 0 ? (
        <div className="box-result">
          <span className="title-product">Nenhum produto disponível</span>
        </div>
      ) : (
        products.map(p => (
          <div className="box-result" key={p.id}>
            <span className="title-product">{p.name}</span>
            <span className="price-product">{`R$ ${p.price.toFixed(2)}`}</span>
          </div>
        ))
      )}
    </div>
  );
}