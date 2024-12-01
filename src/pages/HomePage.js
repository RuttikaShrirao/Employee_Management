import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../features/users/userSlice";
import UserCard from "../components/UserCard";

const HomePage = () => {
  const dispatch = useDispatch();
  const { users, status } = useSelector((state) => state.users);
  const [userList, setUserList]  = useState(users)

  
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  
  useEffect(() => {
    setUserList(users);
  }, [users]);
console.log(userList,"=====userList====")
const searchHandler=(e)=>{
const emp_list= userList.filter((item)=>{
  item.name.toLowerCase().includes(e.target.value.toLowerCase())
}
)
setUserList(emp_list)
console.log(emp_list,"===emp_list====",users)

}

  return (
    <div className="p-4">
    <input className="m-4 px-2 border-2 " type="text" placeholder="Search" onChange={(e)=>searchHandler(e)}/>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>Failed to load users.</p>}
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {userList.map((user,i) => (
          <UserCard key={user.id} user={user} index={i} />
        ))}
        {/* {userList} */}
      </div>
    </div>
  );
};

export default HomePage;
