
import { BrowserRouter as Router, Route, Switch ,Redirect} from "react-router-dom";
const PrivateRoute = ({component :Component,...rest}) =>{
    const isAuthenticated=false;
    return(
        <Route {...rest} render={props=>(
            isAuthenticated ?
                <Component {...props} /> :
                <Redirect to="/" />
        )} />
    )
}
export default PrivateRoute
