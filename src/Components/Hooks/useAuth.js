import { useContext } from "react";
import { IndexContext } from "../ContextAPi/IndexContext";


const useAuth=()=>{
   return useContext(IndexContext);

}

export default useAuth;