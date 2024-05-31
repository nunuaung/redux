import React from "react";
import { useDispatch, useSelector } from "react-redux";
import User from "../components/User";
import Nav from "../components/Nav";

const Home = () => {
  const users = useSelector((state) => state.users);

  return (
    <div className="overflow-auto">
      <table className="w-full shadow-md min-w-[700px]">
        <thead className="border-b border-gray">
          <tr>
            <th className="p-3">Id</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Address</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <User user={user} key={user.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
