import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";
import { getUserDataList } from "./database";

const App = () => {
  const [userDataList, setUserDataList] = useState(getUserDataList());
  const [editingUser, setEditingUser] = useState(null);
  //
  const saveToDatabase = (data) => {
    const existingUserIndex = userDataList.findIndex(
      (user) => user.id === data.id
    );

    if (existingUserIndex !== -1) {
      setUserDataList((prevData) => {
        const newData = [...prevData];
        newData[existingUserIndex] = data;
        return newData;
      });
    } else {
      setUserDataList((prevData) => [data, ...prevData]);
    }

    // Clear
    setEditingUser(null);
  };

  const handleEdit = (userData) => {
    // Set the editingUser
    setEditingUser(userData);
  };
  //
  const handleDelete = (userId) => {
    // Filter out the user used userId
    setUserDataList((prevData) =>
      prevData.filter((user) => user.id !== userId)
    );

    // Clear after deleting
    setEditingUser(null);
  };

  return (
    <div>
      <Form onSave={saveToDatabase} initialData={editingUser} />
      <h1 className=" text-center">All Saved User Data</h1>
      {userDataList.length > 0 ? (
        <div className="flex flex-wrap ">
          {userDataList.map((userData, index) => (
            <Display
              key={index}
              data={userData}
              editUser={handleEdit}
              deleteUser={handleDelete}
            />
          ))}
        </div>
      ) : (
        <h2>no user creating</h2>
      )}
    </div>
  );
};

export default App;
