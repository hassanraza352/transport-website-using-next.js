import connect from "@/utils/db";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";



export const authOptions:NextAuthOptions={
  providers:[
     CredentialsProvider({
       name: "Credentials",
       credentials: {
        email: {
          label: "Email",
          type: "email",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
   async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }
       await connect();
       const user = await User.findOne({
          email: credentials.email,
        });

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const isPasswordCorrect = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isPasswordCorrect) {
          throw new Error("Invalid email or password");
        }

        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
          role: user.role,
        };

      
      
      }





     })
  ],
  session:{
strategy:"jwt",
 maxAge: 7 * 24 * 60 * 60,
  },

   callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }

      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
      }

      return session;
    },
  },



  pages:{
 signIn: "/user/login",
  },
  secret:process.env.AUTH_SECRET
};
const handler=NextAuth(authOptions);

export { handler as GET, handler as POST };