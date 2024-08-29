// import { useReducer, createContext, useEffect } from "react";

// // Initial state for the auth context
// const initialState = {
//   // user: localStorage.getItem('user') undefined ? JSON.parse(localStorage.getItem('user')) : null,
//   user: localStorage.getItem('user') !== undefined ? JSON.parse(localStorage.getItem('user')) : null,

//   role: localStorage.getItem('role') || null,

//   token: localStorage.getItem('token') || null,
// };

// // Create the context
// export const authContext = createContext(initialState);

// // Define the reducer function to handle state changes
// const authReducer = (state, action) => {
//   switch (action.type) {
//     case "LOGIN_START":
//       return {
        
//         user: null,
//         role: null,
//         token: null,
//       };

//     case "LOGIN_SUCCESS":
//       return {
        
//         user: action.payload.user,
//         token: action.payload.token,
//         role: action.payload.role,
//       };

//     case "LOGOUT":
//       return {
        
//         user: null,
//         token: null,
//         role: null,
//       };

//     default:
//       return state;
//   }
// };

// // Create the AuthContextProvider component
// export const AuthContextProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, initialState);

//   useEffect(() =>{
//     localStorage.setItem("user", JSON.stringify(state.user));
//     localStorage.setItem("token", state.token);
//     localStorage.setItem("role", state.role);
//   },[state] );

//   return (
//     <authContext.Provider
//       value={{
//         user: state.user,
//         token: state.token,
//         role: state.role,
//         dispatch,
//       }}
//     >
//       {children}
//     </authContext.Provider>
//   );
// };







import { useReducer, createContext, useEffect, useContext } from "react";

// Initial state for the auth context
// const initialState = {
//   user: localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : null,
//   role: localStorage.getItem('role') || null,
//   token: localStorage.getItem('token') || null,
// };



const initialState = {
  user: (() => {
    const storedUser = localStorage.getItem('user');
    return storedUser && storedUser !== "undefined" ? JSON.parse(storedUser) : null;
  })(),
  role: localStorage.getItem('role') || null,
  token: localStorage.getItem('token') || null,
};


// Create the context
export const authContext = createContext(initialState);

// Define the reducer function to handle state changes
const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        role: null,
        token: null,
      };

    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };

    case "LOGOUT":
      return {
        user: null,
        token: null,
        role: null,
      };

    default:
      return state;
  }
};

// Create the AuthContextProvider component
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
    localStorage.setItem("token", state.token);
    localStorage.setItem("role", state.role);
  }, [state]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};


