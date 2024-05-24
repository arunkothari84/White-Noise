import React, { useState } from "react";
import axios from "axios";

const Upload = () => {
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isUploading, setIsUploading] = useState("Submit");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("videoName", name);
    formData.append("file", file);
    formData.append("category", selectedOption);

    if (checkPassword !== process.env.REACT_APP_PASSWORD) {
      alert("Incorrect Password");
      return;
    } else {
      try {
        const response = await axios.post(
          `${process.env.REACT_APP_AWS_BACKEND_URL}/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data); // handle response as needed
        alert(response.data.message);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
    setIsUploading("Submit");
  };

  function onClickHandler() {
    if (checkPassword !== process.env.REACT_APP_PASSWORD) {
      return;
    } else {
      setIsUploading("Submitting....");
    }
  }

  return (
    <div className="text-white m-4 p-2 border-2 border-white">
      <h2>Submit Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name for the video file: </label>
        <input
          type="text"
          id="videoName"
          name="videoName"
          value={name}
          onChange={handleNameChange}
          placeholder="Name"
          required
          className="text-black"
        />
        <br />
        <br />

        <label htmlFor="myfile">Select the video file: </label>
        <input
          type="file"
          id="myfile"
          name="myfile"
          onChange={handleFileChange}
          required
        />
        <br />
        <br />

        <label htmlFor="mylist">Select a category from the list </label>
        <select
          id="category"
          name="category"
          value={selectedOption}
          onChange={handleOptionChange}
          className="text-black"
          required
        >
          <option value="" className="text-black font-bold" disabled>
            Select a category
          </option>
          <option value="Forest" className="text-black">
            Forest
          </option>
          <option value="Rain" className="text-black">
            Rain
          </option>
          <option value="Water Bodies" className="text-black">
            Water Bodies
          </option>
          <option value="Birds" className="text-black">
            Birds
          </option>
          <option value="Thunder" className="text-black">
            Thunder
          </option>
        </select>
        <br />
        <br />

        <button
          type="submit"
          className="border-2 border-white p-2 bg-orange-500"
          onClick={onClickHandler}
        >
          {isUploading}
        </button>
      </form>
      <br />
      <br />

      <label htmlFor="name">Input password to upload videos </label>

      <input
        type="text"
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
        placeholder="Password"
        required
        className="text-black"
      />
      <br />
      <br />
    </div>
  );
};

export default Upload;
