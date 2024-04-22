import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AuthPage = React.lazy(() => import("./pages/AuthPage/AuthPage"));
const HomePage = React.lazy(() => import("./pages/HomePage/HomePage"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/auth" element={<AuthPage />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
