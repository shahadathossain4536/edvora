import React, { useEffect, useState } from "react";

const Users = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h1 className="text-center m-6 text-2xl font-extrabold">Users</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>user_id</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users.map((user) => (
              <tr key={user.user_id}>
                <th>{user.user_id}</th>
                <td>{user.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
