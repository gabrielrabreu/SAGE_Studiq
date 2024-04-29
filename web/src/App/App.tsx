import { useEffect } from "react";
import { ConnectedProps, connect } from "react-redux";

import { logout } from "@/components/Auth/Auth.reducers";
import { loadUser } from "@/components/Auth/Auth.thunks";
import { Router } from "@/routes";
import { RootState } from "@/store/store";
import { Loading } from "@/components/Loading/Loading";

const mapStateToProps = (state: RootState) => ({
  isLoading: state.authReducer.loading,
});

const mapDispatchToProps = {
  loadUser,
  logout,
};
const connector = connect(mapStateToProps, mapDispatchToProps);

interface Props extends ConnectedProps<typeof connector> {}

const _App: React.FC<Props> = ({ loadUser, logout, isLoading }) => {
  useEffect(() => {
    if (localStorage.user) {
      loadUser();
    }

    window.addEventListener("storage", () => {
      if (!localStorage.user) logout();
    });
  }, [loadUser, logout]);

  if (isLoading) {
    return <Loading />;
  }

  return <Router />;
};

const App = connector(_App);

export default App;
