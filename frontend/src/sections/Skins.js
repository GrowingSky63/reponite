import SkinsPagination from "../components/SkinsPagination";
import SkinCard from "../components/SkinCard";
import TypeFilter from "../components/TypeFilter";
import { useSkinsPagination } from "../context/SkinsPaginationContext";
import { useEffect, useState } from "react";
import "./Skins.css";

export default function Skins() {
  const { skins, loading: paginationLoading, changePage } = useSkinsPagination();
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkins = async () => {
      try {
        await changePage(1);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSkins();
  }, []);

  return (
    <div className="container mt-5">
      <TypeFilter />
      
      {paginationLoading ? (
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
        <div className="pagination">
          {skins.map((skin, index) => (
            <SkinCard key={skin.id || index} skin={skin} />
          ))}
          <div className="pagination-component">
            <SkinsPagination />
          </div>
        </div>
      )}
    </div>
  );
}