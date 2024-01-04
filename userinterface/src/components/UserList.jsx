import { useState } from "react";
import UserProvider from "./UserProvider";

export default function UserList() {
    const [user_data , setUser_data] = useState([]);

  return (
    <div>
         <div className="displayData">
        <UserProvider/>
      </div>
    </div>
  )
}
