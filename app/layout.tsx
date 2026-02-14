import Navbar from "./components/Navbar";
import "./globals.css";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    
      <body className="bg-black text-white">
        <Navbar />
        {children}
        <footer />
      </body>

  );
}
