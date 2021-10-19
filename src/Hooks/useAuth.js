import { useContext } from "react"
import { UserContextAPI } from "../UserContext/UserContext"

const useAuth=()=>{
    return useContext(UserContextAPI)
}

export default useAuth;