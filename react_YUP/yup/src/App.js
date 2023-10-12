
import './App.css';
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form"
import { useState } from 'react';









function App() {
  const schema = yup.object().shape({
    firstName: yup.string().required("first name is required"),
    LasttName: yup.string().required("Last Name is required"),
    age: yup.string().max(2).required("Age is required"),
    email: yup.string().email().required("E-mail is required")
  })
  const states = ["kerala", "tamilnadu", "karnataka"]
  const district = {
    "kerala": ["a", "b", "c", "d"],
    "tamilnadu": ["e", "f", "g", "h"],
    "karnataka": ["i", "j", "k", "l"]

  }
  const [selectedState, setselectedState] = useState('')

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })
  return (
    <div>
      {console.log(selectedState)}
      <div>
        select cities:
        <select onChange={(e) => { setselectedState(e.target.value) }}>
          {
            states.map(state => {
              return <option>{state}</option>
            })
          }
        </select><br />


        select district:

        {selectedState ? (
          <select>
            {
              district[selectedState].map(city => (
                <option>{city}</option>

              ))
            }

          </select>) : ''}
      </div>
      
      <form className="forr" onSubmit={handleSubmit((data) => {
        console.log(data);

      })} >
        <div className="colo">
          <div>
            <span>First Name<input type="text"{...register("firstName")} />
            </span>
            <p>{errors.firstName?.message}</p>
          </div>
          <div>
            <span>Last Name<input type="text"{...register("LasttName")} />
            </span>
            <p>{errors.LasttName?.message}</p>

          </div>
          <div>
            <span> Age<input type="text" name="age"{...register("age")} />

            </span>
            <p>{errors.age?.message}</p>

          </div>
          <div>
            <span>Email<input type="text" {...register("email")} />

              <br />
            </span>
            <p>{errors.email?.message}</p>

          </div>
          <button className="but">SUBMIT</button>,
        </div>
      </form >
    </div>


  );
}

export default App;
