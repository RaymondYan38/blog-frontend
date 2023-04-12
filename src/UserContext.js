const { createContext, useState } = require("react");

export const UserContext = createContext({});
// Subsribers of this context, get value attribute of the Provider
// below. This Provider is the most outer-layer of the App.js
// Component's tree so any subscriber within it can access the values:
// userInfo and setUserInfo.

export function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  return (
    <UserContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
}
