import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter=Inter ({subsets:["latin"]})


export const metadata = {
  title: "Wellth",
  description: "Financially Engineered for you",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        {/*header*/}
        {children}
        {/*footer*/}

        <footer className="bg-blue-250 py-12">
          <div className="container mx-auto px-4 text-center text-gray-600">
                made with love
          </div>
        </footer>





      </body>
    </html>
  );
}
