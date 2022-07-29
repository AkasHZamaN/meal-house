import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Login = () => {

    const [
        signInWithEmailAndPassword,
        user,
      ] = useSignInWithEmailAndPassword(auth);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true})
  }

  const onSubmit = async(data, event) => {
    console.log(data)
    await signInWithEmailAndPassword(data.email, data.password);

    event.target.reset()
  };


  return (
    <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
              <div className="card-body">
              <h2 className="text-center font-medium mb-4">Welcome to Back!</h2>
              <form onSubmit={handleSubmit(onSubmit)}>

              <div className="form-control w-full max-w-xs">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
                
              <div className="form-control w-full max-w-xs">
                <input
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 8,
                      message: "Must be 8 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                className="btn w-full max-w-xs bg-gradient-to-r from-primary to-accent text-white border-0"
                type="submit"
                value="Login"
              />
                </form>
                <p>
              <small>
                Are you New?{" "}
                <Link className="text-error" to="/register">
                  Create account
                </Link>
              </small>
            </p>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Login;
