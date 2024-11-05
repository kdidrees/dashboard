import React, { useEffect } from "react";
import Datatable from "../components/Datatable";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllDemosAsync } from "../redux/reducers/contactSlice";

export default function Demo() {
  const { demos } = useSelector((state) => state.contact?.data) || [];
  const dispatch = useDispatch();

  const headings =
    [
      { key: "firstName", value: "First Name" },
      { key: "lastName", value: "Last Name" },
      { key: "companyName", value: "Company Name" },
      { key: "email", value: "email" },
      { key: "numOfTeam", value: "Number Of Team" },
      { key: "businessType", value: "Business Type" },
      { key: "message", value: "Message" },
    ] || [];

  useEffect(() => {
    dispatch(fetchAllDemosAsync());
  }, []);
  return (
    <>
      <Datatable headings={headings} data={demos} pageName="Demos" />
    </>
  );
}
