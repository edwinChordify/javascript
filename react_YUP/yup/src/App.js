
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
    email: yup.string().email().required("E-mail is required"),
    state:yup.string().required("please select state"),
    district:yup.string().required()

  })
  const states = ["kerala", "tamilnadu", "karnataka"]
  const district = {
    "kerala": ["thrissur", "palakkad", "kannur", "idukki"],
    "tamilnadu": ["test 1", "test 2", "test 3", "test 4"],
    "karnataka": ["sample 1", "sample 2", "sample 3", "sample 4"]

  }
  const [selectedState, setselectedState] = useState('')

  const { register, handleSubmit, watch,  formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema)
  })
  const statevalue=watch('state')
  return (
    <div>
      <form className="forr" onSubmit={handleSubmit((data) => {
       console.log(data);
       reset()
        
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
          <div>
            select cities:
            <select {...register("state")} >
              <option value={''}>select state</option>
              {
                states.map(state => {
                  return <option >{state}</option>
                })
              }
            </select>
            <p>{errors.state?.message}</p>
<br /><br />
            select district:
            { (
              <select {...register("district")}>
                <option value={''}>select district</option>
                {
                 statevalue && district[statevalue].map(city => (
                    <option>{city}</option>

                  ))
                }

              </select>) }
              <p>{errors.district?.message}</p>
          </div>
          <button className="but">SUBMIT</button>,
        </div>
      </form >
    </div>


  );
}

export default App;
