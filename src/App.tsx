import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup/LoginSignup";

function App() {
  const route = createBrowserRouter([{ path: "/", element: <LoginSignup /> }]);
  return <RouterProvider router={route} />;
}

export default App;
