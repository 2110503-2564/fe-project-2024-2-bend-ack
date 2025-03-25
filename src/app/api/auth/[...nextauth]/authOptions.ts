import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userLogin from "@/libs/userLogin";
import getUserProfile from "@/libs/getUserProfile";

export const authOptions:AuthOptions ={
    providers:[
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: { label: "Email", type: "email", placeholder: "email" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          if(!credentials) return null;
          const res=await userLogin(credentials.email,credentials.password);
          if(res){
            console.log("res ",res);
            const token=res.token;
            console.log("token ",token);
            const userprof=await getUserProfile(token);
            if(userprof){
              const user=userprof.data;
              console.log("user ",user);
              return user
            }

          } 
          return null
        }
      })],
      pages: {
        signIn: "/auth/login"
    },
    session:{strategy:'jwt'},
    callbacks:{
      async jwt({token,user}){
        // console.log("jwt:",{...token},{...user});
        if(user) return {...token, ...user}
        return {...token}
      },
      async session({ session, token ,user}) {
          // console.log(session);
          session.user.token=token as any
          return session;
        }
    }

}