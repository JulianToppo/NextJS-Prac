import React from "react";
import { details } from "../../utils/constants";
import Link from "next/link";
const developer = () => {
  return (
    <React.Fragment>
      {details.map((item) => {
        return (
          <li>
            <Link href={"/aboutus/" + item.id}>{item.name}</Link>
          </li>
        );
      })}
    </React.Fragment>
  );
};

export default developer;
