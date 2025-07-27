import { useSelector } from "react-redux";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ProtectedRoutes from "./component/ProtectedRoutes";
import { Contact, Home, Login, Profile, Signup } from "./pages";

function App() {
  const { user } = useSelector((store) => store.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoutes user={user}>
          <MainLayout />
        </ProtectedRoutes>
      ),
      children: [
        { index: true, element: <Home /> },
        { path: "/profile", element: <Profile /> },
        { path: "/contact", element: <Contact /> },
      ],
    },
    { path: "/login", element: user ? <Navigate to="/" /> : <Login /> },
    { path: "/signup", element: user ? <Navigate to="/" /> : <Signup /> },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
