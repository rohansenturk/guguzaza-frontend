import "./globals.css";

export const metadata = {
  title: "Guguzaza Inc.",
  description: "Generated by create next app",
  icons: {
    icon: '/favicon.webp'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
