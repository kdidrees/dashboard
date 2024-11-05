import React from "react";
import "tailwindcss/tailwind.css";
import { useDispatch, useSelector } from "react-redux";

const Datatable = () => {
  const { contacts } = useSelector((state) => state.contact.contacts);

  console.log(contacts, "contacts.");

  const headings = [
    { key: contacts.firstName, value: "First Name" },
    { key: "lastName", value: "Last Name" },
    { key: "emailAddress", value: "Email Address" },
    { key: "phoneNumber", value: "Phone Number" },
    { key: "service", value: "Service" },
    { key: "message", value: "Message" },
  ];

  return (
    <div className="antialiased sans-serif bg-gray-200 h-screen">
      <div className="container mx-auto py-2 px-4">
        <h1 className="text-3xl py-4 border-b mb-6 text-left">Dashboard</h1>

        {/* <div className="mb-4 flex justify-between items-center">
          <div className="flex-1 pr-4">
            <div className="relative md:w-1/3">
              <input
                type="search"
                className="w-full pl-10 pr-4 py-2 rounded-lg shadow focus:outline-none focus:shadow-outline text-gray-600 font-medium"
                placeholder="Search..."
              />
              <div className="absolute top-0 left-0 inline-flex items-center p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="0" y="0" width="24" height="24" stroke="none"></rect>
                  <circle cx="10" cy="10" r="7" />
                  <line x1="21" y1="21" x2="15" y2="15" />
                </svg>
              </div>
            </div>
          </div>
        </div> */}

        <div
          className="overflow-x-auto bg-white rounded-lg  shadow overflow-y-auto relative"
          style={{ height: "405px" }}
        >
          <table className="border-collapse table-auto w-full  whitespace-no-wrap bg-white table-striped relative">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-gray-100">
                  <label className="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox focus:outline-none focus:shadow-outline"
                    />
                  </label>
                </th>
                {headings.map((heading) => (
                  <th
                    key={heading.key}
                    className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
                  >
                    {heading.value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <td className="border-dashed border-t border-gray-200 px-3">
                    <label className="text-teal-500 inline-flex justify-between items-center hover:bg-gray-200 px-2 py-2 rounded-lg cursor-pointer">
                      <input
                        type="checkbox"
                        className="form-checkbox rowCheckbox focus:outline-none focus:shadow-outline"
                        name={contact._id}
                      />
                    </label>
                  </td>

                  <td className="border-dashed border-t border-gray-200 firstName">
                    <span className="text-gray-700 px-6 py-3 flex items-center">
                      {contact.firstName}
                    </span>
                  </td>
                  <td className="border-dashed border-t border-gray-200 lastName">
                    <span className="text-gray-700 px-6 py-3 flex items-center">
                      {contact.lastName}
                    </span>
                  </td>
                  <td className="border-dashed border-t border-gray-200 emailAddress">
                    <span className="text-gray-700 px-6 py-3 flex items-center">
                      {contact.email}
                    </span>
                  </td>

                  <td className="border-dashed border-t border-gray-200 phoneNumber">
                    <span className="text-gray-700 px-6 py-3 flex items-center">
                      {contact.phone}
                    </span>
                  </td>
                  <td className="border-dashed border-t border-gray-200 phoneNumber">
                    <span className="text-gray-700 px-6 py-3 flex items-center">
                      {contact.service}
                    </span>
                  </td>
                  <td className="border-dashed border-t border-gray-200 phoneNumber">
                    <span className="text-gray-700 px-6 py-3 flex items-center">
                      {contact.message}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Datatable;
