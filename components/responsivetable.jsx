// components/ResponsiveTable.js
const ResponsiveTable = () => {
  const data = [
    { name: "John Doe", age: 28, email: "john@example.com" },
    { name: "Jane Doe", age: 25, email: "jane@example.com" },
    { name: "Sam Smith", age: 22, email: "sam@example.com" },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-50">
              Name
            </th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-50">
              Age
            </th>
            <th className="px-4 py-2 border-b border-gray-200 bg-gray-50">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border-b border-gray-200">
                {item.name}
              </td>
              <td className="px-4 py-2 border-b border-gray-200">{item.age}</td>
              <td className="px-4 py-2 border-b border-gray-200">
                {item.email}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResponsiveTable;
