import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

import {logo} from "./assets";
import {Home, CreatePost} from "./pages";

const App = () => (
  <BrowserRouter>
    <header className="sm:px-8 px-4 xs:px-8 lg:px-0 py-8 w-full flex justify-between items-center bg-white border-b border-b-[#e6ebf4] max-w-7xl mx-auto">
      <Link to="/">
        <img src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link
        to="/create-post"
        className="font-montserrat font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
      >
        Create Post
      </Link>
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;

//checked
