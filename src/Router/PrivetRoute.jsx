import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import LoginPage from "../Page/Login";
import LoadingPage from "../Page/LoadingPage";

const PrivetRoute = ({children}) => {
    const {user, loder} = useContext(AuthContext);

    if(user){
       return children
    }else if(loder){
        return <LoadingPage></LoadingPage>
    }
    else{
        return <LoginPage></LoginPage>
    }
    
};

export default PrivetRoute;