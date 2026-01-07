import React, { useEffect, useState } from "react";
import bg2 from "../asstes/bg2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "../features/menuSlice";

const categoryMap = {
  breakfast: "Breakfast",
  lunch: "Lunch",
  dinner: "Dinner",
  desserts: "Desserts",
};

function RecipesPage() {
  const dispatch = useDispatch();
  const { breakfast, lunch, dinner, desserts, loading, error } = useSelector((state) => state.menu);
  const [category, setCategory] = useState("");
  const [item, setItem] = useState("");
  const [result, setResult] = useState(null);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  // Get items for selected category
  let items = [];
  if (category && { breakfast, lunch, dinner, desserts }[category]) {
    items = { breakfast, lunch, dinner, desserts }[category];
  }

  const handleSearch = (e) => {
    e.preventDefault();
    if (!category || !item) return;
    const found = items.find((i) => i._id === item);
    setResult(found || null);
  };

  return (
    <>
      {/* Banner Section */}
      <div style={{
        width: '100%',
        height: '120px',
        background: `url(${bg2}) center center/cover no-repeat`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '16px 0',
        position: 'relative',
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.4)',
          position: 'absolute',
          top: 0,
          left: 0,
        }} />
        <h2 style={{
          color: 'white',
          zIndex: 1,
          position: 'relative',
          fontWeight: 600,
          fontSize: '2rem',
        }}>Recipe</h2>
      </div>
      <div className="container my-6">
       
      <form className="row g-3 justify-content-center align-items-end mb-4" onSubmit={handleSearch}>
        <div className="col-md-4">
          <label className="form-label">Category</label>
          <select className="form-select" value={category} onChange={e => { setCategory(e.target.value); setItem(""); setResult(null); }} required>
            <option value="">Select Category</option>
            {Object.entries(categoryMap).map(([key, label]) => (
              <option key={key} value={key}>{label}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Item</label>
          <select className="form-select" value={item} onChange={e => setItem(e.target.value)} required disabled={!category}>
            <option value="">Select Item</option>
            {items.map((i) => (
              <option key={i._id} value={i._id}>{i.name}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <button className="btn btn-success w-100" type="submit" disabled={!category || !item}>Search</button>
        </div>
      </form>

      {loading && <p>Loading recipes...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {result && (
        <div className="card mx-auto mb-4" style={{ maxWidth: 600 }}>
          <img src={result.imgUrl} alt={result.name} className="card-img-top" onError={e => e.target.src = "https://delicious-04.onrender.com/300x200?text=Image+Not+Found"} />
          <div className="card-body">
            <h5 className="card-title">{result.name}</h5>
            <p className="card-text">{result.description || "No description available."}</p>
            <div className="mb-2">
              <span className="me-2">Rating:</span>
              {[...Array(Math.floor(result.rating || 0))].map((_, i) => (
                <span key={i} style={{ color: "#ffb400" }}>★</span>
              ))}
              {[...Array(5 - Math.floor(result.rating || 0))].map((_, i) => (
                <span key={i} style={{ color: "#dfdfdf" }}>★</span>
              ))}
            </div>
            <div className="small text-muted">{result.date}</div>
            <div className="small">{result.comments} Comments</div>
            {result.cookTime && (
              <div className="mt-3"><strong>Cook Time:</strong> {result.cookTime}</div>
            )}
            {result.ingredients && result.ingredients.length > 0 && (
              <div className="mt-3">
                <strong>Ingredients:</strong>
                <ul>
                  {result.ingredients.map((ing, idx) => {
                    if (typeof ing === 'string') {
                      return <li key={idx}>{ing}</li>;
                    } else if (ing && typeof ing === 'object') {
                      // Handle object with name/quantity/_id
                      return (
                        <li key={ing._id || idx}>
                          {ing.name}
                          {ing.quantity ? ` (${ing.quantity})` : ''}
                        </li>
                      );
                    } else {
                      return null;
                    }
                  })}
                </ul>
              </div>
            )}
            {result.instructions && (
              <div className="mt-3">
                <strong>Instructions:</strong>
                {Array.isArray(result.instructions) ? (
                  <ol>
                    {result.instructions.map((inst, idx) => {
                      if (typeof inst === 'string') {
                        return <li key={idx}>{inst}</li>;
                      } else if (inst && typeof inst === 'object') {
                        return (
                          <li key={inst._id || idx}>
                            {inst.stepNumber ? `Step ${inst.stepNumber}: ` : ''}
                            {inst.text}
                          </li>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </ol>
                ) : (
                  <div style={{ whiteSpace: 'pre-line' }}>{result.instructions}</div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
    </>
  );
}

export default RecipesPage;
