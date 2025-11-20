
import "./globals.css";
import WhatsAppWidget from "./Components/WhatsAppWidget";


export const metadata = {
  title: "Mak Engineers",
  description: "Blasting and Coating Services",
  icons: {
    icon: "/images/logo.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
       
      >
         <WhatsAppWidget/>
        {children}
      </body>
    </html>
  );
}
