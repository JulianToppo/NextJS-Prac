import React from "react";
import { useRouter } from "next/router";

const Users = () => {
 const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },

    { id: 2, name: "Vaibhav", role: "Backend Developer" },

    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const router = useRouter();
  const id = router.query.id;
  const user = details.filter((item) => {
    return item.id == id;
  });

  console.log(user)

  return <div>{user.length ? user[0].name+ " " +user[0].role : "Developer doesn't exits"}</div>;
};

export default Users;
