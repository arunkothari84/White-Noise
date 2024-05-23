import React, { createContext, useState, useEffect } from "react";

import { fetchDataFromAPI } from "../utils/api";
export const Context = createContext();

export const AppContext = (props) => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [mobileMenu, setMobileMenu] = useState(true);

  useEffect(() => {
    fetchSelectedCategoryData(selectedCategory);
  }, [selectedCategory]);

  const fetchSelectedCategoryData = (query) => {
    setLoading(true);
    console.log("QUERY", query);
    if (query !== "New") {
      fetchDataFromAPI(query).then((data) => {
        console.log(data);
        setSearchResults(data);
        setLoading(false);
      });
    } else {
      fetchDataFromAPI().then((data) => {
        setSearchResults(data);
        setLoading(false);
      });
    }
  };

  return (
    <Context.Provider
      value={{
        loading,
        setLoading,
        searchResults,
        selectedCategory,
        setSelectedCategory,
        mobileMenu,
        setMobileMenu,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
