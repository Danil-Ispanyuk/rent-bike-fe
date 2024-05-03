import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import { MainLayout } from "@/layouts";

import { ROUTES } from "@/constants";

import { Dashboard } from "../Dashboard/Dashboard";

const { DASHBOARD } = ROUTES;

export const MainRoutes: FC = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path={DASHBOARD} element={<Dashboard />} />
      </Routes>
    </MainLayout>
  );
};
