import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard";
import ShopPagination from "../components/ShopPagination";
import { useShopPagination } from "../context/ShopPaginationContext";
import "./Shop.css";

export default function Shop() {
  const { shop, loading, changePage } = useShopPagination();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShopData = async () => {
      try {
        await changePage(1);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchShopData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Shop</h1>
      </div>

      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        <div>
          <div className="shop-grid">
            {shop.map((item, index) => (
              <ShopCard key={item.offerId || index} shopItem={item} />
            ))}
          </div>
          <ShopPagination />
        </div>
      )}
    </div>
  );
}