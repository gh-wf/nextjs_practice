import "./globals.css";

export const metadata = {
  title: "Zillow Clone",
  description: "Zillow Clone using Next.js",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}


export default RootLayout;