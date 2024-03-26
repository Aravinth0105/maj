import React, { useState } from "react";

const Cart = ({ formData, setFormData }) => {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [categories, setCategories] = useState(["mobile", "tv", "laptop"]);
  const [showCart, setShowCart] = useState(false);
  const predefinedData = [
    {
      category: "mobile",
      name: "Samsung",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-s901-412882-sm-s901eidgmea-530960271?$650_519_PNG$",
    },
    {
      category: "mobile",
      name: "Oppo",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-s901-412882-sm-s901eidgmea-530960271?$650_519_PNG$",
    },
    {
      category: "tv",
      name: "Sony",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-s901-412882-sm-s901eidgmea-530960271?$650_519_PNG$",
    },
    {
      category: "laptop",
      name: "Asus",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-s901-412882-sm-s901eidgmea-530960271?$650_519_PNG$",
    },
    {
      category: "tv",
      name: "Redmi",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-s901-412882-sm-s901eidgmea-530960271?$650_519_PNG$",
    },
    {
      category: "laptop",
      name: "Lenova",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-s901-412882-sm-s901eidgmea-530960271?$650_519_PNG$",
    },
    {
      category: "tv",
      name: "Hcl",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-s901-412882-sm-s901eidgmea-530960271?$650_519_PNG$",
    },
    {
      category: "laptop",
      name: "HP",
      image:
        "https://images.samsung.com/is/image/samsung/p6pim/levant/2202/gallery/levant-galaxy-s22-s901-412882-sm-s901eidgmea-530960271?$650_519_PNG$",
    },
  ];

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

  const filteredData = formData.filter(
    (data) => !category || data.category === category
  );

  if (!formData) {
    return <div>No data available</div>;
  }

  return (
    <div>
      <select value={category} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((cat, index) => (
          <option key={index} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((data, index) => (
            <tr key={index}>
              <td>{data.category}</td>
              <td>{data.name}</td>
              <td>
                {data.image && (
                  <img
                    src={data.image}
                    alt={`Image ${index}`}
                    style={{ width: "30px", height: "30px" }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
