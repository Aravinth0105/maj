import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart";
import { Link } from "react-router-dom";

function App() {
 

  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState(["mobile", "tv", "laptop"]);
  const [showCart, setShowCart] = useState(false);

  const handleSave = () => {
    if (!category || !name || !image) {
      alert("Please fill in all fields.");
      return;
    }

    const newData = {
      category: category,
      name: name,
      image: image,
    };

    setFormData([...formData, newData]);

    if (!categories.includes(category)) {
      setCategories([...categories, category]);
    }

    setCategory("");
    setName("");
    setImage("");
  };

  const handleView = () => {
    setShowCart(true);
  };

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  };
  console.log(formData);

  return (
    <>
      <div className="form-row d-flex">
        <div className="form-group col-md-3">
          <label htmlFor="inputCategory">Category</label>
          <input
            type="text"
            className="form-control"
            id="inputCategory"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputImg">Image</label>
          <input
            type="file"
            className="form-control"
            id="inputImg"
            onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
          />
        </div>
      </div>
      <button type="button" onClick={handleSave}>
        Save
      </button>
      <Link to="/Cart">
        <button type="button" onClick={handleView}>
          View
        </button>{" "}
        <br />
      </Link>
      {showCart && (
        <Cart
         
        />
      )}
    </>
  );
}

export default App;
