import React, { useEffect } from "react";
import bg2 from "../asstes/bg2.jpg";
import { useDispatch, useSelector }  from "react-redux";
import { fetchMenu } from "../features/menuSlice";

const BreakFastMenu = () => {
  const dispatch = useDispatch();
  const { breakfast, loading, error } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(fetchMenu()); // fetch menu from backend
  }, [dispatch]);

  if (loading) return <p>Loading menu...</p>;
  if (error) return <p>Error: {error}</p>;

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
        }}>Breakfast</h2>
      </div>
      <div>
        <div className="menu-grid-list">
          {breakfast.map((item) => (
            <div key={item._id} className="menu-list-card">
              <img
                src={item.imgUrl}
                alt={item.name}
                className="menu-list-image"
                onError={(e) =>
                  //(e.target.src = "https://via.placeholder.com/300x200?text=Image+Not+Found")
                  (e.target.src = "https://delicious-04.onrender.com/300x200?text=Image+Not+Found")
                }
              />
              <div className="menu-list-details">
                <span className="menu-list-date">{item.date}</span>
                <h2>{item.name}</h2>
                <div className="menu-list-stars">
                  {[...Array(Math.floor(item.rating))].map((_, i) => (
                    <span key={i} style={{ color: "#ffb400" }}>★</span>
                  ))}
                  {[...Array(5 - Math.floor(item.rating))].map((_, i) => (
                    <span key={i} style={{ color: "#dfdfdf" }}>★</span>
                  ))}
                </div>
                <div className="menu-list-comments">{item.comments} Comments</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BreakFastMenu;
