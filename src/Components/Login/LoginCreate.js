import React from "react";
import Input from "../Forms/Input";

const LoginCreate = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <section className="anime-left">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}></form>
    </section>
  );
};

export default LoginCreate;
