import axios from 'axios';


export function LoginActions(email, password){

 return (dispatch)=>{
   return axios.get("https://nepal.sk8tech.io/wp-json/jwt-auth/v1/token/",{
     username:email,
     password: password,
   })
   .then((response)=>{
     console.log(response)
   })
   .catch(error =>{
     console.log(error)
   })
 }
}


export function addEmail(email){
 return {
    type:'ADD_EMAIL',
    payload:email
 }
}

export function addPassword(password){
 return{
   type:'ADD_PASSWORD',
   payload:password,
 }
}
