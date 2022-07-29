import React from "react";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Register = () => {

    const [
        createUserWithEmailAndPassword,
        user,
      ] = useCreateUserWithEmailAndPassword(auth);


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [updateProfile] = useUpdateProfile(auth);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";


  const onSubmit = async(data, event) => {
    console.log(data)
    await createUserWithEmailAndPassword(data.email, data.password, data.passwordConfirm);
    await updateProfile({displayName: data.name});


    event.target.reset();
  };

  if(user){
    navigate(from, { replace: true });
  }


  return (
    <div>
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
              <div className="card-body">
              <h2 className="text-center font-medium mb-4">Registration Form</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "Name is Required",
                    },
                  })}
                />
                <label className="label">
                  {errors.name?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.name.message}
                    </span>
                  )}
                </label>
              </div>

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

              <div className="form-control w-full max-w-xs">
                <input
                  type="password"
                  placeholder="Your Confirm Password"
                  className="input input-bordered input-primary w-full max-w-xs"
                  {...register("passwordConfirm", {
                    required: {
                      value: true,
                      message: "Confirm Password is Required",
                    },
                    minLength: {
                      value: 8,
                      message: "Must be 8 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.passwordConfirm?.type === "required" && (
                    <span className="label-text-alt text-error">
                      {errors.passwordConfirm.message}
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
                value="Create Account"
              />
                </form>
                <p>
              <small>
                Allready have an account?{" "}
                <Link className="text-error" to="/login">
                  Please Login
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

export default Register;
