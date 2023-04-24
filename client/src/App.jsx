import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo } from "./assets";
import { Home, CreatePost } from "./pages";
import ArticleSum from "./pages/ArticleSum";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-whit3e sm: px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
        {" "}
        {/* px是横向padding， py是纵向padding */}
        <Link to="/">
          <img src={logo} alt="logo" className="w-28 object-contain" />
        </Link>
        <div className="flex justify-end items-center space-x-12">
          <Link
            to="/article-summarize"
            className="font-inter font-medium text-white px-4 py-2 rounded-md "
            style={{
              background: "linear-gradient(to right, #FFDD00, #FBB034)",
            }}
          >
            Summarize Article
          </Link>

          <Link
            to="/create-post"
            className="font-inter font-medium text-white px-4 py-2 rounded-md"
            style={{
              background: "linear-gradient(to right, #2a2a72 0%, #009ffd 74%)",
            }}
          >
            Generate Image
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/article-summarize" element={<ArticleSum />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
