import React, { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import authReducer from "@/components/Auth/Auth.reducers";
import type { RootState } from "@/store/store";

export const renderWithProvider = (ui: React.ReactElement, preloadedState?: RootState) => {
  const store = configureStore({
    reducer: {
      authReducer,
    },
    preloadedState,
  });

  const Wrapper = ({ children }: PropsWithChildren) => <Provider store={store}>{children}</Provider>;

  return {
    store,
    ...cy.mount(<Wrapper>{ui}</Wrapper>),
  };
};
