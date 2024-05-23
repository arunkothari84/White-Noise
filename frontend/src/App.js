import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import { AppContext } from "./context/contextApi";
import Upload from "./components/Upload";

const App = () => {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
          <div className="h-max bg-black">
            <Header />
          </div>
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/videos/:id" element={<VideoDetails />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  );
};

export default App;
