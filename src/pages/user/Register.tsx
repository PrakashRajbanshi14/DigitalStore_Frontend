import { useAppDispatch, useAppSelecter } from "../../store/hooks"
import { setAge, setName } from "../../store/userSlice";


function Register(){
    const data = useAppSelecter((store)=> store.user)
    console.log(data);
    const dispatch = useAppDispatch()
    dispatch(setName("Suraj"))
    dispatch(setAge(100))
    
    // insertion garne or update grny, post, put, patch etc -> useDispatch()
    // select data or equivalent to get Request (select * from Tablename)
    return(
        <h1>Register Page</h1>
    )
}

export default Register