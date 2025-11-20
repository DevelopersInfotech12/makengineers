import "./globals.css";
import WhatsAppWidget from "./Components/WhatsAppWidget";

export const metadata = {
  title: "Mak Engineers",
  description: "Blasting and Coating Services",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" sizes="any" />
      </head>
      <body>
         <WhatsAppWidget/>
        {children}
      </body>
    </html>
  );
}