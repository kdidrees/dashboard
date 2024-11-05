import React, { useEffect } from "react";
import Datatable from "../components/Datatable";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCompaniesAsync } from "../redux/reducers/contactSlice";

export default function Company() {
  const { companies } = useSelector((state) => state.contact?.data) || [];
  const dispatch = useDispatch();

  const headings =
    [
      { key: "companyName", value: "Company Name" },
      { key: "companySize", value: "Company Size" },
      { key: "companyWebsite", value: "Company Website" },
      { key: "industry", value: "Industry" },
      { key: "leadSource", value: "Lead Source" },
      { key: "salesTeamSize", value: "Sales Team Size" },
      { key: "country", value: "Country" },
    ] || [];

  useEffect(() => {
    dispatch(fetchAllCompaniesAsync());
  }, []);
  return (
    <>
      <Datatable headings={headings} data={companies} pageName="Companies" />
    </>
  );
}
