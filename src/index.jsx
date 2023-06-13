import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Page/Home";
import AddToDo from "./Page/AddToDo";
import DetailPage from "./Page/DetailPage";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add",
    element: <AddToDo />,
  },
  {
    path: "/detail/:date",
    element: <DetailPage />,
  },
]);

export const ThemeContext = React.createContext({
  dark: false,
});

export default function Index() {
  const [darkMode, setDarkMode] = React.useState(false);
  const changeTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider
      value={{
        dark: darkMode,
        changeTheme,
      }}
    >
      <main
        id={darkMode ? "dark" : ""}
        className="min-h-screen"
      >
        <RouterProvider router={router} />
      </main>
    </ThemeContext.Provider>
  );
}
