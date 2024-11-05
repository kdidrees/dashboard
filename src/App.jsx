import { useState, useEffect } from "react";
import Datatable from "./components/Datatable";
import { useDispatch } from "react-redux";
import { fetchAllContactsAsync } from "./redux/reducers/contactSlice";
import Sidebar from "./components/Layout/Sidebar";
import { Routes, Route } from "react-router-dom";
import Index from "./components/Layout";
import Contact from "./pages/contact.jsx";
import Demo from "./pages/demo.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" exact element={<Index />}>
        <Route path="contacts" element={<Contact />} />
        <Route path="demos" element={<Demo />} />
      </Route>
    </Routes>
  );
}

export default App;
