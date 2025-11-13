import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Header from "@/components/header";
const inter=Inter ({subsets:["latin"]})


export const metadata = {
  title: "Wellth",
  description: "Financially Engineered for you",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/*header*/}
        <Header/>

        <main className="min-h-screen">
        {children}
        </main>
        
        {/*footer*/}
        <footer className="bg-blue-250 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
                <p>made with love</p>
          </div>
        </footer>





      </body>
    </html>
    </ClerkProvider>
  );
}
