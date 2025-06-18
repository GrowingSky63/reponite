import { useSkinsPagination } from "../context/SkinsPaginationContext";
import { useEffect, useState } from "react";

export default function TypeFilter() {
  const { types, selectedType, typesLoading, changeType, fetchTypes } = useSkinsPagination();
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTypes = async () => {
      try {
        await fetchTypes();
      } catch (error) {
        setError(error.message);
      }
    };

    loadTypes();
  }, [fetchTypes]);

  const handleTypeChange = async (event) => {
    const type = event.target.value;
    try {
      setError(null);
      await changeType(type);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return (
      <div className="alert alert-warning" role="alert">
        Error loading types: {error}
      </div>
    );
  }

  return (
    <div className="mb-3">
      <label htmlFor="typeFilter" className="form-label">Filter by Type:</label>
      <select 
        id="typeFilter"
        className="form-select" 
        value={selectedType} 
        onChange={handleTypeChange}
        disabled={typesLoading}
      >
        <option value="">All Types</option>
        {types.map((type) => (
          <option key={type} value={type}>
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </option>
        ))}
      </select>
    </div>
  );
}