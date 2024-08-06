import { useContext, useEffect, useState } from "react";
import Filter from "../Filter";
import Listing from "../Listing";
import { ProductDTO } from "../../model/Products";
import { ContextProductCount } from "../../utils/contex-products";
import * as productService from '../../services/productService';

type FormData = {
  minPrice?: number;
  maxPrice?: number;
}


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
    // Chamada à função síncrona `findByPrice`
    const filteredProducts = productService.findByPrice(queryParams.minPrice, queryParams.maxPrice);
    setProducts(filteredProducts);
    setContextProductCount(filteredProducts.length);
  }, [queryParams, setContextProductCount]);

  function handleFilter(data: FormData) {
    setQueryParams({
      minPrice: data.minPrice || 0,
      maxPrice: data.maxPrice || Number.MAX_VALUE
    });
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

export default ListingBody;
