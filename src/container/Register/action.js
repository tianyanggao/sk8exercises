import axios from 'axios';


export  function SignUpActions(username, email, password){

  const data={
    Username:username,
    Email:email,
    Password:password
  }
    // const email = this.props.email
    // const password = this.props.password
  return(dispatch)=>{
    return axios.post("https://jsonplaceholder.typicode.com/posts", data
      // username: username,

    )
    .then((response)=>{
      console.log('register successfully!!')
      console.log(response.data);

    }).catch((error)=>{
      console.log(error)

    })
  };

}


export function addUsername(fullname){
 return{
   type:'ADD_USERNAME',
   payload:fullname,
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
