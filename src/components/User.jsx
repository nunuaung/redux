import React from "react";
import { FaPen, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteUser } from "../reducers/userSlice";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  const dispatch = useDispatch()

  const deleteHandler = (id)=>{
    dispatch(deleteUser({id}))
  }

  return (
    <>
      <tr className="border-b border-gray">
        <td className="p-3 text-sm">{user.id}</td>
        <td className="p-3 text-sm">{user.name}</td>
        <td className="p-3 text-sm">{user.email}</td>
        <td className="p-3 text-sm">{user.address}</td>
        <td className="p-3 flex justify-center">
          <Link to={`/edit/${user.id}`}><FaPen className="text-yellow mr-2 cursor-pointer"/></Link>
          <FaTrash
            className="text-red ml-2 cursor-pointer"
            onClick={()=>deleteHandler(user.id)}
          />
        </td>
      </tr>
    </>
  );
};

export default User;
