import React, { ReactElement } from "react";
import { useNavigate } from "react-router-dom";

import { useAuthContext } from "../contexts/auth";

const IndexPage = (): ReactElement => {
  const navigate = useNavigate();
  const { state, actions, dispatch } = useAuthContext();

  const { user, token } = state;
  const { logout } = actions;

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div>
      <div>
        <h3>Usuário</h3>
        <p>
          <b>Nome:</b> {user?.firstName}
        </p>
        <p>
          <b>Sobrenome:</b> {user?.lastName}
        </p>
        <p>
          <b>E-mail:</b> {user?.email}
        </p>
        <p>
          <b>Username:</b> {user?.username}
        </p>
        <p>
          <b>Role:</b> {user?.role}
        </p>
        <p>
          <b>Token:</b> {token}
        </p>
      </div>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default IndexPage;
