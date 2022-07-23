
import useAuth from './useAuth';
import axios from 'axios';

const useRefreshToken = () => {
    const {setAuth}=useAuth();

    const refresh = async ()=>{
        // const response=await axios.post('https://api.yatharup.com/token/refresh/',{refresh:localStorage.getItem("refresh")}).then(

        // )
        console.log(localStorage.getItem("token"))
        axios({

            url: "https://api.yatharup.com/accounts/token/refresh/",
            method: 'POST',
      
            data:{refresh:localStorage.getItem("refresh")},
            
          }).then(res => {
            setAuth(prev=>{
                console.log("OLD" , JSON.stringify(prev.access))
                console.log( "new",res.data.access)
                return {...prev,access:res.data.access}
    
            });
           
          }).catch(err => {
      console.log(err.response.data)
          })
      
        
       
       

        // return response.data.access
    }
  return refresh;
}

export default useRefreshToken;