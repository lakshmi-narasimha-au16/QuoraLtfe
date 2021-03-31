import { baseUrl } from '../utils/urls'


const profile_url = baseUrl +'/auth/profile'


const AuthStatus = async()=>{
    const options={
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": baseUrl,
        },
        credentials:"include",
      };
      console.log(options)
    const data = await fetch(profile_url,options)
        .then((res)=>res.json())
        .then(data=>data)
        .catch(err=>err)
    return data
}


export default AuthStatus