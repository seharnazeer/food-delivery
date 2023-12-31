import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../../utils/monddb-wrapper.js"
import mongoose from "mongoose"
import User from "../../../../Models/User.js"
import bcrypt from "bcrypt"
 const authOptions = {
  // Configure one or more authentication providers
  secret:process.env.SECRET,
  adapter:MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
        name: "Credentials",
        id:'credentials',
        credentials: {
          username: { label: "email", type: "text"},
          password: { label: "password", type: "password" }
        },
        async authorize(credentials, req) {
          // Add logic here to look up the user from the credentials supplied
          const password=credentials.password;
          const email=credentials.email;
          mongoose.connect(process.env.MONGO_DB_URI);
          const user=await User.findOne({email})
          console.log(user)
          const passwordOk=user && bcrypt.compareSync(password,user.password);
          console.log(passwordOk)
          if(passwordOk){
            console.log("hey",user)
            return user;
          }else{
            console.log("null")
            return null;
          }
        }
      }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60 // 30 days
  }
}
export default authOptions;
const handler= NextAuth(authOptions)
export {handler as GET, handler as POST}
