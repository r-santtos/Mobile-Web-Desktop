import React from 'react';
import '../Login/style.css';

function Register() {
    return (
      <section id="global" className="container">
          {/* CONTAINER ANIMATIONS */}
          <div className="container animation">
              <h2>Welcome</h2>
              <p>If you already have a registration, login here.</p>
              <a href="/">Sign in</a>
          </div>

          <div className="container login-screen">
              {/* CONTAINER FORMULÁRIO */ }
              <fieldset>
                  <form id="form" className="container">
                      <input type="text" name="name" id="name" placeholder="Name" required />

                      {/* INPUT EMAIL */}
                      <input type="email" name="email" id="email" placeholder="E-mail" required />

                      {/* INPUT SENHA */}
                      <input type="password" name="senha" id="senha" placeholder="Password" required />

                      {/*  INPUT SUBMIT */}
                      <input className="submit" type="submit" value="sign up" />
                  </form>
              </fieldset>

              {/* CONTAINNER BTNS REGISTRAR E RECUPERAR SENHA */}
              <div className="container btns">
                  <a href="/">Register</a>
                  <a href="/">Password</a>
              </div>
          </div>
      </section>
    );
}

export default Register;