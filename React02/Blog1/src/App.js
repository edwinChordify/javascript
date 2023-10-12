import logo from './logo.svg';
import './App.css';
import { useState } from "react";
import { useForm } from 'react-hook-form'




function App() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm()
  console.log("testing")
  console.log(register("firstName", { required: "this is required" }))
  return (
    <div>
      <form className="forr" onSubmit={handleSubmit((data) => {
        console.log(data);
      })} >
        <div className="colo">
          <div>
            <span>First Name<input type="text" {...register("firstName", { required: "this is required" })} />
              <p>{errors.firstName?.message}</p> <br />
            </span>
          </div>
          <div>
            <span>Last Name<input type="text" {...register("lastName", { required: "this is required" })} />
              <p>{errors.lastName?.message}</p><br />
            </span>
          </div>
          <div>
            <span> Age<input type="text" name="age" {...register("age", {
              required: "this is required",maxLength:{
                value:2,
                message:"min length is 2"
              }}
            )} />
              <p>{errors.age?.message}</p><br />
            </span>
          </div>
          <div>
            <span>Email<input type="text" {...register("email", { required: "this is required" })} />
              <p>{errors.email?.message}</p><br />
              <br />
            </span>
          </div>
          <button className="but">SUBMIT</button>,
        </div>
      </form >
    </div>


  );
}

export default App;
