import React from "react";
import { useRouter } from "next/router";
import { details } from "../../utils/constants";
const Users = () => {


  const router = useRouter();
  const id = router.query.id;
  const user = details.filter((item) => {
    return item.id == id;
  });

  console.log(user)

  return <div>{user.length ? user[0].name+ " " +user[0].role : "Developer doesn't exits"}</div>;
};

export default Users;
