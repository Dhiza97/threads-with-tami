import React from "react";

const Category = () => {
  return (
    <div>
      <div className="card bg-base-100 image-full w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title">Category Name</h2>
          <p>
            Category description
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;