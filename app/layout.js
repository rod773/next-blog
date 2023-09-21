import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";

export const metadata = {
  title: "Blog app with next 13",
  description: "latest blog on web development",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
