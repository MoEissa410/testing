/* eslint-disable react/prop-types */

const Display = ({ data, editUser, deleteUser }) => {
  const handleEdit = () => {
    editUser(data);
  };
  //
  const handleDelete = () => {
    // Call the deleteUser function with the user's id
    deleteUser(data.id);
  };
  return (
    <div className="max-w-sm mx-auto mt-8 p-2 bg-white shadow-md rounded-md ">
      <h2 className="text-2xl font-bold mb-4">User Data</h2>
      {data ? (
        <div>
          <p className="mb-2">
            <span className="font-semibold">Name:</span> {data.name}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Sector:</span> {data.selectedSector}
          </p>
          <p className="mb-2">
            <span className="font-semibold">Agreed to terms:</span>{" "}
            {data.agreed ? "Yes" : "No"}
          </p>
          <div className="flex justify-between">
            <button
              className="hover:shadow-form bg-blue-500 text-white py-2 px-4 rounded-md text-sm font-semibold focus:outline-none"
              type="button"
              onClick={handleEdit}
            >
              Edit
            </button>
            <button
              className="hover:shadow-form bg-red-500 text-white py-2 px-4 rounded-md text-sm font-semibold focus:outline-none"
              type="button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Display;
