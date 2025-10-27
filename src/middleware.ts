import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: { signIn: "/auth/signin" }, // your login page
});

export const config = {
  matcher: [
    "/checkout",           // protect the checkout page
    "/api/transactions/:path*", // protect transaction APIs
  ],
};
