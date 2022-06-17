

export default  function authHeader(){
    console.log("authhhh")
    const user=localStorage.getItem("token");
    console.log(user)
    if(user){
      
        return {Authorization:`Bearer ${user}`}
    }
    else{
        return{}
    }
 
}
