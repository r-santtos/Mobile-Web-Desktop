import React from 'react';
import './style.css';

function Login() {
    return (
      <section id="global" className="container">
          {/* CONTAINER ANIMATIONS */}
          <div className="container animation">
              <h2>Welcome</h2>
              <p>If you have not yet registered, do so now.</p>
              <a href="/register">Sign up</a>
          </div>

          <div className="container login-screen">
              {/* CONTAINER FORMULÁRIO */ }
              <fieldset>
                  <form id="form" className="container">
                      <input type="email" name="email" id="email" placeholder="E-mail" required />

                      {/* INPUT SENHA */}
                      <input type="password" name="senha" id="senha" placeholder="Password" required />

                      {/*  INPUT SUBMIT */}
                      <input className="submit" type="submit" value="Sign in" />
                  </form>
              </fieldset>

              {/* CONTAINNER BTNS REGISTRAR E RECUPERAR SENHA */}
              <div className="container btns">
                  <a href="/register">Register</a>
                  <a href="/register">Password</a>
              </div>
          </div>
      </section>
    );
}

export default Login;