import React, { ReactElement } from "react";
import { BrowserRouter, Routes as ReactRoutes, Route } from "react-router-dom";

import IndexPage from "../pages/Index";
import LoginPage from "../pages/Login";
import { ProtectedRoute } from "./protected";

const Routes = (): ReactElement => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <IndexPage />
            </ProtectedRoute>
          }
        />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
