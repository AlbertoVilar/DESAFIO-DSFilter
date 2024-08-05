import "./style.css";
import { useContext, useEffect, useState } from "react";
import Filter from "../Filter";
import Listing from "../Listing";
import { ProductDTO } from "../../model/Products";
import { ContextProductCount } from "../../utils/contex-products";
import * as productService from '../../services/productService';


type QueryParams = {
  minPrice: number;
  maxPrice: number;
}

function ListingBody() {

  const [products, setProducts] = useState<ProductDTO[]>([]);

  const [queryParams, setQueryParams] = useState<QueryParams>({
      minPrice: 0,
      maxPrice: Number.MAX_VALUE
  });

  const { setContextProductCount } = useContext(ContextProductCount);

  useEffect(() => {
      const products = productService.findByPrice(queryParams.minPrice, queryParams.maxPrice);
      setProducts(products);
      setContextProductCount(products.length);
  }, [queryParams]);

  function handleFilter(min: number, max: number) {
      setQueryParams({ maxPrice: min || 0, minPrice: max || Number.MAX_VALUE });
  }

  return (
      <main>
          <div className="dsf-padding-body">
              <Filter onFilter={handleFilter} />
              <Listing products={products} />
          </div>
      </main>
  );
}

export default ListingBody