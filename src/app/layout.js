import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "BITEK GROCERY",
  description: "Create by Gaurav & Vishnu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Toaster position="top-center" reverseOrder={false} />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
