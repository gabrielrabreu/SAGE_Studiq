import React from "react";

import { PageLayout } from "../layouts/PageLayout";
import { Login } from "../../components/Auth/Login";

const _LoginPage: React.FC = () => {
  return (
    <PageLayout>
      <Login />
    </PageLayout>
  );
};

const LoginPage = React.memo(_LoginPage);

export default LoginPage;
