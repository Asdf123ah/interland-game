import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundComponent.css";

function NotFoundComponent() {
  const navigate = useNavigate();

  const handleBackButtonClick = () => {
    navigate("/");
  };
  return (
    <div className="center-box">
      <button className="backButtonNotFound" onClick={handleBackButtonClick} />
      <div className="content-box">
        <h1 className="title-not-found">
          <p>404 PAGE NOT FOUND</p>
        </h1>
        <div className="p-not-found">
          <p>The page you are looking for does not exist.</p>
        </div>
      </div>
    </div>
  );
}

export default NotFoundComponent;
