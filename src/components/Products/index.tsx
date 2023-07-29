import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const URL = "https://dummyjson.com/products";

interface productModel {
  products: any[];
  total: number;
  limit: number;
}

const Products = () => {
  const [results, setResults] = useState<productModel>();

  useEffect(() => {
    async function getData() {
      const response = await fetch(URL);
      const data = await response.json();
      setResults(data);
    }

    getData();
  }, []);
  console.log(results);
  return (
    <div className="container">
      <div className="card col-4">
        {results && (
          <ul className="list-group list-group-flush">
            {results.products.map((item) => {
              return (
                <li key={item.id} className="list-group-item">
                  <Link  to={`/products/${item.id}`}  state={item}> {item.title}</Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Products;
