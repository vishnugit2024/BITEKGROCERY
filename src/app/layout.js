import "./globals.css";

export const metadata = {
  title: "BITEK GROCERY",
  description: "Create by Gaurav & Vishnu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
