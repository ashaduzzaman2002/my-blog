import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main class="form-signin w-100 m-auto container mt-5">
      <form className="mx-auto" style={{ maxWidth: 400 }}>
        <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

        <div class="form-floating ">
          <input
            type="text"
            class="form-control"
            id="name"
            placeholder="Name"
          />
          <label for="name">Name</label>
        </div>

        <div class="form-floating mt-3">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label for="floatingInput">Email address</label>
        </div>
        <div class="form-floating mt-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label for="floatingPassword">Password</label>
        </div>

        <button class="btn btn-primary w-100 py-2 mt-3" type="submit">
          Sign up
        </button>

        <Link to='/login' className="pt-3">Already register? Signin</Link>
      </form>
    </main>
  );
};

export default Register;
