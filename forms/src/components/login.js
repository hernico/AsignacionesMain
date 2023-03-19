import { useState } from "react";

const Login = props => { 



    return(
        <div>
Nombre :<input type="text" name="name" />
Apellido :<input type="text" name="lastName"/>
Email:       <input type="text" name="email"/>  
Pasword: <input type="text" name="password"/>
Confirm Password: <input type="text" name="confirmPassword"/>
</div>        

        )

}


export default Login;

