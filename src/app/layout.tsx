// src/app/layout.tsx
import Navbar from "@/components/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import Providers from "./providers";

export const metadata = {
  title: "Bileto",
  description: "Event platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-50 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <Navbar />
            {children}
            <Footer />
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
