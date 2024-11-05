import React from "react";
import "tailwindcss/tailwind.css";
import { useDispatch, useSelector } from "react-redux";

const Datatable = ({ headings, data, pageName }) => {
  console.log(headings, "headings.");
  console.log(data, "data.");

  return (
    <div className="antialiased sans-serif  h-screen">
      <div className="container mx-auto py-2 px-4">
        <h1 className="text-3xl py-4 border-b mb-6 text-left">{pageName}</h1>

        <div
          className="overflow-x-auto bg-white rounded-lg   overflow-y-auto relative"
          style={{ height: "80vh" }}
        >
          <table className="border-collapse table-auto w-full  whitespace-no-wrap bg-white table-striped relative">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-3 sticky top-0 border-b border-gray-200 bg-blue-100">
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
                    className="bg-blue-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
                  >
                    {heading.value}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data &&
                data?.map((contact) => (
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

                    {headings.map((heading) => (
                      <td
                        key={heading.key}
                        className="border-dashed border-t border-gray-200 phoneNumber"
                      >
                        <span className="text-gray-700 px-6 py-3 flex items-center">
                          {contact[heading.key]}
                        </span>
                      </td>
                    ))}
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
