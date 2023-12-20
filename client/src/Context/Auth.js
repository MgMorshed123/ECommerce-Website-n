import { createContext, useContext, useEffect, useState } from "react";



  const AuthContext = createContext();


  const AuthProvider = ({ children}) => {


    const [auth, setAuth] = useState({
        user : null,
        token : "",
    })

     
    useEffect(() => {
      const data = localStorage.getItem("auth");
  
      if (data) {
        const parsedData = JSON.parse(data);
        setAuth({
          ...auth,
          user: parsedData.user,
          token: parsedData.token,
        });
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); // Empty dependency array since there are no external dependencies
  

    
    return (
        <AuthContext.Provider value={{auth,setAuth}}>
                 {children}
        </AuthContext.Provider>
    )
  }


//   custom hook
const useAuth = () => useContext(AuthContext)
export { useAuth, AuthProvider};
