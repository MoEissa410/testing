/* eslint-disable react/prop-types */
// Inside your Form.js or App.js file
import { useState, useEffect } from "react";
import { sectorsData } from "../database";
import { v4 as uuidv4 } from "uuid";

const Form = ({ onSave, initialData }) => {
  const [name, setName] = useState("");
  const [id, setId] = useState(uuidv4());
  const [selectedSector, setSelectedSector] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [storedData, setStoredData] = useState(null);

  useEffect(() => {
    // Load previously stored data (you need to implement this part)
    // For example, you can use localStorage
    // const storedData = JSON.parse(localStorage.getItem("userData"));
    if (initialData) {
      setStoredData(initialData);
      setId(initialData.id);
      setName(initialData.name);
      setSelectedSector(initialData.selectedSector);
      setAgreed(initialData.agreed);
    } else {
      setId(uuidv4());
    }
  }, [initialData]); // Run this effect only once on component mount

  const handleSave = (e) => {
    e.preventDefault(); // Prevent form submission and page reload

    // Validate
    if (!name || !selectedSector || !agreed) {
      alert("Please fill in all fields");
      return;
    }

    // Save to database (localStorage in this case) with the generated id
    const userData = { id, name, selectedSector, agreed };
    onSave(userData);
    // Update state
    setStoredData(userData);
    setId(uuidv4());
    // Reset the form
    setName("");
    setSelectedSector("");
    setAgreed(false);
  };

  const handleEdit = () => {
    // Populate the form with stored data for editing
    if (storedData) {
      setName(storedData.name);
      setSelectedSector(storedData.selectedSector);
      setAgreed(storedData.agreed);
    }
  };

  return (
    <div className=" flex justify-center ">
      <form onSubmit={handleSave} className="flex flex-col  p-12">
        <label className="mb-3 block text-base font-medium text-[#07074D]">
          Name:
          <input
            className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md">
          Sectors:
          <select
            value={selectedSector}
            onChange={(e) => setSelectedSector(e.target.value)}
          >
            <option value="">Select a sector</option>
            {sectorsData.map((category) => (
              <optgroup label={category.category} key={category.category}>
                {category.subcategories.map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </label>
        <label className="p-2">
          Agree to terms:
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
          />
        </label>
        <button
          className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Form;
