import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Root from "./components/Root/Root";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route element={<Layout />}>
        <Route index element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<HomePage />} />
      </Route>
      <Route path="/auth/login" element={<LoginPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
