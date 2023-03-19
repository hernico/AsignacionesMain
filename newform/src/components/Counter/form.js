import React, {useState} from 'React';
import App from '../../App';

const Form = props => {
    const [state,setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",

    });

const Onchange = (event) => {
    setState({
    ...state,
    [event.target.name]: event.target.value

});

return(
<div>
<label onChange={Onchange} htmlFor="Last Name">First Name </label>
<input  type="text" name="firstName" />
<br />
<label htmlFor="Last Name">Last Name</label>
<input  type="text" name="lastName" />
<br />
<label htmlFor="Email">Email </label>
<input  type="text" name="email" />
<br />
<label htmlFor="Password">Password </label>
<input  type="text" name="password" />
<br />
<label htmlFor="Confirm Password">Confirm Password </label>
<input  type="text" name="confirmPassword" />
</div>
)
}}


export default Form;