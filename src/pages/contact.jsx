import React, { useEffect } from "react";
import Datatable from "../components/Datatable";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllContactsAsync } from "../redux/reducers/contactSlice";

export default function Contact() {
  const { contacts } = useSelector((state) => state.contact?.data) || [];
  const dispatch = useDispatch();

  const headings =[
      { key: "firstName", value: "First Name" },
      { key: "lastName", value: "Last Name" },
      { key: "email", value: "Email Address" },
      { key: "phone", value: "Phone Number" },
      { key: "service", value: "Service" },
      { key: "message", value: "Message" },
    ] || [];

  useEffect(() => {
    dispatch(fetchAllContactsAsync());
  }, []);
  return (
    <>
      <Datatable headings={headings} data={contacts} pageName="Contacts" />
    </>
  );
}
