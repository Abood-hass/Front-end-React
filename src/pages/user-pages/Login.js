import React, {useState} from 'react';
import { Formik, Form } from 'formik';
import { TextField } from '../../components/TextField';
import { useNavigate } from "react-router-dom";
import LoginRoute from "../../routes/routesCaller";

export const Login = () => {
    let navigate = useNavigate();

    let [ID, setID] = useState();
    let [Email, setEmail] = useState("");
    let [Password, setPassword] = useState("");
    let [LoginPass, setLoginPass] = useState(true);

    console.log(LoginRoute)
    function submitHandler (){
        const data = {
            ID,
            Email,
            Password
        }

        let validate = (ID === "123456789" &&
            Email === "abood@gmail.com" &&
            Password === "abood213");

        if(validate) {
            navigate("/Dashboard",
                {
                    state:data
                });

        }else{
            setLoginPass(false)
        }
        console.log(ID,
        Email,
        Password,)
    }

    return (
    <Formik>
        <div className="mainDiv">
          <h1 className="my-4 font-weight-bold .display-4">Login Page</h1>
          <Form  onSubmit={(e, values) => {
              e.preventDefault();

          }}>
              {!LoginPass? (
                      <div  className="alert alert-danger alert" role="alert">
                         Be Sure You having Account
                      </div>):(null)}
            <TextField value = {ID} onChange={(e) => setID(e.target.value)} label="Id" name="ID" type="text" inputMode="numeric"/>
            <TextField value = {Email} onChange={(e) => setEmail(e.target.value)} label="Email" name="email" type="email" />
            <TextField value = {Password} onChange={(e) => setPassword(e.target.value)} label="Password" name="password" type="password" />
            <button type={"submit"} className="btn btn-dark mt-3" onClick={() => submitHandler()}>Enter</button>
          </Form >
        </div>
    </Formik>
  )
}
