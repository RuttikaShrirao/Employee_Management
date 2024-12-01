import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const UserDetailsPage = () => {
  const { users, status } = useSelector((state) => state.users);
  const { id } = useParams();
  const navigate = useNavigate();

  const user = users.filter(item=>item.id== id); 
console.log(user[0],"====",id)
  if (!user) {
    return <p>User not found</p>;
  }

  return (
    <div className="border rounded p-4 m-3 shadow">
      <button onClick={() => navigate(-1)} className="mb-4 text-blue-500">
        Go Back
      </button>
      <h2 className="font-bold text-blue-500 text-xl">{user[0].id}. {user[0].name}</h2>
      <p>Email: {user[0].email}</p>
      <p>Phone: {user[0].phone}</p>
      <p>Address: {user[0].address.street}, {user[0].address.city}</p>
    </div>
  );
};

export default UserDetailsPage;
