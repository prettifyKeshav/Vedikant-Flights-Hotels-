import MainTemplate from "@/components/templates/MainTemplate";
import "../app/global.css"

export const metadata = {
  title: "Flextron Circuit Assembly - We Engineer and Build for You !",
  description: "Flextron Circuit Assembly - We Engineer and Build for You !",
  icons: {
    icon: "/assets/icon/favicon/favicon.ico",
    shortcut: "/assets/icon/favicon/favicon.ico",
    apple: "/assets/icon/favicon/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/assets/icon/favicon/favicon-96x96.png",
      },
      {
        rel: "icon",
        type: "image/svg+xml",
        url: "/assets/icon/favicon/favicon.svg",
      },
      {
        rel: "manifest",
        url: "/assets/icon/favicon/site.webmanifest",
      },
    ],
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body>
        <MainTemplate>
          {children}
        </MainTemplate>
      </body>
    </html>
  );
}
