import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LoginPage from "../Page/Login";

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext);

    if(user){
       return children
    }else{
        return <LoginPage></LoginPage>
    }
    
};

export default PrivetRoute;