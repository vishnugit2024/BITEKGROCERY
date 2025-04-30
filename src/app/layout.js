import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export const metadata = {
  title: "BITEK GROCERY",
  description: "Create by Gaurav & Vishnu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
