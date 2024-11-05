import { useState, useEffect } from "react";
import Datatable from "./components/Datatable";
import { useDispatch } from "react-redux";
import { fetchAllContactsAsync } from "./redux/reducers/contactSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContactsAsync());
  }, []);

  return (
    <>
      <Datatable />
    </>
  );
}

export default App;
