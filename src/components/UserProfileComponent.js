import React, { useContext } from "react";
import { UserContext } from "./UserContext";

// This simple app display some variable from the React context
const UserProfileComponent = () => {
  const user = useContext(UserContext);

  return (
    <div className="ctxVars">
        userId = {user.userId} <br/>
        token = {user.token}
    </div>
  );
};

export default UserProfileComponent;
