import React from "react";

import { PageLayout } from "../layouts/PageLayout";
import { Home } from "../../components/Home";

const _HomePage: React.FC = () => {
  return (
    <PageLayout>
      <Home />
    </PageLayout>
  );
};

const HomePage = React.memo(_HomePage);

export default HomePage;
