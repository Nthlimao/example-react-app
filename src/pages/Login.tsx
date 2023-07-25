import React, { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../contexts/app";
import { useAuthContext } from "../contexts/auth";
import { Roles } from "../types/User";

const LoginPage = (): ReactElement => {
  const navigate  = useNavigate();
  
  const { dispatch: dispatchApp, actions: actionsApp } = useAppContext();
  const { dispatch: dispatchAuth, actions: actionsAuth } = useAuthContext();

  const { setLoading } = actionsApp;
  const { setUser, setToken } = actionsAuth;

  const [login, setLogin] = useState({
    email: undefined,
    password: undefined,
  });

  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setLogin((login) => {
      return {
        ...login,
        [id]: value,
      };
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatchApp(setLoading(true));

    // SIMULAÇÃO DE CHAMADA AO SERVIDOR
    setTimeout(() => {
      dispatchApp(setLoading(false));
    }, 3000);

    // ADICIONAR AO STATE OS VALORES QUE RETORNAM DO SERVIDOR
    const response = {
      data: {
        user: {
          firstName: "Usuário",
          lastName: "Admin",
          email: login?.email || "admin@email.com",
          username: "admin",
          role: Roles.admin,
        },
        token: "dG9rZW4gZGUgdGVzdGUgcGFyYSB0ZXN0ZQ==",
      },
    };

    dispatchAuth(setUser(response.data.user));
    dispatchAuth(setToken(response.data.token));

    navigate("/");
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>E-mail</label>
          <input type="email" id="email" onChange={handleChange} />
        </div>
        <div>
          <label>Senha</label>
          <input type="password" id="password" onChange={handleChange} />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default LoginPage;
