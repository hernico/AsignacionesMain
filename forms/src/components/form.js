

// const [state,setState]
//  = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",

//  })

const Form = props => {
    const {inputs,setInputs} = props;

    const onChange = (event) =>{
        setInputs({
...inputs,
[event.target.name]: event.target.value

        })
};

return(
<div>
<label htmlFor="First Name">First Name Nicol</label> 
<input onChange={onChange} type="text" name="firstName" />

<label htmlFor="Last Name"></label>
<input onChange={onChange} type="text" name="lastName" />

<label htmlFor="Email"></label>
<input onChange={onChange} type="text" name="email" />

<label htmlFor="Password"></label>
<input onChange={onChange} type="text" name="password" />

<label htmlFor="Confirm Password"></label>
<input type="text" name="confirmPassword" />

</div>
)
}



