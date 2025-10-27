import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
// Or add Google, GitHub, etc.

const handler = NextAuth({
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: { email: {}, password: {} },
      async authorize(creds) {
        // TODO: lookup user in DB, verify password
        // return { id, name, email } if ok
        return null;
      },
    }),
  ],
  pages: { signIn: "/auth/signin" },
});

export { handler as GET, handler as POST };
