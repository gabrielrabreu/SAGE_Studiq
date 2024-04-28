import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import KnowledgePage from "./pages/KnowledgePage/KnowledgePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout />}>
      <Route index element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/knowledge" element={<KnowledgePage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Route>
  )
);

export default router;
