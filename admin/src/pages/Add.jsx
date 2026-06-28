import React, { useState } from "react";
import { assets } from "../assets/admin_assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const Add = ({ token }) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Clinic Categories
  const [category, setCategory] = useState("Prescription Medicines");
  const [subCategory, setSubCategory] = useState("Tablet");

  const [bestseller, setBestseller] = useState(false);
  const [sizes, setSizes] = useState([]);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();

      const formData = new FormData();

      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image4 && formData.append("image4", image4);

      const response = await axios.post(
        backendUrl + "/api/product/add",
        formData,
        {
          headers: { token },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);

        setName("");
        setDescription("");
        setPrice("");

        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);

        setCategory("Prescription Medicines");
        setSubCategory("Tablet");
        setSizes([]);
        setBestseller(false);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col w-full items-start gap-3"
    >
      {/* Upload Images */}
      <div>
        <p className="mb-2">Upload Medicine Images</p>

        <div className="flex gap-2">
          {[image1, image2, image3, image4].map((img, index) => (
            <label
              key={index}
              className="cursor-pointer"
              htmlFor={`image${index + 1}`}
            >
              <img
                className="w-20"
                src={!img ? assets.upload_area : URL.createObjectURL(img)}
                alt="upload"
              />

              <input
                hidden
                id={`image${index + 1}`}
                type="file"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (index === 0) setImage1(file);
                  if (index === 1) setImage2(file);
                  if (index === 2) setImage3(file);
                  if (index === 3) setImage4(file);
                }}
              />
            </label>
          ))}
        </div>
      </div>

      {/* Medicine Name */}
      <div className="w-full">
        <p className="mb-2">Medicine Name</p>

        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Enter medicine name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      {/* Description */}
      <div className="w-full">
        <p className="mb-2">Medicine Description</p>

        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          placeholder="Enter medicine description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>

      {/* Category + Dosage Form + Price */}
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">

        <div>
          <p className="mb-2">Medicine Category</p>

          <select
            className="w-full px-3 py-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Prescription Medicines">
              Prescription Medicines
            </option>

            <option value="Over-the-Counter">
              Over-the-Counter (OTC)
            </option>

            <option value="Vitamins & Supplements">
              Vitamins & Supplements
            </option>

            <option value="Medical Devices">
              Medical Devices
            </option>
          </select>
        </div>

        <div>
          <p className="mb-2">Dosage Form</p>

          <select
            className="w-full px-3 py-2"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="Tablet">Tablet</option>
            <option value="Capsule">Capsule</option>
            <option value="Syrup">Syrup</option>
            <option value="Cream">Cream</option>
            <option value="Drops">Drops</option>
            <option value="Injection">Injection</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Price (Rp)</p>

          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="15000"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
      </div>
            {/* Packaging */}
      <div>
        <p className="mb-2">Packaging</p>

        <div className="flex gap-3 flex-wrap">
          {["1 Box", "10 Tablets", "20 Tablets", "60 ml", "100 ml"].map(
            (pack) => (
              <div
                key={pack}
                onClick={() =>
                  setSizes((prev) =>
                    prev.includes(pack)
                      ? prev.filter((item) => item !== pack)
                      : [...prev, pack]
                  )
                }
              >
                <p
                  className={`${
                    sizes.includes(pack)
                      ? "bg-green-100 border border-[#0F766E]"
                      : "bg-slate-200"
                  } px-3 py-1 rounded cursor-pointer transition-all`}
                >
                  {pack}
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Featured Medicine */}
      <div className="flex gap-2 mt-2">
        <input
          type="checkbox"
          id="featured"
          checked={bestseller}
          onChange={() => setBestseller((prev) => !prev)}
        />

        <label className="cursor-pointer" htmlFor="featured">
          Mark as Featured Medicine
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-40 py-3 mt-4 bg-[#0F766E] hover:bg-[#0D5F58] text-white rounded-md transition-all duration-300"
      >
        ADD MEDICINE
      </button>
    </form>
  );
};

export default Add;