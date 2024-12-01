import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user ,index}) => (
  <div className="border rounded p-4 shadow">
    <h2 className="font-bold text-blue-500">{index+1}. {user.name}</h2>
    <p>Email: {user.email}</p>
    <p>Phone: {user.phone}</p>
    <p>Company: {user.company.name}</p>
    <Link
      to={`/users/${user.id}`}
      className="text-blue-500 hover:underline mt-2 block"
    >
      View Details
    </Link>
  </div>
);

export default UserCard;
