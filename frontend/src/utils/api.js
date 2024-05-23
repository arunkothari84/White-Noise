import axios from "axios";

export const fetchDataFromAPI = async (query) => {
  if (query) {
    const response = await axios.get(
      `${process.env.REACT_APP_INTANCE_URL}api/videos/category/${query}`
    );
    console.log(response.data);
    return response.data;
  }
  const response = await axios.get(
    `${process.env.REACT_APP_INTANCE_URL}api/videos/`
  );
  const data = response.data;
  return data;
};
